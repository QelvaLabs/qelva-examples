# Node Basic Intent Example

Minimal example of sending a `TransferIntent` to a running Qelva-core backend.

## Prerequisites

- Qelva-core backend running locally at `http://localhost:4000`
- Node.js 18+ or 20+

## Run Qelva-core backend

```bash
git clone https://github.com/QelvaLabs/Qelva-core.git
cd Qelva-core
npm install
npm run dev:backend
```
Backend should be available at:
```bash
http://localhost:4000
```
Run this example
```bash
git clone https://github.com/QelvaLabs/qelva-examples.git
cd qelva-examples/examples/node-basic-intent
npm init -y
npm install typescript ts-node
npx ts-node index.ts
```
