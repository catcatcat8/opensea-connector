/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  FulfillmentApplicationErrors,
  FulfillmentApplicationErrorsInterface,
} from "../../../contracts/interfaces/FulfillmentApplicationErrors";

const _abi = [
  {
    inputs: [],
    name: "InvalidFulfillmentComponentData",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fulfillmentIndex",
        type: "uint256",
      },
    ],
    name: "MismatchedFulfillmentOfferAndConsiderationComponents",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Side",
        name: "side",
        type: "uint8",
      },
    ],
    name: "MissingFulfillmentComponentOnAggregation",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferAndConsiderationRequiredOnFulfillment",
    type: "error",
  },
];

export class FulfillmentApplicationErrors__factory {
  static readonly abi = _abi;
  static createInterface(): FulfillmentApplicationErrorsInterface {
    return new utils.Interface(_abi) as FulfillmentApplicationErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FulfillmentApplicationErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FulfillmentApplicationErrors;
  }
}
