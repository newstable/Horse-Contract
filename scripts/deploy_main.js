const fs = require("fs");
const colors = require("colors");
const { ethers } = require("hardhat");

async function main() {
  // get network
  var [owner] = await ethers.getSigners();

  let network = await owner.provider._networkPromise;

  //QE token deployment
  const SaitaInu = await ethers.getContractFactory("SaitaInu");
  const saitaInu = await SaitaInu.deploy();
  await saitaInu.deployed();
  console.log(saitaInu.address);

  // deployment result
  // var contractObject = {
  //     token: {
  //         address: tokenContract.address,
  //         abi: ERC20ABI
  //     },
  //     presale: {
  //         address: presaleContract.address,
  //         abi: PresaleABI
  //     }
  // }

  // fs.writeFileSync(
  //     `./build/${network.chainId}.json`,
  //     JSON.stringify(contractObject, undefined, 4)
  // );
}

main()
  .then(() => {
    console.log("complete".green);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
