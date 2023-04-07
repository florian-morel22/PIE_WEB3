const Validation = artefacts.require('Validation');

module.export = async function (deployer){
    await deployer.deploy(Validation)
};

