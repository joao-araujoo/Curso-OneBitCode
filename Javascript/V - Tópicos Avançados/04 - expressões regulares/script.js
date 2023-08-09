function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '')
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0] // A função "match" retorna um array com o texto que deu "match" com o regex
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '')
}
;
console.log(new PhoneNumber('+55 (12) 6 9974-2341'))
console.log(new PhoneNumber('+1 (341) ads4124-4314-2341'))