require('dotenv').config()

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Interactuando desde la billetera:", deployer.address)

  console.log("Balance:", (await deployer.provider.getBalance(deployer.address)).toString())

  // obtiene el código del contrato
  const Token = await ethers.getContractFactory("EspejoToken");
  //despliega el contrato en el blockchain
  const token = await Token.deploy();

  console.log("Resultado:", token);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });