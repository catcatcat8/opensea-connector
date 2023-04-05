/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestTransferValidationZoneOfferer,
  TestTransferValidationZoneOffererInterface,
} from "../../../contracts/test/TestTransferValidationZoneOfferer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "expectedOfferRecipient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expectedBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualBalance",
        type: "uint256",
      },
    ],
    name: "IncorrectSeaportBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expectedBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualBalance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "checkedAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "checkedToken",
        type: "address",
      },
    ],
    name: "InvalidERC1155Balance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expectedBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualBalance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "checkedAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "checkedToken",
        type: "address",
      },
    ],
    name: "InvalidERC20Balance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expectedBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualBalance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "checkedAddress",
        type: "address",
      },
    ],
    name: "InvalidNativeTokenBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "expectedOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "actualOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "checkedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "checkedTokenId",
        type: "uint256",
      },
    ],
    name: "InvalidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "callCount",
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
    name: "called",
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
        name: "a",
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
        name: "b",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "c",
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
        name: "a",
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
        name: "b",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "",
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
        name: "minimumReceived",
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
        name: "maximumSpent",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "expectedOfferRecipient",
        type: "address",
      },
    ],
    name: "setExpectedOfferRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "fulfiller",
            type: "address",
          },
          {
            internalType: "address",
            name: "offerer",
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
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
          {
            internalType: "bytes32[]",
            name: "orderHashes",
            type: "bytes32[]",
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
        ],
        internalType: "struct ZoneParameters",
        name: "zoneParameters",
        type: "tuple",
      },
    ],
    name: "validateOrder",
    outputs: [
      {
        internalType: "bytes4",
        name: "validOrderMagicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526000805460ff60a01b1916815560015534801561002057600080fd5b5060405161153a38038061153a83398101604081905261003f91610064565b600080546001600160a01b0319166001600160a01b0392909216919091179055610094565b60006020828403121561007657600080fd5b81516001600160a01b038116811461008d57600080fd5b9392505050565b611497806100a36000396000f3fe60806040526004361061007f5760003560e01c806350f9b6cd1161004e57806350f9b6cd1461014f578063582d42411461018057806398919765146101ae578063f4dd92ce146101ce57600080fd5b806314a94f6a1461008b57806317b1f942146100ca5780632e778efc146101085780634b28f9a21461012b57600080fd5b3661008657005b600080fd5b34801561009757600080fd5b506100c86100a6366004610c00565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b3480156100d657600080fd5b506100ea6100e5366004610c24565b6101ee565b6040516001600160e01b031990911681526020015b60405180910390f35b34801561011457600080fd5b5061011d6102b6565b6040516100ff929190610ca6565b34801561013757600080fd5b5061014160015481565b6040519081526020016100ff565b34801561015b57600080fd5b5060005461017090600160a01b900460ff1681565b60405190151581526020016100ff565b34801561018c57600080fd5b506101a061019b366004610db8565b610370565b6040516100ff929190610eaf565b3480156101ba57600080fd5b506101a06101c9366004610f92565b6103e7565b3480156101da57600080fd5b506100ea6101e9366004611084565b61040a565b60003331801561022057604051634d3b8ba360e01b815260006004820152602481018290526044015b60405180910390fd5b6102356102306080850185611181565b6104ca565b600080546001600160a01b031615610258576000546001600160a01b0316610268565b6102686040850160208601610c00565b90506102808161027b60608701876111ca565b610606565b6000805460ff60a01b1916600160a01b17815560018054916102a183611214565b90915550630bd8fca160e11b95945050505050565b60608060405180606001604052806021815260200161144160219139604080516001808252818301909252919350816020015b6040805180820190915260008152606060208201528152602001906001900390816102e95790505090506105398160008151811061032957610329611251565b6020908102919091018101519190915260408051600080825292810190915290508160008151811061035d5761035d611251565b6020026020010151602001819052509091565b606080878761037f888861072a565b8282808060200260200160405190810160405280939291908181526020016000905b828210156103cd576103be6080830286013681900381019061127b565b815260200190600101906103a1565b509398509396505050505050509850989650505050505050565b6060806103fa30308a8a8a8a8a8a610370565b9150915097509795505050505050565b60003331801561043757604051634d3b8ba360e01b81526000600482015260248101829052604401610217565b61044189896104ca565b600080546001600160a01b031615610464576000546001600160a01b031661047f565b61047260146000898b6112fc565b61047b91611326565b60601c5b905061048c818d8d610606565b6000805460ff60a01b1916600160a01b17815560018054916104ad83611214565b90915550637a6ec96760e11b9d9c50505050505050505050505050565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052819060005b848110156105fe5785858281811061051357610513611251565b905060a00201803603810190610529919061135b565b6080810151815190955093509150600083600581111561054b5761054b610e77565b036105635761055e826060015185610804565b6105ec565b600183600581111561057757610577610e77565b0361058f5761055e826060015183602001518661084c565b60028360058111156105a3576105a3610e77565b036105bb5761055e8260400151836020015186610968565b60038360058111156105cf576105cf610e77565b036105ec576105ec82606001518360400151846020015187610a30565b806105f681611214565b9150506104f9565b505050505050565b604080516080810182526000808252602082018190529181018290526060810182905290805b838110156105fe5784848281811061064657610646611251565b90506080020180360381019061065c919061127b565b80519093509150600082600581111561067757610677610e77565b0361068f5761068a836060015187610804565b610718565b60018260058111156106a3576106a3610e77565b036106bb5761068a836060015184602001518861084c565b60028260058111156106cf576106cf610e77565b036106e75761068a8360400151846020015188610968565b60038260058111156106fb576106fb610e77565b036107185761071883606001518460400151856020015189610a30565b8061072281611214565b91505061062c565b606060008267ffffffffffffffff8111156107475761074761123b565b6040519080825280602002602001820160405280156107a057816020015b6040805160a0810182526000808252602080830182905292820181905260608201819052608082015282526000199092019101816107655790505b50905060005b838110156107fc576107ce8585838181106107c3576107c3611251565b905060800201610b50565b8282815181106107e0576107e0611251565b6020026020010181905250806107f590611214565b90506107a6565b509392505050565b806001600160a01b03163182111561084857604051630464284d60e21b8152600481018390526001600160a01b038216803160248301526044820152606401610217565b5050565b6040516370a0823160e01b81526001600160a01b0382811660048301528316906370a0823190602401602060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b691906113ef565b831115610963576040516370a0823160e01b81526001600160a01b0382811660048301528491908416906370a0823190602401602060405180830381865afa158015610906573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092a91906113ef565b604051637703ada560e11b8152600481019290925260248201526001600160a01b03808316604483015283166064820152608401610217565b505050565b6040516331a9108f60e11b8152600481018490526000906001600160a01b03841690636352211e90602401602060405180830381865afa1580156109b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d49190611408565b9050806001600160a01b0316826001600160a01b031614610a2a57604051631c7d9c3560e11b81526001600160a01b03808416600483015280831660248301528416604482015260648101859052608401610217565b50505050565b604051627eeac760e11b81526001600160a01b0382811660048301526024820185905283169062fdd58e90604401602060405180830381865afa158015610a7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9f91906113ef565b841115610a2a57604051627eeac760e11b81526001600160a01b0382811660048301526024820185905285919084169062fdd58e90604401602060405180830381865afa158015610af4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1891906113ef565b60405162bb906b60e51b8152600481019290925260248201526001600160a01b03808316604483015283166064820152608401610217565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101919091526040805160a0810190915280610b946020850185611425565b6005811115610ba557610ba5610e77565b8152602001836020016020810190610bbd9190610c00565b6001600160a01b03168152604080850135602083015260609485013590820152309301929092525090565b6001600160a01b0381168114610bfd57600080fd5b50565b600060208284031215610c1257600080fd5b8135610c1d81610be8565b9392505050565b600060208284031215610c3657600080fd5b813567ffffffffffffffff811115610c4d57600080fd5b82016101408185031215610c1d57600080fd5b6000815180845260005b81811015610c8657602081850181015186830182015201610c6a565b506000602082860101526020601f19601f83011685010191505092915050565b60006040808352610cb981840186610c60565b6020848203818601528186518084528284019150828160051b85010183890160005b83811015610d1a57868303601f19018552815180518452860151868401899052610d0789850182610c60565b9587019593505090850190600101610cdb565b50909a9950505050505050505050565b60008083601f840112610d3c57600080fd5b50813567ffffffffffffffff811115610d5457600080fd5b6020830191508360208260071b8501011115610d6f57600080fd5b9250929050565b60008083601f840112610d8857600080fd5b50813567ffffffffffffffff811115610da057600080fd5b602083019150836020828501011115610d6f57600080fd5b60008060008060008060008060a0898b031215610dd457600080fd5b8835610ddf81610be8565b97506020890135610def81610be8565b9650604089013567ffffffffffffffff80821115610e0c57600080fd5b610e188c838d01610d2a565b909850965060608b0135915080821115610e3157600080fd5b610e3d8c838d01610d2a565b909650945060808b0135915080821115610e5657600080fd5b50610e638b828c01610d76565b999c989b5096995094979396929594505050565b634e487b7160e01b600052602160045260246000fd5b60068110610eab57634e487b7160e01b600052602160045260246000fd5b9052565b6040808252835182820181905260009190606090818501906020808901865b83811015610f15578151610ee3868251610e8d565b808401516001600160a01b03168685015287810151888701528601518686015260809094019390820190600101610ece565b5050868303818801528751808452888201938201925060005b81811015610f83578451610f43858251610e8d565b838101516001600160a01b03908116868601528882015189870152878201518887015260809182015116908501529382019360a090930192600101610f2e565b50919998505050505050505050565b60008060008060008060006080888a031215610fad57600080fd5b8735610fb881610be8565b9650602088013567ffffffffffffffff80821115610fd557600080fd5b610fe18b838c01610d2a565b909850965060408a0135915080821115610ffa57600080fd5b6110068b838c01610d2a565b909650945060608a013591508082111561101f57600080fd5b5061102c8a828b01610d76565b989b979a50959850939692959293505050565b60008083601f84011261105157600080fd5b50813567ffffffffffffffff81111561106957600080fd5b6020830191508360208260051b8501011115610d6f57600080fd5b600080600080600080600080600060a08a8c0312156110a257600080fd5b893567ffffffffffffffff808211156110ba57600080fd5b6110c68d838e01610d2a565b909b50995060208c01359150808211156110df57600080fd5b818c0191508c601f8301126110f357600080fd5b81358181111561110257600080fd5b8d602060a08302850101111561111757600080fd5b6020830199508098505060408c013591508082111561113557600080fd5b6111418d838e01610d76565b909750955060608c013591508082111561115a57600080fd5b506111678c828d0161103f565b9a9d999c50979a9699959894979660800135949350505050565b6000808335601e1984360301811261119857600080fd5b83018035915067ffffffffffffffff8211156111b357600080fd5b602001915060a081023603821315610d6f57600080fd5b6000808335601e198436030181126111e157600080fd5b83018035915067ffffffffffffffff8211156111fc57600080fd5b6020019150600781901b3603821315610d6f57600080fd5b60006001820161123457634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b80356006811061127657600080fd5b919050565b60006080828403121561128d57600080fd5b6040516080810181811067ffffffffffffffff821117156112be57634e487b7160e01b600052604160045260246000fd5b6040526112ca83611267565b815260208301356112da81610be8565b6020820152604083810135908201526060928301359281019290925250919050565b6000808585111561130c57600080fd5b8386111561131957600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff1981358181169160148510156113535780818660140360031b1b83161692505b505092915050565b600060a0828403121561136d57600080fd5b60405160a0810181811067ffffffffffffffff8211171561139e57634e487b7160e01b600052604160045260246000fd5b6040526113aa83611267565b815260208301356113ba81610be8565b80602083015250604083013560408201526060830135606082015260808301356113e381610be8565b60808201529392505050565b60006020828403121561140157600080fd5b5051919050565b60006020828403121561141a57600080fd5b8151610c1d81610be8565b60006020828403121561143757600080fd5b610c1d8261126756fe546573745472616e7366657256616c69646174696f6e5a6f6e654f666665726572a264697066735822122054b845a22702fbca538b470c131c3bda492b0ba3a2ccffe04ca1828605d93b5764736f6c63430008110033";

type TestTransferValidationZoneOffererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTransferValidationZoneOffererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestTransferValidationZoneOfferer__factory extends ContractFactory {
  constructor(...args: TestTransferValidationZoneOffererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    expectedOfferRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestTransferValidationZoneOfferer> {
    return super.deploy(
      expectedOfferRecipient,
      overrides || {}
    ) as Promise<TestTransferValidationZoneOfferer>;
  }
  override getDeployTransaction(
    expectedOfferRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(expectedOfferRecipient, overrides || {});
  }
  override attach(address: string): TestTransferValidationZoneOfferer {
    return super.attach(address) as TestTransferValidationZoneOfferer;
  }
  override connect(signer: Signer): TestTransferValidationZoneOfferer__factory {
    return super.connect(signer) as TestTransferValidationZoneOfferer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTransferValidationZoneOffererInterface {
    return new utils.Interface(
      _abi
    ) as TestTransferValidationZoneOffererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTransferValidationZoneOfferer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestTransferValidationZoneOfferer;
  }
}