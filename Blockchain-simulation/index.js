// index.js
const Blockchain = require('./blockchain');
const Block = require('./block');

let demoChain = new Blockchain();

// Create 3 linked blocks
demoChain.addBlock(new Block(1, Date.now().toString(), { amount: 100 }));
demoChain.addBlock(new Block(2, Date.now().toString(), { amount: 50 }));
demoChain.addBlock(new Block(3, Date.now().toString(), { amount: 25 }));

console.log('\nFull blockchain:', JSON.stringify(demoChain, null, 2));
console.log('Is blockchain valid?', demoChain.isChainValid());

// 🔧 Challenge: Tamper with Block 1
demoChain.chain[1].data = { amount: 1000 };
demoChain.chain[1].hash = demoChain.chain[1].calculateHash();

console.log('\nAfter tampering:');
console.log('Is blockchain valid now?', demoChain.isChainValid());
