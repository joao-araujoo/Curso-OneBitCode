const express = require("express");
const path = require("path");
const checkListRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");
const connectToDatabase = require("./config/database");
const PORT = 3000;

const app = express();

app.use(express.json());
// podemos utilizar o parâmetro para o caminho, sendo assim, todas as rotas do arquivo importado iniciarão com tal caminho especificado
app.use("/checklists", checkListRouter);
app.use("/", rootRouter);

app.set('views', path.join(__dirname, 'src/views'));
app.set("view engine", "ejs");

try {
  connectToDatabase();

  app.listen(PORT, () => console.log(`🎉 Listening on port ${PORT}!`));
} catch (error) {
  console.error(
    "⚠ An error occurred while starting the server! " + error.message
  );
}