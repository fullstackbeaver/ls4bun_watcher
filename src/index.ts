import * as path from "path";
import { watch } from "chokidar";

import type { Serve, Server }        from "bun";
import type { DefineCustomsMethods } from "./index_types";

const customMethods         = {} as {[key: string]: Function};
const definedServerSettings = {} as Serve;
const server                = {} as Server;

export async function useServer(serverSettings: any, methods?: DefineCustomsMethods) {
  if (methods) {
    for (const [method, information] of Object.entries(methods)) {
      customMethods[method] = information.action;
      information.useOnFirstStart && information.action();
    }
    Object.assign(definedServerSettings, serverSettings);
  }
  Object.assign(server, Bun.serve(serverSettings));
  console.log("server started!"+serverSettings.host+":"+serverSettings.port);
}

export async function reloadServer(args: string[]) {
  console.log("Reloading server...", args);
  for (const arg of args) {
    if (customMethods[arg]){
      customMethods[arg].constructor.name === "AsyncFunction"
        ? await customMethods[arg]()
        : customMethods[arg]();
    }
  }

  server.reload(definedServerSettings);
  console.log("Server reloaded");
}

/**
 * Sets up a file watcher on the specified paths and triggers a server reload
 * according to the provided reload rules when changes are detected.
 *
 * @param pathsToWatch - An array of file paths to monitor for changes.
 * @param reloadRules  - A function that returns the rules to determine how the server should be reloaded.
 */
export function useWatcher(pathsToWatch: string[], reloadRules:Function) {
  const watcher = watch(pathsToWatch, { persistent: true });

  const restartScript = async (filePath: string) => {

    console.log(`Change detected in the file : ${filePath}`); //TODO supprimer une foi le debug fini
    console.log(`File folder modified : ${path.dirname(filePath)}`);

    const extra = [] as string[];

    filePath.endsWith(".scss") && extra.push("css");
    // filePath.endsWith(".json") && extra.push("generateFileTree"); //TODO mettre à jour au moment de l'enregistrement

    reloadServer(reloadRules());
  };

  watcher.on("change", (filePath: string) => {
    restartScript(filePath);
  });
}
