const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const mc = require("./controllers/messages_controller"); //import the page as a variable and name it whatever you want

app.use(bodyParser.json());

const messagesBaseUrl = "/api/messages";
app.get(messagesBaseUrl, mc.read);
app.post(messagesBaseUrl, mc.create);
app.put(`${messagesBaseUrl}/:id`, mc.update); //had to add id param to select the specific url
app.delete(`${messagesBaseUrl}/:id`, mc.delete); //had to add id param to select the specific url

app.listen(port, () => {
  console.log(`I'm listening on ${port}`);
});
