const Book = require('../models/book.js');
const books = {
    getBooks: function(req, res) {
        Book.find({}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while retrieving Books."
            });
        })
    },
    getBookByID: function(req, res) {
        const id = req.params.id;
        Book.find({index: id}).then(data => {
            if (!data)
                res.status(404).send({
                    message: "books with id " + id + " is not found."
                });
            else res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving book with id " + id
            })
        })
    },
}

module.exports = books;