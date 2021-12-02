const buildWithdrawBalance = require("../src/utils/transactionBuilder").buildWithdrawBalance;
const buildUnfreezeBalance = require("../src/utils/transactionBuilder").buildUnfreezeBalance;
const buildFreezeBalance = require("../src/utils/transactionBuilder").buildFreezeBalance;
const byteArray2hexStr = require("../src/utils/bytes").byteArray2hexStr;
const buildVote = require("../src/utils/transactionBuilder").buildVote;
const { assert } = require('chai');

describe('transactionBuilder', () => {

  it('build voteContract', async () => {
    let transaction = buildVote("WVxMCV3d9BXsjY7EoXkY3V1FQoczXeVtPU", {
      "WVxMCV3d9BXsjY7EoXkY3V1FQoczXeVtPU": 100
    });

    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build freeze', async () => {
    let transaction = buildFreezeBalance("WVxMCV3d9BXsjY7EoXkY3V1FQoczXeVtPU", 100000000, 3);
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build unfreeze', async () => {
    let transaction = buildUnfreezeBalance("WVxMCV3d9BXsjY7EoXkY3V1FQoczXeVtPU");
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build withdraw', async () => {
    let transaction = buildWithdrawBalance("WVxMCV3d9BXsjY7EoXkY3V1FQoczXeVtPU");
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

});
