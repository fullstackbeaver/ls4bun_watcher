#!/bin/bash

##### nettoyage
if [ -d "./lib" ]; then
    rm -r "./lib"
fi

##### compilation typage des fonctions
bun tsc --project tsconfig.json

##### ajout des déclarations
cp src/*.d.ts     lib/

##### compilation de l'application
bun build ./src/index.ts --outdir ./lib --minify --target bun --minify --packages external