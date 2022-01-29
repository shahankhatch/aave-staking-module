/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ATokenMockInterface extends ethers.utils.Interface {
  functions: {
    "_aic()": FunctionFragment;
    "cleanUserState()": FunctionFragment;
    "getScaledUserBalanceAndSupply(address)": FunctionFragment;
    "handleActionOnAic(address,uint256,uint256)": FunctionFragment;
    "setUserBalanceAndSupply(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_aic", values?: void): string;
  encodeFunctionData(functionFragment: "cleanUserState", values?: void): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleActionOnAic",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserBalanceAndSupply",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "_aic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cleanUserState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleActionOnAic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserBalanceAndSupply",
    data: BytesLike
  ): Result;

  events: {
    "AssetConfigUpdated(address,uint256)": EventFragment;
    "AssetIndexUpdated(address,uint256)": EventFragment;
    "RewardsAccrued(address,uint256)": EventFragment;
    "UserIndexUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

export class ATokenMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ATokenMockInterface;

  functions: {
    _aic(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    cleanUserState(overrides?: Overrides): Promise<ContractTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    handleActionOnAic(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  _aic(overrides?: CallOverrides): Promise<string>;

  cleanUserState(overrides?: Overrides): Promise<ContractTransaction>;

  getScaledUserBalanceAndSupply(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  handleActionOnAic(
    user: string,
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setUserBalanceAndSupply(
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    _aic(overrides?: CallOverrides): Promise<string>;

    cleanUserState(overrides?: Overrides): Promise<void>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    handleActionOnAic(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {
    AssetConfigUpdated(asset: string | null, emission: null): EventFilter;

    AssetIndexUpdated(asset: string | null, index: null): EventFilter;

    RewardsAccrued(user: string | null, amount: null): EventFilter;

    UserIndexUpdated(
      user: string | null,
      asset: string | null,
      index: null
    ): EventFilter;
  };

  estimateGas: {
    _aic(): Promise<BigNumber>;
    cleanUserState(): Promise<BigNumber>;
    getScaledUserBalanceAndSupply(user: string): Promise<BigNumber>;
    handleActionOnAic(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish
    ): Promise<BigNumber>;
    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _aic(): Promise<PopulatedTransaction>;
    cleanUserState(): Promise<PopulatedTransaction>;
    getScaledUserBalanceAndSupply(user: string): Promise<PopulatedTransaction>;
    handleActionOnAic(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish
    ): Promise<PopulatedTransaction>;
    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
