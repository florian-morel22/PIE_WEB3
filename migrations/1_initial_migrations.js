const Migrations = artefacts.require('Migrations');

module.export = function deployer(){
    deployer.deploy(Migrations)
};