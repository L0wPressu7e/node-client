const { generateAccount } = require('@welups/node-client/src/utils/account');

const newAddress = generateAccount();
console.log("Generated address", newAddress)