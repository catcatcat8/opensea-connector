/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721ReceiverMock,
  ERC721ReceiverMockInterface,
} from "../../../contracts/test/ERC721ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "retval",
        type: "bytes4",
      },
      {
        internalType: "enum ERC721ReceiverMock.Error",
        name: "error",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516104ca3803806104ca83398101604081905261002f9161006e565b6001600160e01b0319821660805280600381111561004f5761004f6100b9565b60a0816003811115610063576100636100b9565b8152505050506100cf565b6000806040838503121561008157600080fd5b82516001600160e01b03198116811461009957600080fd5b6020840151909250600481106100ae57600080fd5b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b60805160a0516103ca6101006000396000818160660152818160eb0152610129015260006101af01526103ca6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004361003e366004610208565b610060565b6040516001600160e01b0319909116815260200160405180910390f35b600060017f00000000000000000000000000000000000000000000000000000000000000006003811115610096576100966102e4565b036100e75760405162461bcd60e51b815260206004820152601d60248201527f45524337323152656365697665724d6f636b3a20726576657274696e67000000604482015260640160405180910390fd5b60027f0000000000000000000000000000000000000000000000000000000000000000600381111561011b5761011b6102e4565b0361012557600080fd5b60037f00000000000000000000000000000000000000000000000000000000000000006003811115610159576101596102e4565b0361016d57600061016a81806102fa565b50505b7f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b038858585855a6040516101a495949392919061031c565b60405180910390a1507f0000000000000000000000000000000000000000000000000000000000000000949350505050565b80356001600160a01b03811681146101ed57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561021e57600080fd5b610227856101d6565b9350610235602086016101d6565b925060408501359150606085013567ffffffffffffffff8082111561025957600080fd5b818701915087601f83011261026d57600080fd5b81358181111561027f5761027f6101f2565b604051601f8201601f19908116603f011681019083821181831017156102a7576102a76101f2565b816040528281528a60208487010111156102c057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b634e487b7160e01b600052602160045260246000fd5b60008261031757634e487b7160e01b600052601260045260246000fd5b500490565b600060018060a01b03808816835260208188168185015286604085015260a06060850152855191508160a085015260005b828110156103695786810182015185820160c00152810161034d565b5050600060c0828501015260c0601f19601f830116840101915050826080830152969550505050505056fea264697066735822122054768f6662c60da540883edb466d06383af8b3850d1bbfd17b8902509c68b19e64736f6c63430008110033";

type ERC721ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    retval: PromiseOrValue<BytesLike>,
    error: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721ReceiverMock> {
    return super.deploy(
      retval,
      error,
      overrides || {}
    ) as Promise<ERC721ReceiverMock>;
  }
  override getDeployTransaction(
    retval: PromiseOrValue<BytesLike>,
    error: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(retval, error, overrides || {});
  }
  override attach(address: string): ERC721ReceiverMock {
    return super.attach(address) as ERC721ReceiverMock;
  }
  override connect(signer: Signer): ERC721ReceiverMock__factory {
    return super.connect(signer) as ERC721ReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC721ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721ReceiverMock;
  }
}