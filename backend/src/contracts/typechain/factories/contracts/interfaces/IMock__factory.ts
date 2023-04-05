/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMock,
  IMockInterface,
} from "../../../contracts/interfaces/IMock";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "caller_",
        type: "address",
      },
    ],
    name: "mockfn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

export class IMock__factory {
  static readonly abi = _abi;
  static createInterface(): IMockInterface {
    return new utils.Interface(_abi) as IMockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMock {
    return new Contract(address, _abi, signerOrProvider) as IMock;
  }
}
