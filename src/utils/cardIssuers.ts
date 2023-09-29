export type TCardIssuer = 'visa' | 'mastercard'
export const getIssuerLogo = (cardIssuer: TCardIssuer) => {
    const cardIssuerLogo = 
        cardIssuer == 'visa' && require('../../assets/cardIssuers/visa.png') ||
        cardIssuer == 'mastercard' && require('../../assets/cardIssuers/mastercard.png')
    return cardIssuerLogo
}