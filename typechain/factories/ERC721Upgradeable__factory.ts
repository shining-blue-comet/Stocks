/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061120c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c80636352211e1161007c5780636352211e1461016757806370a082311461017a57806395d89b411461019b578063a22cb465146101a3578063b88d4fde146101b6578063c87b56dd146101c9578063e985e9c5146101dc57600080fd5b806301ffc9a7146100c457806306fdde03146100ec578063081812fc14610101578063095ea7b31461012c57806323b872dd1461014157806342842e0e14610154575b600080fd5b6100d76100d2366004610d1f565b6101ef565b60405190151581526020015b60405180910390f35b6100f4610241565b6040516100e39190610d94565b61011461010f366004610da7565b6102d3565b6040516001600160a01b0390911681526020016100e3565b61013f61013a366004610ddc565b610360565b005b61013f61014f366004610e06565b610470565b61013f610162366004610e06565b6104a1565b610114610175366004610da7565b6104bc565b61018d610188366004610e42565b610533565b6040519081526020016100e3565b6100f46105ba565b61013f6101b1366004610e5d565b6105c9565b61013f6101c4366004610eaf565b6105d8565b6100f46101d7366004610da7565b610610565b6100d76101ea366004610f8b565b6106e8565b60006001600160e01b031982166380ac58cd60e01b148061022057506001600160e01b03198216635b5e139f60e01b145b8061023b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606065805461025090610fbe565b80601f016020809104026020016040519081016040528092919081815260200182805461027c90610fbe565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b5050505050905090565b60006102de82610716565b6103445760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061036b826104bc565b9050806001600160a01b0316836001600160a01b0316036103d85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161033b565b336001600160a01b03821614806103f457506103f481336106e8565b6104615760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606482015260840161033b565b61046b8383610733565b505050565b61047a33826107a1565b6104965760405162461bcd60e51b815260040161033b90610ff8565b61046b83838361086b565b61046b838383604051806020016040528060008152506105d8565b6000818152606760205260408120546001600160a01b03168061023b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161033b565b60006001600160a01b03821661059e5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161033b565b506001600160a01b031660009081526068602052604090205490565b60606066805461025090610fbe565b6105d4338383610a07565b5050565b6105e233836107a1565b6105fe5760405162461bcd60e51b815260040161033b90610ff8565b61060a84848484610ad1565b50505050565b606061061b82610716565b61067f5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161033b565b600061069660408051602081019091526000815290565b905060008151116106b657604051806020016040528060008152506106e1565b806106c084610b04565b6040516020016106d1929190611049565b6040516020818303038152906040525b9392505050565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b6000908152606760205260409020546001600160a01b0316151590565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610768826104bc565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006107ac82610716565b61080d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161033b565b6000610818836104bc565b9050806001600160a01b0316846001600160a01b0316148061083f575061083f81856106e8565b806108635750836001600160a01b0316610858846102d3565b6001600160a01b0316145b949350505050565b826001600160a01b031661087e826104bc565b6001600160a01b0316146108e25760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161033b565b6001600160a01b0382166109445760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161033b565b61094f600082610733565b6001600160a01b038316600090815260686020526040812080546001929061097890849061108e565b90915550506001600160a01b03821660009081526068602052604081208054600192906109a69084906110a5565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610a645760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161033b565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610adc84848461086b565b610ae884848484610c05565b61060a5760405162461bcd60e51b815260040161033b906110bd565b606081600003610b2b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b555780610b3f8161110f565b9150610b4e9050600a8361113e565b9150610b2f565b60008167ffffffffffffffff811115610b7057610b70610e99565b6040519080825280601f01601f191660200182016040528015610b9a576020820181803683370190505b5090505b841561086357610baf60018361108e565b9150610bbc600a86611152565b610bc79060306110a5565b60f81b818381518110610bdc57610bdc611166565b60200101906001600160f81b031916908160001a905350610bfe600a8661113e565b9450610b9e565b60006001600160a01b0384163b15610cfb57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c4990339089908890889060040161117c565b6020604051808303816000875af1925050508015610c84575060408051601f3d908101601f19168201909252610c81918101906111b9565b60015b610ce1573d808015610cb2576040519150601f19603f3d011682016040523d82523d6000602084013e610cb7565b606091505b508051600003610cd95760405162461bcd60e51b815260040161033b906110bd565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610863565b506001949350505050565b6001600160e01b031981168114610d1c57600080fd5b50565b600060208284031215610d3157600080fd5b81356106e181610d06565b60005b83811015610d57578181015183820152602001610d3f565b8381111561060a5750506000910152565b60008151808452610d80816020860160208601610d3c565b601f01601f19169290920160200192915050565b6020815260006106e16020830184610d68565b600060208284031215610db957600080fd5b5035919050565b80356001600160a01b0381168114610dd757600080fd5b919050565b60008060408385031215610def57600080fd5b610df883610dc0565b946020939093013593505050565b600080600060608486031215610e1b57600080fd5b610e2484610dc0565b9250610e3260208501610dc0565b9150604084013590509250925092565b600060208284031215610e5457600080fd5b6106e182610dc0565b60008060408385031215610e7057600080fd5b610e7983610dc0565b915060208301358015158114610e8e57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610ec557600080fd5b610ece85610dc0565b9350610edc60208601610dc0565b925060408501359150606085013567ffffffffffffffff80821115610f0057600080fd5b818701915087601f830112610f1457600080fd5b813581811115610f2657610f26610e99565b604051601f8201601f19908116603f01168101908382118183101715610f4e57610f4e610e99565b816040528281528a6020848701011115610f6757600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610f9e57600080fd5b610fa783610dc0565b9150610fb560208401610dc0565b90509250929050565b600181811c90821680610fd257607f821691505b602082108103610ff257634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000835161105b818460208801610d3c565b83519083019061106f818360208801610d3c565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110a0576110a0611078565b500390565b600082198211156110b8576110b8611078565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006001820161112157611121611078565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261114d5761114d611128565b500490565b60008261116157611161611128565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111af90830184610d68565b9695505050505050565b6000602082840312156111cb57600080fd5b81516106e181610d0656fea2646970667358221220515f060e25155da946586a75c80cb37b937251947c7330b0db6ad7d6c5d17f3e64736f6c634300080e0033";

export class ERC721Upgradeable__factory extends ContractFactory {
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
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}