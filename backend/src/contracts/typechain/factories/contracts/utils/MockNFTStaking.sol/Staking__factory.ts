/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Staking,
  StakingInterface,
} from "../../../../contracts/utils/MockNFTStaking.sol/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress_",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "nftAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
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
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104d43803806104d48339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561046f806100656000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063150b7a021461005c5780632e17de781461013f5780635bf8633a1461015e578063a694fc3a14610182578063c5aa98441461019f575b600080fd5b6101226004803603608081101561007257600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156100ad57600080fd5b8201836020820111156100bf57600080fd5b803590602001918460018302840111640100000000831117156100e157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101d9945050505050565b604080516001600160e01b03199092168252519081900360200190f35b61015c6004803603602081101561015557600080fd5b50356101fd565b005b61016661020a565b604080516001600160a01b039092168252519081900360200190f35b61015c6004803603602081101561019857600080fd5b5035610219565b6101c5600480360360208110156101b557600080fd5b50356001600160a01b0316610223565b604080519115158252519081900360200190f35b600060405180806103e5602f913960405190819003602f0190209695505050505050565b6102073382610240565b50565b6000546001600160a01b031690565b610207338261031a565b6001600160a01b0316600090815260016020526040902054151590565b6001600160a01b03821660009081526001602052604090205481146102965760405162461bcd60e51b81526004018080602001828103825260278152602001806104146027913960400191505060405180910390fd5b6001600160a01b0380831660008181526001602052604080822082905581548151632142170760e11b815230600482015260248101949094526044840186905290519316926342842e0e92606480820193929182900301818387803b1580156102fe57600080fd5b505af1158015610312573d6000803e3d6000fd5b505050505050565b6001600160a01b0382166000908152600160205260409020541561037c576040805162461bcd60e51b81526020600482015260146024820152731d1bdad95b88185b1c9958591e481cdd185ad95960621b604482015290519081900360640190fd5b6001600160a01b0380831660008181526001602052604080822085905581548151632142170760e11b815260048101949094523060248501526044840186905290519316926342842e0e92606480820193929182900301818387803b1580156102fe57600080fdfe6f6e455243373231526563656976656428616464726573732c616464726573732c75696e743235362c62797465732973656e646572206973206e6f7420746f6b656e206f776e6572206f72206e6f74207374616b6564a265627a7a723158203e28e596b2f3a35fdd9811621d06e78413ef5f985510f8fdcac43eec5ee2697664736f6c63430005100032";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    nftAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(nftAddress_, overrides || {}) as Promise<Staking>;
  }
  override getDeployTransaction(
    nftAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(nftAddress_, overrides || {});
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
