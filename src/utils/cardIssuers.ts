export type TCardIssuer = 'visa' | 'mastercard' | 'visa-color'
export const getIssuerLogo = (cardIssuer: TCardIssuer) => {
    const cardIssuerLogo = 
        cardIssuer == 'visa' && require('../../assets/cardIssuers/visa.png') ||
        cardIssuer == 'mastercard' && require('../../assets/cardIssuers/mastercard.png') ||
        cardIssuer == 'visa-color' && require('../../assets/cardIssuers/visa-color.png')
    return cardIssuerLogo
}