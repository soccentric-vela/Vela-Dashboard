# Vela-Dashboard TODO: add a description for Vela-Dashboard. ## Documentation - [webui/README.md](webui/README.md) — Web UI package (Next.js operator console).
- [docs/req.md](docs/req.md) — original design/build prompt for the Web UI.
- [docs/WEB_FINDINGS.md](docs/WEB_FINDINGS.md) — verified Server REST/SSE API inventory.
- [docs/AUDIT.md](docs/AUDIT.md) — independent verification audit of this repo.
- [.claude/skills/dashboard-architecture/SKILL.md](.claude/skills/dashboard-architecture/SKILL.md) — architecture, frontend/backend communication, and UI conventions for coding agents.

## Project Summary

Vela-Dashboard is the operator-facing web application in `webui/`. Its
Next.js-style App Router contains shared layout/providers and workspace routes
for the dashboard, runs, live run details, modules, module details, logs,
reporting, and AI/LLM functionality. `webui/app/globals.css` supplies global
styling. The repository also includes a Python contract-test package with
pytest tests for smoke behavior, runs, settings, and streaming. The package
lock, Docker Makefile, `docs/WEB_FINDINGS.md`, and `docs/AUDIT.md` document the
build and server-facing context. Route presence and contract tests establish
implementation evidence, but do not prove complete live-data integration,
browser behavior, responsiveness, or production deployment.

The dashboard’s contract tests are located outside the TypeScript application,
which is useful because they verify assumptions shared with Vela-Server rather
than only rendering details. The route inventory establishes navigation
surfaces, while `docs/WEB_FINDINGS.md` is the local reference for REST and SSE
endpoints. `docs/AUDIT.md` and `docs/req.md` should be read when a route appears
implemented but a requirement remains unresolved. No claim in this README
means that a browser session has been run, that authentication is configured,
or that live run updates remain stable under disconnect and reconnect. Those
are intentionally manual or integration checks. The table keeps route
presence, contract-test evidence, and deployment readiness separate so future
work can replace unknowns with concrete test names and results.

The same distinction applies to route loading states, error handling, and
stream reconnection, which are not settled by the file inventory alone.

The documented API findings are a useful contract boundary for checking route
parameters, authentication, response shapes, and event termination. They do
not replace browser checks for empty states, failed requests, long module names,
or narrow viewport layout.

## Feature Status

| # | Name / Description | Implemented? | Test Coverage? | Manual Test |
|---:|---|---|---|---|
| 1 | Web application shell, layout, and providers | Implemented | Contract package exists; UI runtime not verified | [ ] Manual verification required |
| 2 | Dashboard route | Implemented | Smoke test present | [ ] Manual verification required |
| 3 | Runs and live run routes | Implemented | `test_02_runs.py` | [ ] Manual verification required |
| 4 | Module routes | Implemented | No dedicated module test identified | [ ] Manual verification required |
| 5 | Settings route | Implemented | `test_03_settings.py` | [ ] Manual verification required |
| 6 | Logs, reporting, and AI/LLM views | Implemented | No dedicated coverage identified | [ ] Manual verification required |
| 7 | REST and SSE contract integration | Partial | `test_01_smoke.py`, `test_04_streaming.py` | [ ] Manual verification required |
| 8 | Docker/build workflow | Partial | Configuration presence only | [ ] Manual verification required |
| 9 | Responsive and production visual behavior | Unknown | No browser execution evidence found | [ ] Manual verification required |

Run the tests from `contract-tests/` with its `pyproject.toml` tooling and
consult `webui/README.md` for the web package commands.
