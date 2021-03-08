const SpartanCouncil = artifacts.require('SpartanCouncil');

module.exports = function(deployer, network, accounts) {
	const pDAO = accounts[0];
	deployer.deploy(SpartanCouncil, 'Spartan Council', 'SC-NFT', {
		from: pDAO,
	});
};
