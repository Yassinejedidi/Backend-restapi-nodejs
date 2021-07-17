module.exports = (app) => {
    const commentaires = require('../controllers/commentaire.controller.js');


    app.post('/commentaires', commentaires.create);

    
    app.get('/commentaires', commentaires.findAll);

   
    app.get('/commentaires/:commentaireId', commentaires.findOne);

    
    app.put('/commentaires/:commentaireId', commentaires.update);

    
    app.delete('/commentaires/:commentaireId', commentaires.delete);
}
