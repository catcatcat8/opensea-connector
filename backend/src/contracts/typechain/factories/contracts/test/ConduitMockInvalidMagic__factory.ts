/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ConduitMockInvalidMagic,
  ConduitMockInvalidMagicInterface,
} from "../../../contracts/test/ConduitMockInvalidMagic";

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
        name: "channel",
        type: "address",
      },
    ],
    name: "ChannelClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "ChannelStatusAlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidController",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "open",
        type: "bool",
      },
    ],
    name: "ChannelUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
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
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
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
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "executeBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
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
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
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
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "executeWithBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "updateChannel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102bf806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634ce34aa214610051578063899e104c146100885780638df25d92146100a0578063c4e8fcb5146100b6575b600080fd5b61006b61005f366004610116565b61abcd60f01b92915050565b6040516001600160e01b0319909116815260200160405180910390f35b61006b61009636600461019d565b6000949350505050565b61006b6100ae366004610209565b600092915050565b6100c86100c436600461023f565b5050565b005b60008083601f8401126100dc57600080fd5b50813567ffffffffffffffff8111156100f457600080fd5b60208301915083602060c08302850101111561010f57600080fd5b9250929050565b6000806020838503121561012957600080fd5b823567ffffffffffffffff81111561014057600080fd5b61014c858286016100ca565b90969095509350505050565b60008083601f84011261016a57600080fd5b50813567ffffffffffffffff81111561018257600080fd5b6020830191508360208260051b850101111561010f57600080fd5b600080600080604085870312156101b357600080fd5b843567ffffffffffffffff808211156101cb57600080fd5b6101d7888389016100ca565b909650945060208701359150808211156101f057600080fd5b506101fd87828801610158565b95989497509550505050565b6000806020838503121561021c57600080fd5b823567ffffffffffffffff81111561023357600080fd5b61014c85828601610158565b6000806040838503121561025257600080fd5b82356001600160a01b038116811461026957600080fd5b91506020830135801515811461027e57600080fd5b80915050925092905056fea2646970667358221220bfed8b793055f14da86cf88af75fbcd3db2792950317a6e700d8a695090a403a64736f6c63430008110033";

type ConduitMockInvalidMagicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConduitMockInvalidMagicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConduitMockInvalidMagic__factory extends ContractFactory {
  constructor(...args: ConduitMockInvalidMagicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConduitMockInvalidMagic> {
    return super.deploy(overrides || {}) as Promise<ConduitMockInvalidMagic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConduitMockInvalidMagic {
    return super.attach(address) as ConduitMockInvalidMagic;
  }
  override connect(signer: Signer): ConduitMockInvalidMagic__factory {
    return super.connect(signer) as ConduitMockInvalidMagic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConduitMockInvalidMagicInterface {
    return new utils.Interface(_abi) as ConduitMockInvalidMagicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConduitMockInvalidMagic {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConduitMockInvalidMagic;
  }
}
