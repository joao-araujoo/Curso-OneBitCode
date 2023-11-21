import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const form = new Form('body')
const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'name' })
const button = new Component('button', form, { innerText: 'Enviar' })
form.addChildren(label, input, button)
form.render()