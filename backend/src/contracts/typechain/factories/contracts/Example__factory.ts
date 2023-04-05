/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Example, ExampleInterface } from "../../contracts/Example";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161033438038061033483398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100db565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100be578081fd5b81516001600160a01b03811681146100d4578182fd5b9392505050565b61024a806100ea6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063f2fde38b14610084578063fc0c546a14610097575b600080fd5b6100596100aa565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100596100923660046101e6565b6100be565b600154610068906001600160a01b031681565b6100b261013c565b6100bc6000610196565b565b6100c661013c565b6001600160a01b0381166101305760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61013981610196565b50565b6000546001600160a01b031633146100bc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610127565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156101f7578081fd5b81356001600160a01b038116811461020d578182fd5b939250505056fea26469706673582212201bc91be42f567a0d0a9a80be542fdb0ec83eb227b9b57b56163f253710960bd564736f6c63430008040033";

type ExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Example__factory extends ContractFactory {
  constructor(...args: ExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Example> {
    return super.deploy(token_, overrides || {}) as Promise<Example>;
  }
  override getDeployTransaction(
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, overrides || {});
  }
  override attach(address: string): Example {
    return super.attach(address) as Example;
  }
  override connect(signer: Signer): Example__factory {
    return super.connect(signer) as Example__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleInterface {
    return new utils.Interface(_abi) as ExampleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Example {
    return new Contract(address, _abi, signerOrProvider) as Example;
  }
}
