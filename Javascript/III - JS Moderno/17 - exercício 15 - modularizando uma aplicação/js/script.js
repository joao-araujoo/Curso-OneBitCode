import { addItems, clear, inputFunctions, getResult } from './modules/calc-functions.js'
import { copyToClipboard } from './modules/copy-to-clipboard.js'
import { switchTheme } from './modules/switch-theme.js'

addItems()
clear()
inputFunctions()
getResult()

copyToClipboard()

switchTheme()