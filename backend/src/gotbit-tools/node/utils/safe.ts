import type { ContractTransaction, ContractReceipt } from 'ethers'

/** Safely awaits `promise` and returns value and error
 * @param {Promise<T>} promise - promise to be awaited
 * @returns {Promise<[T, null] | [null, unknown]>} tuple of [value, error] (if rejected [null, error], resolved - [value, error])
 */
export const safe = async <T>(
  promise: Promise<T>,
  muteError = false
): Promise<[T, null] | [null, unknown]> => {
  try {
    const result = await promise
    return [result, null]
  } catch (error) {
    if (!muteError) console.error(error)
    return [null, error]
  }
}

/** Safely awaits `promise` and returns resolved value, otherwise returns `defaultValue`
 * @param {Promise<ContractTransaction>} txPromise - tx promise to be awaited
 * @param {(error: any) => void} [errorCallback] - callback which will be called if promise was rejected
 * @returns {Promise<[ContractTransaction | null, ContractReceipt | null]>} tuple of tx and tx reciept, returns [null, null] if promise was rejected
 */
export const safeWrite = async (
  txPromise: Promise<ContractTransaction>,
  errorCallback?: (error: any) => void,
  confirmCallback?: () => any,
  muteError = false
): Promise<[ContractTransaction | null, ContractReceipt | null]> => {
  const [tx, errorTx] = await safe(txPromise, muteError)

  confirmCallback?.()
  if (tx) return [tx, await tx.wait()]

  errorCallback?.(errorTx)
  return [null, null]
}

/** Safely awaits `promise` and returns resolved value, otherwise returns `defaultValue`
 * @param {Promise<T>} promise - promise to be awaited
 * @param {T} defaultValue - default value if promise will be rejected
 * @param {(error: any) => void} [errorCallback] - callback which will be called if promise was rejected
 * @returns {Promise<T>} safe promise with default value
 */
export const safeRead = async <T>(
  promise: Promise<T>,
  defaultValue: T,
  errorCallback?: (error: any) => void,
  muteError = false
): Promise<T> => {
  const [result, errorResult] = await safe(promise, muteError)
  if (result !== null) return result
  errorCallback?.(errorResult)
  return defaultValue
}
