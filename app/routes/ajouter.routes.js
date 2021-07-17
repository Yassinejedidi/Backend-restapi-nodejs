module.exports = (app) => {
    const ajouters = require('../controllers/ajouter.controller.js');


    app.post('/ajouters', ajouters.create);

    
    app.get('/ajouters', ajouters.findAll);

   
    app.get('/ajouters/:ajouterId', ajouters.findOne);

    
    app.put('/ajouters/:ajouterId', ajouters.update);

    
    app.delete('/ajouters/:ajouterId', ajouters.delete);
}