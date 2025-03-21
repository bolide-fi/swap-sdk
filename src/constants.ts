import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export enum SWAP_NAME {
  pancakeswap = 'pancakeswap',
  apeswap = 'apeswap',
  biswap = 'biswap',
}

export const FACTORY_ADDRESS_SWAPS = {
  [SWAP_NAME.pancakeswap]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
  [SWAP_NAME.apeswap]: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
  [SWAP_NAME.biswap]: '0x858e3312ed3a876947ea49d572a7c42de08af7ee',
}

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS_SWAPS,
  [ChainId.TESTNET]:  FACTORY_ADDRESS_SWAPS
}

export const INIT_CODE_HASH_SWAPS = {
  [SWAP_NAME.pancakeswap]: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
  [SWAP_NAME.apeswap]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [SWAP_NAME.biswap]: '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf',
}

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH_SWAPS,
  [ChainId.TESTNET]: INIT_CODE_HASH_SWAPS
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
