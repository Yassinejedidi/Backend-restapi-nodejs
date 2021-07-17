module.exports = (app) => {
    const annonces = require('../controllers/annonce.controller.js');


    app.post('/annonces', annonces.create);


    app.get('/annonces', annonces.findAll);


    app.get('/annonces/:annonceId', annonces.findOne);


    app.put('/annonces/:annonceId', annonces.update);


    app.delete('/annonces/:annonceId', annonces.delete);
}