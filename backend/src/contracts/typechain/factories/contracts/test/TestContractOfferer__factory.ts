/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestContractOfferer,
  TestContractOffererInterface,
} from "../../../contracts/test/TestContractOfferer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "seaport",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OrderUnavailable",
    type: "error",
  },
  {
    inputs: [
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
        internalType: "struct SpentItem",
        name: "available",
        type: "tuple",
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
        internalType: "struct SpentItem",
        name: "required",
        type: "tuple",
      },
    ],
    name: "activate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "struct SpentItem",
        name: "available",
        type: "tuple",
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
        internalType: "struct SpentItem",
        name: "required",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "identifier",
        type: "uint256",
      },
    ],
    name: "activateWithCriteria",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "extendAvailable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "extendRequired",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "extraAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extraRequired",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fulfilled",
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
        internalType: "address",
        name: "",
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
        internalType: "struct SpentItem[]",
        name: "",
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
        ],
        internalType: "struct SpentItem[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
    ],
    name: "generateOrder",
    outputs: [
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
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getInventory",
    outputs: [
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
        internalType: "struct SpentItem[]",
        name: "offerable",
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
        ],
        internalType: "struct SpentItem[]",
        name: "receivable",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSeaportMetadata",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct Schema[]",
        name: "schemas",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
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
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        internalType: "struct SpentItem[]",
        name: "",
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
        ],
        internalType: "struct SpentItem[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
    ],
    name: "previewOrder",
    outputs: [
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
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
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
        internalType: "struct SpentItem[]",
        name: "",
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
        internalType: "struct ReceivedItem[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "orderHashes",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ratifyOrder",
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
    inputs: [],
    name: "ready",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611faa380380611faa83398101604081905261002f91610055565b6001600160a01b03166080526006805461ffff1916905560006007819055600855610085565b60006020828403121561006757600080fd5b81516001600160a01b038116811461007e57600080fd5b9392505050565b608051611ee06100ca600039600081816103cb015281816109e701528181610af501528181610cdf01528181611090015281816111b501526112c70152611ee06000f3fe6080604052600436106100e15760003560e01c8063989197651161007f578063b968b39911610059578063b968b39914610238578063e2d46f981461024d578063f23a6e611461026c578063f4dd92ce146102b257600080fd5b806398919765146101ef578063a69ea25c1461020f578063b6f263431461022557600080fd5b80635d7f850c116100bb5780635d7f850c1461016b57806366ff49c51461018e5780636defbf80146101b057806375f9ef52146101da57600080fd5b80632e778efc146100ed5780634a29bec214610119578063582d42411461013d57600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b506101026102d2565b60405161011092919061162a565b60405180910390f35b34801561012557600080fd5b5061012f60075481565b604051908152602001610110565b34801561014957600080fd5b5061015d610158366004611756565b6103a5565b6040516101109291906118b3565b34801561017757600080fd5b5061018061066a565b604051610110929190611946565b34801561019a57600080fd5b506101ae6101a9366004611a31565b610917565b005b3480156101bc57600080fd5b506006546101ca9060ff1681565b6040519015158152602001610110565b3480156101e657600080fd5b506101ae610c47565b3480156101fb57600080fd5b5061015d61020a366004611a71565b610cb0565b34801561021b57600080fd5b5061012f60085481565b6101ae610233366004611b1b565b610f7c565b34801561024457600080fd5b506101ae611418565b34801561025957600080fd5b506006546101ca90610100900460ff1681565b34801561027857600080fd5b50610299610287366004611b51565b63f23a6e6160e01b9695505050505050565b6040516001600160e01b03199091168152602001610110565b3480156102be57600080fd5b506102996102cd366004611c0c565b611466565b604080516001808252818301909252606091829190816020015b6040805180820190915260008152606060208201528152602001906001900390816102ec5790505090506105398160008151811061032c5761032c611d08565b6020908102919091018101519190915260408051600080825292810190915290508160008151811061036057610360611d08565b60200260200101516020018190525080604051806040016040528060138152602001722a32b9ba21b7b73a3930b1ba27b33332b932b960691b81525090915091509091565b600654606090819060ff1615806103c35750600654610100900460ff165b8061040057507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168a6001600160a01b031614155b806104145750610411602084611d34565b15155b15610432576040516384b5ef6b60e01b815260040160405180910390fd5b600754610440906001611d5e565b6001600160401b0381111561045757610457611974565b60405190808252806020026020018201604052801561049057816020015b61047d6115b2565b8152602001906001900390816104755790505b50915060085460016104a29190611d5e565b6001600160401b038111156104b9576104b9611974565b60405190808252806020026020018201604052801561051257816020015b6040805160a0810182526000808252602080830182905292820181905260608201819052608082015282526000199092019101816104d75790505b50905060005b600754610526906001611d5e565b8110156105c057604080516080810190915260008054829060ff16600581111561055257610552611810565b600581111561056357610563611810565b8152815461010090046001600160a01b031660208201526001820154604082015260029091015460609091015283518490839081106105a4576105a4611d08565b6020026020010181905250806105b990611d77565b9050610518565b5060005b6008546105d2906001611d5e565b81101561065c576040805160a08101909152600354819060ff1660058111156105fd576105fd611810565b815260035461010090046001600160a01b031660208201526004546040820152600554606082015230608090910152825183908390811061064057610640611d08565b60200260200101819052508061065590611d77565b90506105c4565b509850989650505050505050565b600654606090819060ff1615806106885750600654610100900460ff165b156106f95760408051600080825260208201909252906106be565b6106ab6115b2565b8152602001906001900390816106a35790505b50604080516000808252602082019092529193506106f2565b6106df6115b2565b8152602001906001900390816106d75790505b5090509091565b600754610707906001611d5e565b6001600160401b0381111561071e5761071e611974565b60405190808252806020026020018201604052801561075757816020015b6107446115b2565b81526020019060019003908161073c5790505b50915060005b60075461076b906001611d5e565b81101561080557604080516080810190915260008054829060ff16600581111561079757610797611810565b60058111156107a8576107a8611810565b8152815461010090046001600160a01b031660208201526001820154604082015260029091015460609091015283518490839081106107e9576107e9611d08565b6020026020010181905250806107fe90611d77565b905061075d565b50600854610814906001611d5e565b6001600160401b0381111561082b5761082b611974565b60405190808252806020026020018201604052801561086457816020015b6108516115b2565b8152602001906001900390816108495790505b50905060005b600854610878906001611d5e565b81101561091257604080516080810190915260038054829060ff1660058111156108a4576108a4611810565b60058111156108b5576108b5611810565b8152815461010090046001600160a01b031660208201526001820154604082015260029091015460609091015282518390839081106108f6576108f6611d08565b60200260200101819052508061090b90611d77565b905061086a565b509091565b60065460ff168061092f5750600654610100900460ff165b1561094d576040516384b5ef6b60e01b815260040160405180910390fd5b60048351600581111561096257610962611810565b03610a5a5760208301516040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b038216906323b872dd90606401600060405180830381600087803b1580156109ba57600080fd5b505af11580156109ce573d6000803e3d6000fd5b505060405163a22cb46560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152600160248301528416925063a22cb4659150604401600060405180830381600087803b158015610a3c57600080fd5b505af1158015610a50573d6000803e3d6000fd5b5050505050610b64565b600583516005811115610a6f57610a6f611810565b03610b645760208301516060840151604051637921219560e11b81526001600160a01b0383169163f242432a91610aae91339130918891600401611d90565b600060405180830381600087803b158015610ac857600080fd5b505af1158015610adc573d6000803e3d6000fd5b505060405163a22cb46560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152600160248301528416925063a22cb4659150604401600060405180830381600087803b158015610b4a57600080fd5b505af1158015610b5e573d6000803e3d6000fd5b50505050505b825160008054859290829060ff19166001836005811115610b8757610b87611810565b0217905550602082015181546001600160a01b0390911661010002610100600160a81b031990911617815560408201516001808301919091556060909201516002909101558251600380548593919291839160ff191690836005811115610bf057610bf0611810565b0217905550602082015181546001600160a01b0390911661010002610100600160a81b031990911617815560408201516001808301919091556060909201516002909101556006805460ff19169091179055505050565b60065460ff161580610c605750600654610100900460ff165b15610c7e576040516384b5ef6b60e01b815260040160405180910390fd5b60078054906000610c8e83611d77565b9190505550600260006002016000828254610ca99190611dc8565b9091555050565b600654606090819060ff161580610cce5750600654610100900460ff165b80610d025750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80610d165750610d13602084611d34565b15155b15610d34576040516384b5ef6b60e01b815260040160405180910390fd5b600754610d42906001611d5e565b6001600160401b03811115610d5957610d59611974565b604051908082528060200260200182016040528015610d9257816020015b610d7f6115b2565b815260200190600190039081610d775790505b5091506008546001610da49190611d5e565b6001600160401b03811115610dbb57610dbb611974565b604051908082528060200260200182016040528015610e1457816020015b6040805160a081018252600080825260208083018290529282018190526060820181905260808201528252600019909201910181610dd95790505b50905060005b600754610e28906001611d5e565b811015610ec257604080516080810190915260008054829060ff166005811115610e5457610e54611810565b6005811115610e6557610e65611810565b8152815461010090046001600160a01b03166020820152600182015460408201526002909101546060909101528351849083908110610ea657610ea6611d08565b602002602001018190525080610ebb90611d77565b9050610e1a565b5060005b600854610ed4906001611d5e565b811015610f5e576040805160a08101909152600354819060ff166005811115610eff57610eff611810565b815260035461010090046001600160a01b0316602082015260045460408201526005546060820152306080909101528251839083908110610f4257610f42611d08565b602002602001018190525080610f5790611d77565b9050610ec6565b506006805461ff001916610100179055909890975095505050505050565b60065460ff1680610f945750600654610100900460ff165b15610fb2576040516384b5ef6b60e01b815260040160405180910390fd5b600082516005811115610fc757610fc7611810565b03610fd757476060830152611336565b600182516005811115610fec57610fec611810565b0361111557602082015160608301516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038216906323b872dd906064016020604051808303816000875af115801561104f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110739190611ddc565b50606083015160405163095ea7b360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201929092529082169063095ea7b3906044016020604051808303816000875af11580156110ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110e9190611ddc565b5050611336565b60028251600581111561112a5761112a611810565b0361122857602082015160408084015190516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038216906323b872dd90606401600060405180830381600087803b15801561118857600080fd5b505af115801561119c573d6000803e3d6000fd5b505060405163a22cb46560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152600160248301528416925063a22cb4659150604401600060405180830381600087803b15801561120a57600080fd5b505af115801561121e573d6000803e3d6000fd5b5050505050611336565b60038251600581111561123d5761123d611810565b0361133657602082015160408084015160608501519151637921219560e11b81526001600160a01b0384169263f242432a92611280923392309291600401611d90565b600060405180830381600087803b15801561129a57600080fd5b505af11580156112ae573d6000803e3d6000fd5b505060405163a22cb46560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152600160248301528416925063a22cb4659150604401600060405180830381600087803b15801561131c57600080fd5b505af1158015611330573d6000803e3d6000fd5b50505050505b815160008054849290829060ff1916600183600581111561135957611359611810565b0217905550602082015181546001600160a01b0390911661010002610100600160a81b031990911617815560408201516001808301919091556060909201516002909101558151600380548493919291839160ff1916908360058111156113c2576113c2611810565b0217905550602082015181546001600160a01b0390911661010002610100600160a81b031990911617815560408201516001808301919091556060909201516002909101556006805460ff191690911790555050565b60065460ff1615806114315750600654610100900460ff165b1561144f576040516384b5ef6b60e01b815260040160405180910390fd5b6008805490600061145f83611d77565b9190505550565b6000602085118015611480575061147e602086611d34565b155b1561159c57600061149386880188611e05565b80519091508481146114fd5760405162461bcd60e51b815260206004820152602860248201527f526576657274206f6e20756e6578706563746564206f726465722068617368656044820152670e640d8cadccee8d60c31b60648201526084015b60405180910390fd5b60005b818110156115985786868281811061151a5761151a611d08565b9050602002013583828151811061153357611533611d08565b6020026020010151146115885760405162461bcd60e51b815260206004820152601f60248201527f526576657274206f6e20756e6578706563746564206f7264657220686173680060448201526064016114f4565b61159181611d77565b9050611500565b5050505b50637a6ec96760e11b9998505050505050505050565b6040805160808101909152806000815260200160006001600160a01b0316815260200160008152602001600081525090565b6000815180845260005b8181101561160a576020818501810151868301820152016115ee565b506000602082860101526020601f19601f83011685010191505092915050565b6000604080835261163d818401866115e4565b6020848203818601528186518084528284019150828160051b85010183890160005b8381101561169e57868303601f1901855281518051845286015186840189905261168b898501826115e4565b958701959350509085019060010161165f565b50909a9950505050505050505050565b80356001600160a01b03811681146116c557600080fd5b919050565b60008083601f8401126116dc57600080fd5b5081356001600160401b038111156116f357600080fd5b6020830191508360208260071b850101111561170e57600080fd5b9250929050565b60008083601f84011261172757600080fd5b5081356001600160401b0381111561173e57600080fd5b60208301915083602082850101111561170e57600080fd5b60008060008060008060008060a0898b03121561177257600080fd5b61177b896116ae565b975061178960208a016116ae565b965060408901356001600160401b03808211156117a557600080fd5b6117b18c838d016116ca565b909850965060608b01359150808211156117ca57600080fd5b6117d68c838d016116ca565b909650945060808b01359150808211156117ef57600080fd5b506117fc8b828c01611715565b999c989b5096995094979396929594505050565b634e487b7160e01b600052602160045260246000fd5b6006811061184457634e487b7160e01b600052602160045260246000fd5b9052565b600081518084526020808501945080840160005b838110156118a8578151611871888251611826565b808401516001600160a01b03168885015260408082015190890152606090810151908801526080909601959082019060010161185c565b509495945050505050565b600060408083526118c681840186611848565b83810360208581019190915285518083528682019282019060005b818110156119385784516118f6848251611826565b848101516001600160a01b039081168587015287820151888601526060808301519086015260809182015116908401529383019360a0909201916001016118e1565b509098975050505050505050565b6040815260006119596040830185611848565b828103602084015261196b8185611848565b95945050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156119b2576119b2611974565b604052919050565b6000608082840312156119cc57600080fd5b604051608081018181106001600160401b03821117156119ee576119ee611974565b604052905080823560068110611a0357600080fd5b8152611a11602084016116ae565b602082015260408301356040820152606083013560608201525092915050565b60008060006101208486031215611a4757600080fd5b611a5185856119ba565b9250611a6085608086016119ba565b915061010084013590509250925092565b60008060008060008060006080888a031215611a8c57600080fd5b611a95886116ae565b965060208801356001600160401b0380821115611ab157600080fd5b611abd8b838c016116ca565b909850965060408a0135915080821115611ad657600080fd5b611ae28b838c016116ca565b909650945060608a0135915080821115611afb57600080fd5b50611b088a828b01611715565b989b979a50959850939692959293505050565b6000806101008385031215611b2f57600080fd5b611b3984846119ba565b9150611b4884608085016119ba565b90509250929050565b60008060008060008060a08789031215611b6a57600080fd5b611b73876116ae565b9550611b81602088016116ae565b9450604087013593506060870135925060808701356001600160401b03811115611baa57600080fd5b611bb689828a01611715565b979a9699509497509295939492505050565b60008083601f840112611bda57600080fd5b5081356001600160401b03811115611bf157600080fd5b6020830191508360208260051b850101111561170e57600080fd5b600080600080600080600080600060a08a8c031215611c2a57600080fd5b89356001600160401b0380821115611c4157600080fd5b611c4d8d838e016116ca565b909b50995060208c0135915080821115611c6657600080fd5b818c0191508c601f830112611c7a57600080fd5b813581811115611c8957600080fd5b8d602060a083028501011115611c9e57600080fd5b6020830199508098505060408c0135915080821115611cbc57600080fd5b611cc88d838e01611715565b909750955060608c0135915080821115611ce157600080fd5b50611cee8c828d01611bc8565b9a9d999c50979a9699959894979660800135949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611d4357611d43611d1e565b500690565b634e487b7160e01b600052601160045260246000fd5b80820180821115611d7157611d71611d48565b92915050565b600060018201611d8957611d89611d48565b5060010190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b600082611dd757611dd7611d1e565b500490565b600060208284031215611dee57600080fd5b81518015158114611dfe57600080fd5b9392505050565b60006020808385031215611e1857600080fd5b82356001600160401b0380821115611e2f57600080fd5b818501915085601f830112611e4357600080fd5b813581811115611e5557611e55611974565b8060051b9150611e6684830161198a565b8181529183018401918481019088841115611e8057600080fd5b938501935b83851015611e9e57843582529385019390850190611e85565b9897505050505050505056fea2646970667358221220dfc1d1c1ea16fe36f52d85c227a25935c94ca4e69a6e1f9f6af239f66a5c998264736f6c63430008110033";

type TestContractOffererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestContractOffererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestContractOfferer__factory extends ContractFactory {
  constructor(...args: TestContractOffererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    seaport: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestContractOfferer> {
    return super.deploy(
      seaport,
      overrides || {}
    ) as Promise<TestContractOfferer>;
  }
  override getDeployTransaction(
    seaport: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(seaport, overrides || {});
  }
  override attach(address: string): TestContractOfferer {
    return super.attach(address) as TestContractOfferer;
  }
  override connect(signer: Signer): TestContractOfferer__factory {
    return super.connect(signer) as TestContractOfferer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestContractOffererInterface {
    return new utils.Interface(_abi) as TestContractOffererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestContractOfferer {
    return new Contract(address, _abi, signerOrProvider) as TestContractOfferer;
  }
}
