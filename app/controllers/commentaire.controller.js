const Commentaire = require('../models/commentaire.model.js');

// Create and Save a new admin
exports.create = (req, res) => {
    // Validate request
    if(!req.body.coment) {
        return res.status(400).send({
            message: "coment content can not be empty"
        });
    }

    // Create a admin
    const commentaire = new Commentaire({
        userid: req.body.userid,
        idposte : req.body.idposte,
        username : req.body.username,
        coment: req.body.coment || "Untitled Coment"
    });

    // Save admin in the database
    commentaire.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the commentaire."
        });
    });
};

// Retrieve and return all admin from the database.
exports.findAll = (req, res) => {
    Commentaire.find()
    .then(commentaires => {
        res.send(commentaires);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving commentaires."
        });
    });
};

// Find a single admin with a adminId
exports.findOne = (req, res) => {
    Commentaire.findById(req.params.commentaireId)
    .then(commentaire => {
        if(!commentaire) {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });            
        }
        res.send(commentaire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving commentaire with id " + req.params.commentaireId
        });
    });
};

// Update a admin identified by the adminId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.coment) {
        return res.status(400).send({
            message: "coment content can not be empty"
        });
    }

    // Find admin and update it with the request body
    Commentaire.findByIdAndUpdate(req.params.commentaireId, {
        userid: req.body.userid,
        username : req.body.username,
        coment: req.body.coment || "Untitled Coment"
    }, {new: true})
    .then(commentaire => {
        if(!commentaire) {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });
        }
        res.send(commentaire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });                
        }
        return res.status(500).send({
            message: "Error updating commentaire with id " + req.params.commentaireId
        });
    });
};

// Delete a admin with the specified adminId in the request
exports.delete = (req, res) => {
    Commentaire.findByIdAndRemove(req.params.commentaireId)
    .then(commentaire => {
        if(!commentaire) {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });
        }
        res.send({message: "coment deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });                
        }
        return res.status(500).send({
            message: "Could not delete commentaire with id " + req.params.commentaireId
        });
    });
};
