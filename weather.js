require('seneca')()
	.use('./definition.js')
	.listen({port: 3500, host: 'localhost'});