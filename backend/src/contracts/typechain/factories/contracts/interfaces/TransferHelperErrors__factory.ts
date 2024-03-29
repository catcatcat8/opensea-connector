/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TransferHelperErrors,
  TransferHelperErrorsInterface,
} from "../../../contracts/interfaces/TransferHelperErrors";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
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
    name: "ConduitErrorRevertBytes",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
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
    name: "ConduitErrorRevertString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "identifier",
        type: "uint256",
      },
    ],
    name: "ERC721ReceiverErrorRevertBytes",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "identifier",
        type: "uint256",
      },
    ],
    name: "ERC721ReceiverErrorRevertString",
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
    inputs: [],
    name: "InvalidERC20Identifier",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "InvalidERC721Recipient",
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
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    inputs: [],
    name: "RecipientCannotBeZeroAddress",
    type: "error",
  },
];

export class TransferHelperErrors__factory {
  static readonly abi = _abi;
  static createInterface(): TransferHelperErrorsInterface {
    return new utils.Interface(_abi) as TransferHelperErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferHelperErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransferHelperErrors;
  }
}
