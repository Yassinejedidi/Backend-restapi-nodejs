module.exports = (app) => {
    const chats = require('../controllers/chat.controller.js');


    app.post('/chats', chats.create);

    
    app.get('/chats', chats.findAll);

   
    app.get('/chats/:chatId', chats.findOne);

    
    app.put('/chats/:chatId', chats.update);

    
    app.delete('/chats/:chatId', chats.delete);
}
