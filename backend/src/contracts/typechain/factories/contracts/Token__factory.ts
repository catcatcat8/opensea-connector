/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Token, TokenInterface } from "../../contracts/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000dcd38038062000dcd8339810160408190526200003491620002fe565b8351849084906200004d9060039060208501906200018b565b508051620000639060049060208401906200018b565b50506005805460ff191660ff85161790555062000099336200008784600a6200049e565b620000939084620004b6565b620000a3565b5050505062000530565b6001600160a01b038216620000fe5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001129190620004d8565b90915550506001600160a01b0382166000908152602081905260408120805483929062000141908490620004d8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546200019990620004f3565b90600052602060002090601f016020900481019282620001bd576000855562000208565b82601f10620001d857805160ff191683800117855562000208565b8280016001018555821562000208579182015b8281111562000208578251825591602001919060010190620001eb565b50620002169291506200021a565b5090565b5b808211156200021657600081556001016200021b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200025957600080fd5b81516001600160401b038082111562000276576200027662000231565b604051601f8301601f19908116603f01168101908282118183101715620002a157620002a162000231565b81604052838152602092508683858801011115620002be57600080fd5b600091505b83821015620002e25785820183015181830184015290820190620002c3565b83821115620002f45760008385830101525b9695505050505050565b600080600080608085870312156200031557600080fd5b84516001600160401b03808211156200032d57600080fd5b6200033b8883890162000247565b955060208701519150808211156200035257600080fd5b50620003618782880162000247565b935050604085015160ff811681146200037957600080fd5b6060959095015193969295505050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003e0578160001904821115620003c457620003c462000389565b80851615620003d257918102915b93841c9390800290620003a4565b509250929050565b600082620003f95750600162000498565b81620004085750600062000498565b81600181146200042157600281146200042c576200044c565b600191505062000498565b60ff84111562000440576200044062000389565b50506001821b62000498565b5060208310610133831016604e8410600b841016171562000471575081810a62000498565b6200047d83836200039f565b806000190482111562000494576200049462000389565b0290505b92915050565b6000620004af60ff841683620003e8565b9392505050565b6000816000190483118215151615620004d357620004d362000389565b500290565b60008219821115620004ee57620004ee62000389565b500190565b600181811c908216806200050857607f821691505b602082108114156200052a57634e487b7160e01b600052602260045260246000fd5b50919050565b61088d80620005406000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e1461019357600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101a6565b6040516100c391906106ca565b60405180910390f35b6100df6100da36600461073b565b610238565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610765565b610250565b60055460405160ff90911681526020016100c3565b6100df61013736600461073b565b610274565b6100f361014a3660046107a1565b6001600160a01b031660009081526020819052604090205490565b6100b6610296565b6100df61017b36600461073b565b6102a5565b6100df61018e36600461073b565b610325565b6100f36101a13660046107c3565b610333565b6060600380546101b5906107f6565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906107f6565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050905090565b60003361024681858561035e565b5060019392505050565b60003361025e858285610482565b6102698585856104fc565b506001949350505050565b6000336102468185856102878383610333565b6102919190610831565b61035e565b6060600480546101b5906107f6565b600033816102b38286610333565b9050838110156103185760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610269828686840361035e565b6000336102468185856104fc565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103c05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161030f565b6001600160a01b0382166104215760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161030f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061048e8484610333565b905060001981146104f657818110156104e95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161030f565b6104f6848484840361035e565b50505050565b6001600160a01b0383166105605760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161030f565b6001600160a01b0382166105c25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161030f565b6001600160a01b0383166000908152602081905260409020548181101561063a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161030f565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610671908490610831565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106bd91815260200190565b60405180910390a36104f6565b600060208083528351808285015260005b818110156106f7578581018301518582016040015282016106db565b81811115610709576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461073657600080fd5b919050565b6000806040838503121561074e57600080fd5b6107578361071f565b946020939093013593505050565b60008060006060848603121561077a57600080fd5b6107838461071f565b92506107916020850161071f565b9150604084013590509250925092565b6000602082840312156107b357600080fd5b6107bc8261071f565b9392505050565b600080604083850312156107d657600080fd5b6107df8361071f565b91506107ed6020840161071f565b90509250929050565b600181811c9082168061080a57607f821691505b6020821081141561082b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561085257634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212204befe50102eb0ce1c09583b1d03e242ea26015fb0b69eb3bb628025b8aa6e61d64736f6c634300080c0033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _totalSupply,
      overrides || {}
    ) as Promise<Token>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _totalSupply,
      overrides || {}
    );
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
