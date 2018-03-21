let messages = [];

let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time }); //creates a new message object w/ id, text, and time
    id++; //increments the id for future messages
    res.status(200).send(messages); //sends an updated messages array
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    const { text } = req.body; //the text property from the front-end request
    const updateID = req.params.id; //the id from the request url param
    const messageIndex = messages.findIndex(message => message.id == updateID); //the index for the matching id

    let message = messages[messageIndex]; //the message with the matching id

    messages[messageIndex] = {
      //updates the object that has the matching index
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const deleteID = req.params.id; //the id from the req that you want to delete
    const messageIndex = messages.findIndex(message => message.id == deleteID); //the index for the matching id in the messages array

    messages.splice(messageIndex, 1); //removing the message from the messages array
    res.status(200).send(messages);
  }
};
