// block.js
const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
  return SHA256(
    this.index.toString() +
    this.previousHash +
    this.timestamp.toString() +
    JSON.stringify(this.data) +
    this.nonce.toString()
  ).toString();
 }
 mineBlock(difficulty) {
  const target = Array(difficulty + 1).join('0'); // e.g. '0000'
  let start = Date.now();
  while (this.hash.substring(0, difficulty) !== target) {
    this.nonce++;
    this.hash = this.calculateHash();
  }
  let timeTaken = (Date.now() - start) / 1000;
  console.log(`Block mined: ${this.hash}`);
  console.log(`Nonce: ${this.nonce} (time: ${timeTaken}s)`)
  console.log(`Final hash for block #${this.index}: ${this.hash}`);
 }
  
}

module.exports = Block;
