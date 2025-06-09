const crypto = require('crypto');
const { randomInt } = require('crypto');

// Helper function to simulate a random integer within a range
function getRandomInt(min, max) {
  return randomInt(min, max + 1);
}

// Simulate Proof of Work (PoW)
function simulatePoW() {
  const miner = { power: getRandomInt(1, 100) };
  console.log(`PoW: Selected miner with power ${miner.power}`);
  return miner;
}

// Simulate Proof of Stake (PoS)
function simulatePoS() {
  const staker = { stake: getRandomInt(1, 100) };
  console.log(`PoS: Selected staker with stake ${staker.stake}`);
  return staker;
}

// Simulate Delegated Proof of Stake (DPoS)
function simulateDPoS() {
  const voters = [
    { name: 'Alice', votes: getRandomInt(1, 100) },
    { name: 'Bob', votes: getRandomInt(1, 100) },
    { name: 'Charlie', votes: getRandomInt(1, 100) }
  ];

  const selectedDelegate = voters.reduce((prev, current) => (prev.votes > current.votes ? prev : current));
  console.log(`DPoS: Selected delegate ${selectedDelegate.name} with ${selectedDelegate.votes} votes`);
  return selectedDelegate;
}

// Main function to simulate consensus mechanisms
function simulateConsensus() {
  console.log('Simulating Proof of Work (PoW):');
  simulatePoW();
  console.log('\nSimulating Proof of Stake (PoS):');
  simulatePoS();
  console.log('\nSimulating Delegated Proof of Stake (DPoS):');
  simulateDPoS();
}

// Run the simulation
simulateConsensus();
