const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'knex_practice'
  }
})


knex.select().from('monsters').then(response => {
	console.log(response)
	process.exit()
})

