# Suitest JavaScript API demo - Gauge integration

This repository contains a demo of [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) end-to-end tests using the [Gauge test runner](https://gauge.org).

## Setup

### 1. Configure Suitest credentials

Copy `.suitestrc.dist` to `.suitestrc` in the project root and fill in the required values according to the [Suitest environment setup documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).

The `.suitestrc.dist` file is a template. The actual `.suitestrc` file is your local configuration and should not be committed if it contains credentials or other sensitive values.

### 2. Install dependencies

Run the following command in the project root:

```bash
npm ci
```

### 3. Choose how to run the tests

This repository includes examples of configurations for running tests on a single device or multiple devices in parallel. You can find them in `config-examples/`.

#### Single-device execution

Run the end-to-end tests using the default configuration:

```bash
npm run start
```

The default configuration specifies a single `deviceId` and `appConfigId`.

#### Parallel execution

Run the end-to-end tests using the parallel configuration:

```bash
npm run parallel
```

The parallel configuration uses `presets` to define the device configurations for the run. Each preset can specify the relevant device and application configuration.

To use the example configuration, provide your own values and credentials. See `config-examples/.suitestrc.parallel.json` for the expected structure.

**Important:** Explicit `deviceId` and `appConfigId` values take precedence over presets. If you want to run tests using presets, do not specify these values at the top level of the effective configuration.

## Configuration files

The `config-examples/` directory contains the following example files:

| File | Purpose |
| --- | --- |
| `.suitestrc.base.json` | Shared Suitest credentials (`tokenId` and `tokenPassword`) |
| `.suitestrc.json` | Example configuration for running tests on a single device |
| `.suitestrc.parallel.json` | Example configuration for running tests on multiple devices using presets |

The example configurations use `extends` to inherit shared settings from `.suitestrc.base.json`. This avoids duplicating credentials across configuration files.

The `extends` value is a path to another configuration file, resolved relative to the directory containing the configuration file that declares it. Relative paths can point to files in the same directory or elsewhere in the project.

These files are examples for reference. Adapt them to your environment before using them.

## Available commands

| Command | Description |
| --- | --- |
| `npm run start` | Run end-to-end tests |
| `npm run start:home` | Run tests tagged `e2e` and `home` |
| `npm run start:video` | Run tests tagged `e2e` and `video` |
| `npm run start:smoke` | Run smoke tests |
| `npm run parallel` | Run end-to-end tests using the parallel configuration |
| `npm run parallel:smoke` | Run smoke tests using the parallel configuration |

## Example tests

The repository contains Suitest tests for the WatchMe app, which is available by default in every Suitest account.

The tests rely on elements defined in the Suitest Element Repository and on an application configuration whose base URL is set to [https://watchme.suite.st/hbbtv.html](https://watchme.suite.st/hbbtv.html). This corresponds to the HbbTV configuration in the WatchMe app.

Make sure your Suitest device, application configuration, credentials, and Element Repository are set up correctly before running the tests.