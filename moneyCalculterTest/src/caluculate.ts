export function calculate(rechnungsbetrag: number, personenzahl: number, serviceFee: number){
    let value = {}
    if (serviceFee === 0){
    } else {
        const trinkgeld = (rechnungsbetrag / 100 * serviceFee);
        const gesamtSumme = rechnungsbetrag + trinkgeld;
    
        const preisProPerson = (gesamtSumme / personenzahl);

        value = {
            fee: trinkgeld,
            sum: gesamtSumme,
            each: preisProPerson
        }
    }
    return value
}