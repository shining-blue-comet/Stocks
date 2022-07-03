/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TransactionFeesManager,
  TransactionFeesManagerInterface,
} from "../TransactionFeesManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lpPairAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calcBuySellTransferFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isExcludedFromFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setExcludedFromFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "buyFee",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "sellFee",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "transferFee",
        type: "uint16",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612710600155604080516060810182526000808252602082018190529101819052805465ffffffffffff191690556103d48061004e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635342acb414610051578063534c6bcb146100795780636612e66f146100c8578063f72bbec414610101575b600080fd5b61006461005f366004610231565b610122565b60405190151581526020015b60405180910390f35b6100c6610087366004610265565b6000805461ffff94851663ffffffff199091161762010000938516939093029290921765ffff0000000019166401000000009190931602919091179055565b005b6100c66100d63660046102a8565b6001600160a01b03919091166000908152600260205260409020805460ff1916911515919091179055565b61011461010f3660046102e4565b610140565b604051908152602001610070565b6001600160a01b031660009081526002602052604090205460ff1690565b6000808061014d86610122565b8061015c575061015c85610122565b1561016c5760009250505061020d565b866001600160a01b0316866001600160a01b03160361019d576000546101969061ffff1683610345565b91506101e9565b866001600160a01b0316856001600160a01b0316036101cd576000546101969062010000900461ffff1683610345565b6000546101e690640100000000900461ffff1683610345565b91505b8115610209576001546101fc838661035d565b610206919061037c565b90505b9150505b949350505050565b80356001600160a01b038116811461022c57600080fd5b919050565b60006020828403121561024357600080fd5b61024c82610215565b9392505050565b803561ffff8116811461022c57600080fd5b60008060006060848603121561027a57600080fd5b61028384610253565b925061029160208501610253565b915061029f60408501610253565b90509250925092565b600080604083850312156102bb57600080fd5b6102c483610215565b9150602083013580151581146102d957600080fd5b809150509250929050565b600080600080608085870312156102fa57600080fd5b61030385610215565b935061031160208601610215565b925061031f60408601610215565b9396929550929360600135925050565b634e487b7160e01b600052601160045260246000fd5b600082198211156103585761035861032f565b500190565b60008160001904831182151516156103775761037761032f565b500290565b60008261039957634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122056fd0dca67deab988cff98b5ddd8d043ddc462da2cabce5afb3c8ac90ebf2bbc64736f6c634300080e0033";

export class TransactionFeesManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TransactionFeesManager> {
    return super.deploy(overrides || {}) as Promise<TransactionFeesManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TransactionFeesManager {
    return super.attach(address) as TransactionFeesManager;
  }
  connect(signer: Signer): TransactionFeesManager__factory {
    return super.connect(signer) as TransactionFeesManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransactionFeesManagerInterface {
    return new utils.Interface(_abi) as TransactionFeesManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransactionFeesManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransactionFeesManager;
  }
}
