# Vela-Dashboard Build and Deployment

## Purpose and scope

Vela-Dashboard is the operator web application in `webui/`, built with Next.js
and tested with Vitest. `contract-tests/` contains Python REST/SSE contract
tests for the dashboard-to-server boundary. The root Makefile delegates web
commands and the Docker Makefile builds a production container.

## 1. Prerequisites

- Node.js/npm compatible with the locked Next.js 16, React 19, TypeScript, and
  Vitest dependencies; Python 3.11+ for `contract-tests`.
- Docker for image build and container execution.
- A running Vela-Server and its authentication/configuration for live contract
  tests; the contract package's optional dev dependencies include pytest-cov
  and ruff.

## 2. Setup

Run `make install` from the leaf to execute `npm install` in `webui/`. Install
the contract test package from `contract-tests/` with its project tooling (for
example, an editable dev install) before running those tests. Do not treat
`npm install` as a production build.

## 3. Build and compile

- `make dev` starts the Next.js development server with hot reload.
- `make build` runs `npm run build` and writes the Next.js production output
  under `webui/.next`.
- `cd webui && npm run type-check` runs TypeScript checking; this direct script
  is present in `webui/package.json` but is not wrapped by the root Makefile.

## 4. Tests and lint

`make test` runs `npm test` (`vitest run`) and `make lint` runs the Next.js ESLint
script. For the Python boundary suite, run `cd contract-tests && pytest`; use
the `smoke`, `runs`, `sse`, and `settings` markers selectively when a server is
available. The contract tests require live REST/SSE endpoints and are not a
substitute for browser verification.

## 5. Packaging and artifacts

The production web bundle is `webui/.next`. `make docker-build` delegates to
`docker/Makefile` and produces `vela-dashboard:latest` by default; override
`IMAGE`, `TAG`, and `PORT` when needed.

## 6. Deployment, install, and run

Build and run the container with `make docker-build` followed by `make
docker-run`. The Docker wrapper publishes host `PORT` (default `3010`) to
container port 3010 and runs detached with restart policy. Use `make
docker-logs`, `make docker-shell`, and `make docker-stop` for operations. The
local server can be started with `cd webui && npm run start` after `make build`.

## 7. Cleanup

`make clean` removes `webui/.next`. `make docker-stop` removes the container;
`make docker-clean` stops it and removes the selected image/tag.

## 8. Hardware, cloud, and manual verification caveats

No hardware is built here, but live behavior depends on Vela-Server URLs,
authentication, REST response shapes, and SSE reconnect behavior. The Docker
Makefile exposes HTTP on the host and does not configure TLS or credentials;
place it behind the intended deployment controls and verify responsive browser
behavior, production environment variables, and real API sessions manually.