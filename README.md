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

## Sonar Cloud evaluation

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=coverage)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fullstackbeaver_ls4bun_watcher&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=fullstackbeaver_ls4bun_watcher)

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).