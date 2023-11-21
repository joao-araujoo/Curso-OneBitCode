const App = require("./App");
const Account = require("./entities/Account");

App.createUser('João', 'joaozinho@gmail.com')
const myAccount = new Account(App.findUser('joaozinho@gmail.com'))