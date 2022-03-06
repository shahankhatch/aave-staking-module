import {makeSuite, TestEnv} from '../helpers/make-suite';
import {expect} from "chai";
import {MAX_UINT_AMOUNT} from "../../helpers/constants";
import {ethers} from "ethers";

makeSuite('AaveIncentivesController initialize', (testEnv: TestEnv) => {

    // it('Tries to call initialize second time, should be reverted', async () => {
    //   const {aaveIncentivesController} = testEnv;
    //   // await expect(aaveIncentivesController.initialize()).to.be.reverted;
    // });
    it('allowance on aave token should be granted to psm contract for pei', async () => {
        // const {
        //     aaveIncentivesController,
        //     stakedAave,
        //     aaveToken,
        //     users: [, staker],
        // } = testEnv;
        // const amount = ethers.utils.parseEther('50');

        // await aaveToken.connect(staker.signer).approve(stakedAave.address, amount)
        // await stakedAave.connect(staker.signer).stake(staker.address, amount)
        // await expect((await aaveToken.allowance(aaveIncentivesController.address, stakedAave.address)).toString()).to.be.equal(MAX_UINT_AMOUNT);
    });
});
