import type { Serve, Server }        from "bun";
import type { DefineCustomsMethods } from "./index_types";
import * as fs from 'fs';

const customMethods         = {} as {[key: string]: Function};
const definedServerSettings = {} as Serve;
const server                = {} as Server;

export async function useServer(serverSettings: any & Serve, methods?: DefineCustomsMethods) {
  if (methods) {
    for (const [method, information] of Object.entries(methods)) {
      customMethods[method] = information.action;
      information.useOnFirstStart && information.action();
    }
    Object.assign(definedServerSettings, serverSettings);
  }
  Object.assign(server, Bun.serve(serverSettings));
  // console.log("server started!");
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
export function useWatcher(pathsToWatch: string[], reloadRules: Function) {
  for (const path of pathsToWatch) {
    fs.watch(path, (eventType, filename) => {
      if (eventType === 'change') {
        reloadServer(reloadRules(path));
      }
    });
  }
}
