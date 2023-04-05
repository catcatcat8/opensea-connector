// import { Wallet, ethers, BigNumber } from 'ethers'
// import { useContracts, getProvider, safeRead } from '@/gotbit-tools/node'
// import { config } from '@/gotbit.config'

// export const getWallet = () =>
//   new Wallet(process.env.PRIVATE_KEY, getProvider(config.DEFAULT_CHAINID))

// type Transaction = Awaited<
//   ReturnType<ReturnType<typeof useContracts>['bridgeAssist']['getUserTransactions']>
// >[number]

// type SignTransaction = {
//   transaction: {
//     user: string
//     timestamp: string
//     amount: string
//     to: string
//     from: string
//     nonce: string
//   }
//   fulfilled: boolean
//   signature: string
// }

// export const getTransactions = async (user: string): Promise<Transaction[]> => {
//   let transactions: Transaction[] = []
//   for (const chainId of config.chainIds) {
//     const { bridgeAssist } = useContracts(undefined, chainId)
//     transactions = transactions.concat(
//       await safeRead(bridgeAssist.getUserTransactions(user), [])
//     )
//   }
//   return transactions
// }

// export const packTx = (tx: Transaction) => {
//   return ethers.utils.defaultAbiCoder.encode(
//     ['address', 'uint', 'uint', 'uint', 'uint', 'uint'],
//     [tx.user, tx.timestamp, tx.amount, tx.from, tx.to, tx.nonce]
//   )
// }
// export const hashTx = (tx: Transaction) => ethers.utils.keccak256(packTx(tx))

// export const pairTransactions = async (
//   user: string
// ): Promise<[Transaction[], Record<string, boolean>]> => {
//   const fulfilled: Record<string, boolean> = {}
//   const transactions: Transaction[] = await getTransactions(user)
//   const uniqueTransactions: Transaction[] = []

//   for (const transaction of transactions) {
//     const hashedTx = hashTx(transaction)

//     if (!(hashedTx in fulfilled)) {
//       uniqueTransactions.push(transaction)
//     }

//     fulfilled[hashedTx] = hashedTx in fulfilled
//   }
//   return [uniqueTransactions, fulfilled]
// }

// export const extractTransaction = (tx: Transaction) => {
//   return {
//     user: tx.user,
//     timestamp: tx.timestamp.toString(),
//     amount: tx.amount.toString(),
//     to: tx.to.toString(),
//     from: tx.from.toString(),
//     nonce: tx.nonce.toString(),
//   }
// }

// export const signTransactions = async (user: string) => {
//   const [transactions, fulfilled] = await pairTransactions(user)
//   const wallet = getWallet()

//   const signedTransactions: SignTransaction[] = []
//   for (const transaction of transactions) {
//     const hashedTx = hashTx(transaction)
//     signedTransactions.push({
//       transaction: extractTransaction(transaction),
//       fulfilled: fulfilled[hashedTx],
//       signature: await wallet.signMessage(ethers.utils.arrayify(hashedTx)),
//     })
//   }
//   return signedTransactions
// }
