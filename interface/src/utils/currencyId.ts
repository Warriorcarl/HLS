import { Currency, ETHER, Token } from 'file:../v2-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'HLS'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
