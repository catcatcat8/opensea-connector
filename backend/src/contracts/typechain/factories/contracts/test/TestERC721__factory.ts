/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC721,
  TestERC721Interface,
} from "../../../contracts/test/TestERC721";

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
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
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
        name: "id",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
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
        name: "",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "id",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
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
        name: "",
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
    stateMutability: "pure",
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
        name: "id",
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
  "0x60806040523480156200001157600080fd5b50604051806040016040528060078152602001665465737437323160c81b8152506040518060400160405280600681526020016554535437323160d01b81525081600090816200006291906200011f565b5060016200007182826200011f565b505050620001eb565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000a557607f821691505b602082108103620000c657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011a57600081815260208120601f850160051c81016020861015620000f55750805b601f850160051c820191505b81811015620001165782815560010162000101565b5050505b505050565b81516001600160401b038111156200013b576200013b6200007a565b62000153816200014c845462000090565b84620000cc565b602080601f8311600181146200018b5760008415620001725750858301515b600019600386901b1c1916600185901b17855562000116565b600085815260208120601f198616915b82811015620001bc578886015182559484019460019091019084016200019b565b5085821015620001db5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d6480620001fb6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101f7578063b88d4fde1461020a578063c87b56dd1461021d578063e985e9c51461024e57600080fd5b80636352211e146101bb57806370a08231146101ce57806395d89b41146101ef57600080fd5b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018257806340c10f191461019557806342842e0e146101a857600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610a56565b61027c565b60405190151581526020015b60405180910390f35b61011f6102ce565b60405161010e9190610a7a565b61015561013a366004610ac8565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200161010e565b61018061017b366004610af8565b61035c565b005b610180610190366004610b22565b610443565b6101026101a3366004610af8565b61060a565b6101806101b6366004610b22565b61061f565b6101556101c9366004610ac8565b610717565b6101e16101dc366004610b5e565b61076e565b60405190815260200161010e565b61011f6107d1565b610180610205366004610b79565b6107de565b610180610218366004610bb5565b61084a565b61011f61022b366004610ac8565b50604080518082019091526008815267746f6b656e55524960c01b602082015290565b61010261025c366004610c50565b600560209081526000928352604080842090915290825290205460ff1681565b60006301ffc9a760e01b6001600160e01b0319831614806102ad57506380ac58cd60e01b6001600160e01b03198316145b806102c85750635b5e139f60e01b6001600160e01b03198316145b92915050565b600080546102db90610c83565b80601f016020809104026020016040519081016040528092919081815260200182805461030790610c83565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b505050505081565b6000818152600260205260409020546001600160a01b0316338114806103a557506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6103e75760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b60008281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152600260205260409020546001600160a01b038481169116146104995760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b60448201526064016103de565b6001600160a01b0382166104e35760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b60448201526064016103de565b336001600160a01b038416148061051d57506001600160a01b038316600090815260056020908152604080832033845290915290205460ff165b8061053e57506000818152600460205260409020546001600160a01b031633145b61057b5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064016103de565b6001600160a01b0380841660008181526003602090815260408083208054600019019055938616808352848320805460010190558583526002825284832080546001600160a01b03199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60006106168383610932565b50600192915050565b61062a838383610443565b6001600160a01b0382163b15806106d35750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af11580156106a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c79190610cbd565b6001600160e01b031916145b6107125760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016103de565b505050565b6000818152600260205260409020546001600160a01b0316806107695760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016103de565b919050565b60006001600160a01b0382166107b55760405162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b60448201526064016103de565b506001600160a01b031660009081526003602052604090205490565b600180546102db90610c83565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610855858585610443565b6001600160a01b0384163b15806108ec5750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a029061089d9033908a90899089908990600401610cda565b6020604051808303816000875af11580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190610cbd565b6001600160e01b031916145b61092b5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016103de565b5050505050565b6001600160a01b03821661097c5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b60448201526064016103de565b6000818152600260205260409020546001600160a01b0316156109d25760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b60448201526064016103de565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610a5357600080fd5b50565b600060208284031215610a6857600080fd5b8135610a7381610a3d565b9392505050565b600060208083528351808285015260005b81811015610aa757858101830151858201604001528201610a8b565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215610ada57600080fd5b5035919050565b80356001600160a01b038116811461076957600080fd5b60008060408385031215610b0b57600080fd5b610b1483610ae1565b946020939093013593505050565b600080600060608486031215610b3757600080fd5b610b4084610ae1565b9250610b4e60208501610ae1565b9150604084013590509250925092565b600060208284031215610b7057600080fd5b610a7382610ae1565b60008060408385031215610b8c57600080fd5b610b9583610ae1565b915060208301358015158114610baa57600080fd5b809150509250929050565b600080600080600060808688031215610bcd57600080fd5b610bd686610ae1565b9450610be460208701610ae1565b935060408601359250606086013567ffffffffffffffff80821115610c0857600080fd5b818801915088601f830112610c1c57600080fd5b813581811115610c2b57600080fd5b896020828501011115610c3d57600080fd5b9699959850939650602001949392505050565b60008060408385031215610c6357600080fd5b610c6c83610ae1565b9150610c7a60208401610ae1565b90509250929050565b600181811c90821680610c9757607f821691505b602082108103610cb757634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610ccf57600080fd5b8151610a7381610a3d565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290526000828460a0840137600060a0848401015260a0601f19601f8501168301019050969550505050505056fea264697066735822122085555bd5433432296592d5df7a8531b29e495bac559f288626851bffb1b139ba64736f6c63430008110033";

type TestERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC721__factory extends ContractFactory {
  constructor(...args: TestERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC721> {
    return super.deploy(overrides || {}) as Promise<TestERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestERC721 {
    return super.attach(address) as TestERC721;
  }
  override connect(signer: Signer): TestERC721__factory {
    return super.connect(signer) as TestERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC721Interface {
    return new utils.Interface(_abi) as TestERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC721 {
    return new Contract(address, _abi, signerOrProvider) as TestERC721;
  }
}
