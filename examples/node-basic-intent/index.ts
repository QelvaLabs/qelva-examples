type TransferIntent = {
  id: string;
  fromPersonaId: string;
  toAddress: string;
  tokenMint: string;
  amountLamports: string;
  createdAt: string;
};

async function main() {
  const intent: TransferIntent = {
    id: `intent-${Date.now()}`,
    fromPersonaId: 'persona-main',
    toAddress: 'So11111111111111111111111111111111111111112',
    tokenMint: 'So11111111111111111111111111111111111111112',
    amountLamports: '1000000',
    createdAt: new Date().toISOString()
  };

  const res = await fetch('http://localhost:4000/intents/transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(intent)
  });

  const json = await res.json();
  console.log('Response from Qelva backend:', json);
}

main().catch((err) => {
  console.error('Error in example:', err);
  process.exit(1);
});
