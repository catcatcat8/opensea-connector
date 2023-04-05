/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ImmutableCreate2FactoryInterface,
  ImmutableCreate2FactoryInterfaceInterface,
} from "../../../contracts/interfaces/ImmutableCreate2FactoryInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "initCode",
        type: "bytes",
      },
    ],
    name: "findCreate2Address",
    outputs: [
      {
        internalType: "address",
        name: "deploymentAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "initCodeHash",
        type: "bytes32",
      },
    ],
    name: "findCreate2AddressViaHash",
    outputs: [
      {
        internalType: "address",
        name: "deploymentAddress",
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
        name: "deploymentAddress",
        type: "address",
      },
    ],
    name: "hasBeenDeployed",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "initializationCode",
        type: "bytes",
      },
    ],
    name: "safeCreate2",
    outputs: [
      {
        internalType: "address",
        name: "deploymentAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class ImmutableCreate2FactoryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ImmutableCreate2FactoryInterfaceInterface {
    return new utils.Interface(
      _abi
    ) as ImmutableCreate2FactoryInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ImmutableCreate2FactoryInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ImmutableCreate2FactoryInterface;
  }
}