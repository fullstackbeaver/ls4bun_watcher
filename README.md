# ls4bun_watcher

A fast and efficient file watcher and server reload tool built with Bun. Originally designed for ls4bun, but easily adaptable to any NodeJs-based server with minimal changes.

## Getting Started

### Installation

To install dependencies, run the following command:

```bash
bun install
```

### Running the Project

To start the project, run the following command:

```bash
bun run index.ts
```

## Features

* File watching and server reload capabilities
* Customizable reload rules
* Support for TypeScript and ESNext features

## Usage

To use the file watcher and server reload functionality, simply import and call the `useWatcher` and `useServer` functions in your code.

```typescript
import { useWatcher, useServer } from './src';

useServer({
  // server settings
});

useWatcher([
  // paths to watch
], (filePath) => {
  // reload rules
});
```

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).