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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IMetaStocksBaseManagerInterface extends ethers.utils.Interface {
  functions: {
    "createManager()": FunctionFragment;
    "deleteManager(uint256)": FunctionFragment;
    "getManager(address)": FunctionFragment;
    "updateManager(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deleteManager",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getManager", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateManager",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateManager",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMetaStocksBaseManager extends BaseContract {
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

  interface: IMetaStocksBaseManagerInterface;

  functions: {
    createManager(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteManager(
      managerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getManager(_account: string, overrides?: CallOverrides): Promise<[string]>;

    updateManager(
      managerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createManager(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteManager(
    managerId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getManager(_account: string, overrides?: CallOverrides): Promise<string>;

  updateManager(
    managerId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createManager(overrides?: CallOverrides): Promise<void>;

    deleteManager(
      managerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getManager(_account: string, overrides?: CallOverrides): Promise<string>;

    updateManager(
      managerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createManager(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteManager(
      managerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getManager(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    updateManager(
      managerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createManager(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteManager(
      managerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getManager(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateManager(
      managerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
