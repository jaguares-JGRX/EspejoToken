require('dotenv').config()

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Interactuando desde la billetera:", deployer.address)

  console.log("Balance:", (await deployer.provider.getBalance(deployer.address)).toString())

  // obtiene el código del contrato
  const Token = await ethers.getContractFactory("EspejoToken") 
  // obtiene el contrato desplegado en la red
  const token = await Token.attach(process.env.CONTRACT_ADDRESS)

  // transfiere todos los tokens 
  const transferTokens = await token.transfer(process.env.NEW_OWNER, 999666)
  console.log("resultado de transferencia de tokens", transferTokens)

  // Transfiere la propiedad del contrato
  const transferOwnership = await token.transferOwnership(process.env.NEW_OWNER)
  console.log("Transferencia de propiedad: ", transferOwnership)

  // Verifica el nuevo propietario
  const newOwner = await token.owner()
  console.log("Propietario:", newOwner);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });