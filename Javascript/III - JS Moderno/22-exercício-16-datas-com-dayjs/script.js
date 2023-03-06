const dayjs = require("dayjs")

let dateOfBirth = '2007-02-19'

const getAgeDates = (d) => {
    const year = dayjs().year()
    console.log(`Sua idade hoje: ${year - 2007}
Sua próxima data de aniversário: ${2}
Quantos dias faltam para o seu aniversário: ${dayjs(d).format('DD/MM/YYYY')}`
)
}

getAgeDates(dateOfBirth)