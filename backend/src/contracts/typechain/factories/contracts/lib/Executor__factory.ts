/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Executor,
  ExecutorInterface,
} from "../../../contracts/lib/Executor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "conduitController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BadContractSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "BadFraction",
    type: "error",
  },
  {
    inputs: [
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BadReturnValueFromERC20OnTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "BadSignatureV",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotCancelOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "ConsiderationLengthNotEqualToTotalOriginal",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "considerationIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortfallAmount",
        type: "uint256",
      },
    ],
    name: "ConsiderationNotMet",
    type: "error",
  },
  {
    inputs: [
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
        name: "identifiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC1155BatchTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientNativeTokensSupplied",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid1155BatchTransferEncoding",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBasicOrderParameterEncoding",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "InvalidCallToConduit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "InvalidConduit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InvalidERC721TransferAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "InvalidMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNativeOfferItem",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "InvalidTime",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingItemAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingOriginalConsiderationItems",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NativeTokenTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NoContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NoReentrantCalls",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSpecifiedOrdersAvailable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderAlreadyFilled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderIsCancelled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderPartiallyFilled",
    type: "error",
  },
  {
    inputs: [],
    name: "PartialFillsNotEnabledForOrder",
    type: "error",
  },
  {
    inputs: [
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
    name: "TokenTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "UnusedItemParameters",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newCounter",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
    ],
    name: "CounterIncremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
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
        indexed: false,
        internalType: "struct SpentItem[]",
        name: "offer",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
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
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
      },
    ],
    name: "OrderFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "offerer",
            type: "address",
          },
          {
            internalType: "address",
            name: "zone",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifierOrCriteria",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endAmount",
                type: "uint256",
              },
            ],
            internalType: "struct OfferItem[]",
            name: "offer",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifierOrCriteria",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endAmount",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct ConsiderationItem[]",
            name: "consideration",
            type: "tuple[]",
          },
          {
            internalType: "enum OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "zoneHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "conduitKey",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "totalOriginalConsiderationItems",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct OrderParameters",
        name: "orderParameters",
        type: "tuple",
      },
    ],
    name: "OrderValidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "orderHashes",
        type: "bytes32[]",
      },
    ],
    name: "OrdersMatched",
    type: "event",
  },
];

const _bytecode =
  "0x6101c060405234801561001157600080fd5b506040516105863803806105868339810160408190526100309161022d565b8080808061003c610102565b610120526101005260e05260c081905260a0828152466101408190526040805160009485526020879052948152606091825230608090815292842085825293909152939052610160526001600160a01b038316610180819052630a96ad3960e01b825282519092630a96ad3992600480820193918290030181865afa1580156100c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ed919061025d565b506101a05250506001600055506102d8915050565b6000808080808061013360408051808201909152600d81526c21b7b739b4b232b930ba34b7b760991b602082015290565b805190602001209550604051806040016040528060038152602001620c4b8d60ea1b81525080519060200120945060006040518060a00160405280606a815260200161051c606a9139905060006040518060c0016040528060848152602001610372608491399050600060405180610100016040528060d4815260200161044860d4913990506040518060800160405280605281526020016103f66052913980519060200120965082805190602001209550818051906020012094506000818385604051602001610206939291906102b1565b60405160208183030381529060405290508080519060200120945050505050909192939495565b60006020828403121561023f57600080fd5b81516001600160a01b038116811461025657600080fd5b9392505050565b6000806040838503121561027057600080fd5b505080516020909101519092909150565b6000815160005b818110156102a25760208185018101518683015201610288565b50600093019283525090919050565b60006102cf6102c96102c38488610281565b86610281565b84610281565b95945050505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a051603f61033360003960005050600050506000505060005050600050506000505060005050600050506000505060005050603f6000f3fe6080604052600080fdfea2646970667358221220683591a56dc98f5fc8c565de30f25eb9a6a9dd1e3bc98ba7d2166997fa9c2fc364736f6c63430008110033436f6e73696465726174696f6e4974656d2875696e7438206974656d547970652c6164647265737320746f6b656e2c75696e74323536206964656e7469666965724f7243726974657269612c75696e74323536207374617274416d6f756e742c75696e7432353620656e64416d6f756e742c6164647265737320726563697069656e7429454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e7472616374294f72646572436f6d706f6e656e74732861646472657373206f6666657265722c61646472657373207a6f6e652c4f666665724974656d5b5d206f666665722c436f6e73696465726174696f6e4974656d5b5d20636f6e73696465726174696f6e2c75696e7438206f72646572547970652c75696e7432353620737461727454696d652c75696e7432353620656e6454696d652c62797465733332207a6f6e65486173682c75696e743235362073616c742c6279746573333220636f6e647569744b65792c75696e7432353620636f756e746572294f666665724974656d2875696e7438206974656d547970652c6164647265737320746f6b656e2c75696e74323536206964656e7469666965724f7243726974657269612c75696e74323536207374617274416d6f756e742c75696e7432353620656e64416d6f756e7429";

type ExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Executor__factory extends ContractFactory {
  constructor(...args: ExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    conduitController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Executor> {
    return super.deploy(
      conduitController,
      overrides || {}
    ) as Promise<Executor>;
  }
  override getDeployTransaction(
    conduitController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(conduitController, overrides || {});
  }
  override attach(address: string): Executor {
    return super.attach(address) as Executor;
  }
  override connect(signer: Signer): Executor__factory {
    return super.connect(signer) as Executor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecutorInterface {
    return new utils.Interface(_abi) as ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Executor {
    return new Contract(address, _abi, signerOrProvider) as Executor;
  }
}
