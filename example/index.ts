import { useServer, useWatcher } from "../src";

useServer(
  {
    error: (e) => new Response(e.message, { status: 500 }),
    port  : 4002,
    routes: {
      "/": new Response("OK")
    }
  },
  { // methods to launch on server start or on reload
    css: {
      action         : () => {/* a function that compile CSS */ },
      useOnFirstStart: true  // if true, the function will be called on server start
    }
  }
);

useWatcher(
  [__dirname+"/dist"],
  (filePath:string) => {
    const fnToCallOnReload = [] as string[];
    filePath.endsWith(".scss") && fnToCallOnReload.push("css");
    // it could have more rules, just fill the array with needed methods name
    return fnToCallOnReload;
  }
);