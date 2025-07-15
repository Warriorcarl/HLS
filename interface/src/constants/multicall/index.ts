import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.HELIOS]: '0x14B4a9e5EB9d7Fa8bb7D23549f48b39198C5714a',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
