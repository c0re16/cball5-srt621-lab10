const express = require('express');
const router = new express.Router();
const Books = require('../controllers/book.js');
console.log('loaded controllers/index.js');
router.get('/', function (req,res) {
	res.sendfile('./serve_html/views/home.html');
});
router.get('/api/books', [Books.getBooks]);
router.get('/api/books/:id', [Books.getBookByID]);
router.get('/books/:id', function(req,res) {
	var data = req.params.id;
	res.render("book.ejs",{id:data})
})

module.exports = router;