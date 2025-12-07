# Qelva Examples  
### Example Integrations & Sample Apps for the Qelva Privacy Stack

This repository contains **small, focused examples** showing how to work with Qelva:

- Calling the backend API from TypeScript
- Working with intents (`TransferIntent`)
- Preparing for future Qelva SDK and relayer flows
- Wiring simple UIs to Qelva concepts (personas, intents, automation)

Core implementation lives in [`QelvaLabs/Qelva-core`](https://github.com/QelvaLabs/Qelva-core).

---

## 📁 Structure (planned)

```txt
qelva-examples/
├─ examples/
│  ├─ node-basic-intent/        → Node script calling backend /intents/transfer
│  ├─ nextjs-basic-dashboard/   → Simple dashboard shell (planned)
│  └─ worker-relay-proxy/       → Edge/worker style example (planned)
└─ docs/
   └─ getting-started.md


---

```
## Status

- `examples/node-basic-intent`: **implemented** — minimal Node script calling `/intents/transfer`.
- `examples/nextjs-basic-dashboard`: planned.
- `examples/worker-relay-proxy`: planned.

More examples will be added as Qelva-core evolves.
