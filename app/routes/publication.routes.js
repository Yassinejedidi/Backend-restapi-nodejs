module.exports = (app) => {
    const publications = require('../controllers/publication.controller.js');


    app.post('/publications', publications.create);

    
    app.get('/publications', publications.findAll);

   
    app.get('/publications/:publicationId', publications.findOne);

    
    app.put('/publications/:publicationId', publications.update);

    
    app.delete('/publications/:publicationId', publications.delete);
}