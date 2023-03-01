// Não esquecer de colocar o ".js"
import { inline } from './inline.js'
import defaultInline from './inline.js'
// import { group } from './non-inline.js'
// import exportDefault from './non-inline.js'
import exportDefault, { group, a, b, c, d } from './non-inline.js'

inline()
defaultInline()

group()
exportDefault()