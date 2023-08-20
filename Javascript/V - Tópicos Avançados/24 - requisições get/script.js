function createCountryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    card.append(name, flag)
    document.getElementById('countries').appendChild(card)
}

async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    return countries
}


async function searchCountries(){
    const inputEntry = document.getElementById('searchInput').value.toLowerCase()
    const countriesDiv = document.getElementById('countries')
    countriesDiv.innerHTML = ''
    
    const countries = await getCountries()
    const foundCountries = countries.filter(country => country.name.common.toLowerCase().includes(inputEntry))

    foundCountries.forEach(createCountryCard)
}