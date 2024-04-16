require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      // No es necesario configurar nada aquí si se utiliza Ganache por defecto.
    },
    ganache: {
      url: "http://localhost:8545", // Cambia el puerto si es diferente
      chainId: 5777 // Cambia el chainId si es diferente
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
