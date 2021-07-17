const Ajouter = require('../models/ajouter.model.js');

// Create and Save a new admin
exports.create = (req, res) => {
    // Validate request
    if(!req.body.category) {
        return res.status(400).send({
            message: "ajouter content can not be empty"
        });
    }

    // Create a admin
    const ajouter = new Ajouter({
        category: req.body.category || "Untitled ajouter", 
        titre : req.body.titre,
        username:req.body.username,
        description: req.body.description,
        image:req.body.image,
        name:req.body.name,
        
        prix:req.body.prix,

     
     saison:req.body.saison,
        poids:req.body.poids,
        taille:req.body.taille,
        statut:req.body.statut,
        iduser:req.body.iduser



    });

    // Save admin in the database
    ajouter.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ajouter."
        });
    });
};

// Retrieve and return all admin from the database.
exports.findAll = (req, res) => {
    Ajouter.find()
    .then(ajouters => {
        res.send(ajouters);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving ajouters."
        });
    });
};

// Find a single admin with a adminId
exports.findOne = (req, res) => {
    Ajouter.findById(req.params.ajouterId)
    .then(ajouter => {
        if(!ajouter) {
            return res.status(404).send({
                message: "ajouter not found with id " + req.params.ajouterId
            });            
        }
        res.send(ajouter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "ajouter not found with id " + req.params.ajouterId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving ajouter with id " + req.params.ajouterId
        });
    });
};

// Update a admin identified by the adminId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.category) {
        return res.status(400).send({
            message: "ajouter content can not be empty"
        });
    }

    // Find admin and update it with the request body
    Ajouter.findByIdAndUpdate(req.params.ajouterId, {
        category: req.body.category || "Untitled ajouter", 
        titre : req.body.titre,
        username:req.body.username,
        description: req.body.description,
        image:req.body.image,
        name:req.body.name,
        
        prix:req.body.prix,

     
     saison:req.body.saison,
        poids:req.body.poids,
        statut:req.body.statut,

        taille:req.body.taille,
        iduser:req.body.iduser,

    }, {new: true})
    .then(ajouter => {
        if(!ajouter) {
            return res.status(404).send({
                message: "ajouter not found with id " + req.params.ajouterId
            });
        }
        res.send(ajouter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "ajouter not found with id " + req.params.ajouterId
            });                
        }
        return res.status(500).send({
            message: "Error updating ajouter with id " + req.params.ajouterId
        });
    });
};

// Delete a admin with the specified adminId in the request
exports.delete = (req, res) => {
  Ajouter.findByIdAndRemove(req.params.ajouterId)
    .then(ajouter => {
        if(!ajouter) {
            return res.status(404).send({
                message: "ajouter not found with id " + req.params.ajouterId
            });
        }
        res.send({message: "ajouter deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "ajouter not found with id " + req.params.ajouterId
            });                
        }
        return res.status(500).send({
            message: "Could not delete ajouter with id " + req.params.ajouterId
        });
    });
};
