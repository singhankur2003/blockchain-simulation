// index.js
const Blockchain = require('./blockchain');
const Block = require('./block');

let myChain = new Blockchain();

console.log("Mining block #1...");
myChain.addBlock(new Block(1, Date.now().toString(), { amount: 100 }));

console.log("Mining block #2...");
myChain.addBlock(new Block(2, Date.now().toString(), { amount: 50 }));

console.log("Mining block #3...");
myChain.addBlock(new Block(3, Date.now().toString(), { amount: 25 }));

console.log("\nIs chain valid?", myChain.isChainValid());
