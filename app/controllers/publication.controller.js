const Publication = require('../models/publication.model.js');

// Create and Save a new admin
exports.create = (req, res) => {
    // Validate request
    if(!req.body.description) {
        return res.status(400).send({
            message: "username content can not be empty"
        });
    }

    // Create a admin
    const publication = new Publication({
        description: req.body.description || "Untitled Publication", 
       
        image:req.body.image,
        username:req.body.username,
        iduser:req.body.iduser,

    
   
  



    });

    // Save admin in the database
    publication.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the publication."
        });
    });
};

// Retrieve and return all admin from the database.
exports.findAll = (req, res) => {
    Publication.find()
    .then(publications => {
        res.send(publications);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving publications."
        });
    });
};

// Find a single admin with a adminId
exports.findOne = (req, res) => {
    publication.findById(req.params.publicationId)
    .then(publication => {
        if(!publication) {
            return res.status(404).send({
                message: "publication not found with id " + req.params.publicationId
            });            
        }
        res.send(publication);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "publication not found with id " + req.params.publicationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving publication with id " + req.params.publicationId
        });
    });
};

// Update a admin identified by the adminId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.description) {
        return res.status(400).send({
            message: "publication content can not be empty"
        });
    }

    // Find admin and update it with the request body
    Publication.findByIdAndUpdate(req.params.publicationId, {
        description: req.body.description || "Untitled Publication", 
        
        image:req.body.image,
        username:req.body.username,
        iduser:req.body.iduser,
   
    }, {new: true})
    .then(publication => {
        if(!publication) {
            return res.status(404).send({
                message: "publication not found with id " + req.params.publicationId
            });
        }
        res.send(publication);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "publication not found with id " + req.params.publicationId
            });                
        }
        return res.status(500).send({
            message: "Error updating publication with id " + req.params.publicationId
        });
    });
};

// Delete a admin with the specified adminId in the request
exports.delete = (req, res) => {
   Publication.findByIdAndRemove(req.params.publicationId)
    .then(publication => {
        if(!publication) {
            return res.status(404).send({
                message: "publication not found with id " + req.params.publicationId
            });
        }
        res.send({message: "publication deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "publication not found with id " + req.params.publicationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete publication with id " + req.params.publicationId
        });
    });
};
