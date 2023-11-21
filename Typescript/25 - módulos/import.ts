import { Spaceship } from "./export"
// baixamos o @types/lodash no terminal para adicionar tipagem feita pela comunidade para essa biblioteca, uma vez que foi feita com javascript e não possui tipos
import * as _ from "lodash"

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: 'X-wing',
    pilot: 'Luke Skywalker',
    speed: 200,
    weapons: 4
}

console.log(_.camelCase(xwing.pilot))