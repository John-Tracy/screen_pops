var router = require('express').Router(),
	path = require('path');

router.get('/login', (req, res) => {
	console.log('index route');
	res.sendFile(path.join(__dirname + '/../public/html/index.html'));
});

module.exports = router;