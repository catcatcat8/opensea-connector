import { addContractI, defineConfig } from '@/gotbit-tools/node/config'
import { universalRpc } from '@/gotbit-tools/node/rpc'

export const config = defineConfig({
  chainIds: ['97'],
  DEFAULT_CHAINID: '97',
  rpc: universalRpc(),
})

import { defineContracts } from '@/gotbit-tools/node/config'
import type { BridgeAssist, Token } from '@/contracts/typechain'
export const contracts = defineContracts({
  token: addContractI<Token>('Token'),
  bridgeAssist: addContractI<BridgeAssist>('BridgeAssist'),
  '97': {},
  // '1': {},
})
