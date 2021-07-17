const Annonce = require('../models/annonce.model.js');

// Create and Save a new admin
exports.create = (req, res) => {
    // Validate request
    if(!req.body.category) {
        return res.status(400).send({
            message: "annonce content can not be empty"
        });
    }

    // Create a admin
    const annonce = new Annonce({
        category: req.body.category || "Untitled Annonce", 
        type : req.body.type,
        titre : req.body.titre,
        description: req.body.description,
        image:req.body.image,
        name:req.body.name,
        telephone:req.body.telephone,
        prix:req.body.prix,
        
        localisation:req.body.localisation,
        etat:req.body.etat,
        quantite:req.body.quantite,
        statut:req.body.statut,
        username:req.body.username,

        iduser: req.body.iduser
    });

    // Save admin in the database
    annonce.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the annonce."
        });
    });
};

// Retrieve and return all admin from the database.
exports.findAll = (req, res) => {
    Annonce.find()
    .then(annonces => {
        res.send(annonces);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving annonces."
        });
    });
};

// Find a single admin with a adminId
exports.findOne = (req, res) => {
    Annonce.findById(req.params.annonceId)
    .then(annonce => {
        if(!annonce) {
            return res.status(404).send({
                message: "annonce not found with id " + req.params.annonceId
            });            
        }
        res.send(annonce);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "annonce not found with id " + req.params.annonceId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving annonce with id " + req.params.annonceId
        });
    });
};

// Update a admin identified by the adminId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.category) {
        return res.status(400).send({
            message: "annonce content can not be empty"
        });
    }

    // Find admin and update it with the request body
    Annonce.findByIdAndUpdate(req.params.annonceId, {
        category: req.body.category || "Untitled Annonce", 
        type : req.body.type,

titre : req.body.titre,
description: req.body.description,
image:req.body.image,
name:req.body.name,
telephone:req.body.telephone,
username:req.body.username,

localisation:req.body.localisation,
etat:req.body.etat,
quantite:req.body.quantite,
prix:req.body.prix,
statut:req.body.statut,
iduser : req.body.iduser

    }, {new: true})
    .then(annonce => {
        if(!annonce) {
            return res.status(404).send({
                message: "annonce not found with id " + req.params.annonceId
            });
        }
        res.send(annonce);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "annonce not found with id " + req.params.annonceId
            });                
        }
        return res.status(500).send({
            message: "Error updating annonce with id " + req.params.annonceId
        });
    });
};

// Delete a admin with the specified adminId in the request
exports.delete = (req, res) => {
   Annonce.findByIdAndRemove(req.params.annonceId)
    .then(annonce => {
        if(!annonce) {
            return res.status(404).send({
                message: "annonce not found with id " + req.params.annonceId
            });
        }
        res.send({message: "annonce deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "annonce not found with id " + req.params.annonceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete annonce with id " + req.params.annonceId
        });
    });
};
