// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Community = await ethers.getContractFactory("Community");
  const community = await Community.deploy("Community Name", "Community Address", "President Name", "Admin Name", 1234567890); // Cambia los parámetros según tus necesidades

  console.log("Community contract address:", community.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
