/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ChainlinkDataFeedsManagerInterface extends ethers.utils.Interface {
  functions: {
    "getAmountOutUSD(address,address,uint256)": FunctionFragment;
    "getLatestPriceFromChainlink()": FunctionFragment;
    "getNativeNetworkCurrencyInUsd()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountOutUSD",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestPriceFromChainlink",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeNetworkCurrencyInUsd",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmountOutUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestPriceFromChainlink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeNetworkCurrencyInUsd",
    data: BytesLike
  ): Result;

  events: {};
}

export class ChainlinkDataFeedsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ChainlinkDataFeedsManagerInterface;

  functions: {
    getAmountOutUSD(
      dexRouter: string,
      _tokenAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLatestPriceFromChainlink(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNativeNetworkCurrencyInUsd(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getAmountOutUSD(
    dexRouter: string,
    _tokenAddress: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLatestPriceFromChainlink(overrides?: CallOverrides): Promise<BigNumber>;

  getNativeNetworkCurrencyInUsd(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getAmountOutUSD(
      dexRouter: string,
      _tokenAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestPriceFromChainlink(overrides?: CallOverrides): Promise<BigNumber>;

    getNativeNetworkCurrencyInUsd(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAmountOutUSD(
      dexRouter: string,
      _tokenAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestPriceFromChainlink(overrides?: CallOverrides): Promise<BigNumber>;

    getNativeNetworkCurrencyInUsd(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountOutUSD(
      dexRouter: string,
      _tokenAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestPriceFromChainlink(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNativeNetworkCurrencyInUsd(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
