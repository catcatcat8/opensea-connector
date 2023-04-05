/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ConduitMockRevertNoReason,
  ConduitMockRevertNoReasonInterface,
} from "../../../contracts/test/ConduitMockRevertNoReason";

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
  "0x608060405234801561001057600080fd5b506102b3806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634ce34aa214610051578063899e104c1461007c5780638df25d9214610094578063c4e8fcb5146100aa575b600080fd5b61005f61004c36600461010a565b6040516001600160e01b0319909116815260200160405180910390f35b61005f61008a366004610191565b6000949350505050565b61005f6100a23660046101fd565b600092915050565b6100bc6100b8366004610233565b5050565b005b60008083601f8401126100d057600080fd5b50813567ffffffffffffffff8111156100e857600080fd5b60208301915083602060c08302850101111561010357600080fd5b9250929050565b6000806020838503121561011d57600080fd5b823567ffffffffffffffff81111561013457600080fd5b610140858286016100be565b90969095509350505050565b60008083601f84011261015e57600080fd5b50813567ffffffffffffffff81111561017657600080fd5b6020830191508360208260051b850101111561010357600080fd5b600080600080604085870312156101a757600080fd5b843567ffffffffffffffff808211156101bf57600080fd5b6101cb888389016100be565b909650945060208701359150808211156101e457600080fd5b506101f18782880161014c565b95989497509550505050565b6000806020838503121561021057600080fd5b823567ffffffffffffffff81111561022757600080fd5b6101408582860161014c565b6000806040838503121561024657600080fd5b82356001600160a01b038116811461025d57600080fd5b91506020830135801515811461027257600080fd5b80915050925092905056fea2646970667358221220aa0270ef3c2c75ca8b910a063ea7dab24fcde46b8e323616c6610024ce15955b64736f6c63430008110033";

type ConduitMockRevertNoReasonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConduitMockRevertNoReasonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConduitMockRevertNoReason__factory extends ContractFactory {
  constructor(...args: ConduitMockRevertNoReasonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConduitMockRevertNoReason> {
    return super.deploy(overrides || {}) as Promise<ConduitMockRevertNoReason>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConduitMockRevertNoReason {
    return super.attach(address) as ConduitMockRevertNoReason;
  }
  override connect(signer: Signer): ConduitMockRevertNoReason__factory {
    return super.connect(signer) as ConduitMockRevertNoReason__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConduitMockRevertNoReasonInterface {
    return new utils.Interface(_abi) as ConduitMockRevertNoReasonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConduitMockRevertNoReason {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConduitMockRevertNoReason;
  }
}