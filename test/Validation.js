const ValidationContract = artifacts.require('validation');

contract('validation', ()=>{
    it('Should deply smart contract', async ()=>{
        const validationContract = await ValidationContract.deployed();
        console.log(validationContract.address);
        assert(validationContract.address !==  '');
    });
});