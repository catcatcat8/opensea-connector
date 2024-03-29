/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type SpentItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type SpentItemStructOutput = [number, string, BigNumber, BigNumber] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
};

export type ReceivedItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type ReceivedItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
  recipient: string;
};

export type SchemaStruct = {
  id: PromiseOrValue<BigNumberish>;
  metadata: PromiseOrValue<BytesLike>;
};

export type SchemaStructOutput = [BigNumber, string] & {
  id: BigNumber;
  metadata: string;
};

export interface TestBadContractOffererInterface extends utils.Interface {
  functions: {
    "generateOrder(address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "getSeaportMetadata()": FunctionFragment;
    "previewOrder(address,address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "ratifyOrder((uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256,address)[],bytes,bytes32[],uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "generateOrder"
      | "getSeaportMetadata"
      | "previewOrder"
      | "ratifyOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateOrder",
    values: [
      PromiseOrValue<string>,
      SpentItemStruct[],
      SpentItemStruct[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeaportMetadata",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "previewOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      SpentItemStruct[],
      SpentItemStruct[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ratifyOrder",
    values: [
      SpentItemStruct[],
      ReceivedItemStruct[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeaportMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ratifyOrder",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestBadContractOfferer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestBadContractOffererInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    generateOrder(
      a: PromiseOrValue<string>,
      b: SpentItemStruct[],
      c: SpentItemStruct[],
      d: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<
      [string, SchemaStructOutput[]] & {
        name: string;
        schemas: SchemaStructOutput[];
      }
    >;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      maximumSpent: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
      }
    >;

    ratifyOrder(
      arg0: SpentItemStruct[],
      arg1: ReceivedItemStruct[],
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  generateOrder(
    a: PromiseOrValue<string>,
    b: SpentItemStruct[],
    c: SpentItemStruct[],
    d: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSeaportMetadata(
    overrides?: CallOverrides
  ): Promise<
    [string, SchemaStructOutput[]] & {
      name: string;
      schemas: SchemaStructOutput[];
    }
  >;

  previewOrder(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    minimumReceived: SpentItemStruct[],
    maximumSpent: SpentItemStruct[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
      offer: SpentItemStructOutput[];
      consideration: ReceivedItemStructOutput[];
    }
  >;

  ratifyOrder(
    arg0: SpentItemStruct[],
    arg1: ReceivedItemStruct[],
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>[],
    arg4: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    generateOrder(
      a: PromiseOrValue<string>,
      b: SpentItemStruct[],
      c: SpentItemStruct[],
      d: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
      }
    >;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<
      [string, SchemaStructOutput[]] & {
        name: string;
        schemas: SchemaStructOutput[];
      }
    >;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      maximumSpent: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
      }
    >;

    ratifyOrder(
      arg0: SpentItemStruct[],
      arg1: ReceivedItemStruct[],
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    generateOrder(
      a: PromiseOrValue<string>,
      b: SpentItemStruct[],
      c: SpentItemStruct[],
      d: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSeaportMetadata(overrides?: CallOverrides): Promise<BigNumber>;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      maximumSpent: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ratifyOrder(
      arg0: SpentItemStruct[],
      arg1: ReceivedItemStruct[],
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generateOrder(
      a: PromiseOrValue<string>,
      b: SpentItemStruct[],
      c: SpentItemStruct[],
      d: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      maximumSpent: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ratifyOrder(
      arg0: SpentItemStruct[],
      arg1: ReceivedItemStruct[],
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
