const main = async () => {
  const [owner, randomPerson1, randomPerson2, randomPerson3] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contrato desplegado a :", waveContract.address);
  console.log("Contrato desplegado por :", owner.address);


  //primer conteo
  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  //primer saludo
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  //3 saludos mas
  for (let step = 0; step < 3; step++){
    waveTxn = await waveContract.connect(randomPerson1).wave();
    await waveTxn.wait();
  
  }
  //quinto saludo
  waveTxn = await waveContract.connect(randomPerson2).wave();
  await waveTxn.wait();
  //sexto saludo
  waveTxn = await waveContract.connect(randomPerson3).wave();
  await waveTxn.wait();
  
  //conteo total de saludos
  waveCount = await waveContract.getTotalWaves();

  //conteo de dirección con mayor cantidad de saludos
  let mayorsaludo;
  mayorsaludo = await waveContract.getAdressMoreWaves();

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();