'use strict'

const { Monster, Hero, Weapon, Battle, HeroWeapon } = require('./orm.js')

// // Get all weapons for hero with id = 1 from hero weapons table
// HeroWeapon.forge().query({where: {hero_id: 1}}).fetchAll()
// 	.then(models => models.forEach(model => console.log(model.get('weapon_id'))))
// 	.catch(err => console.log(err))

// // Fetch all battle data with corresponding hero and monster data
// Battle.forge().fetchAll({withRelated: ['hero', 'monster']})
// 	.then(models => {
// 		models.forEach(model => console.log(model.toJSON()))
// 		models.forEach(model => {
// 			console.log('Battle:', model.get('id'))
// 			console.log('hero:' , model.related('hero').get('hero_name'))
// 			console.log('monster:' , model.related('monster').get('monster_name'))
// 		})
// 	})
// 	.catch(err => console.log(err))

// // Fetch a hero by name and log his/her guild
// Hero.byName('Lucas')
// 	.then(model => console.log(model.get('hero_guild')))
// 	.catch(err => console.log(err))

// // Using a hero's id, console.log a list of all the battles that your hero has fought.
// Hero.forge().query({where: {id: 3}}).fetchAll({withRelated: ['battles']})
// 	.then(models => {
// 		models.forEach(model => model.related('battles').forEach(model => console.log(model.get('id'))))
// 	}) // This is awful

// Battle.forge().query({where: {hero_id: 3}}).fetchAll()
// 	.then(models => {
// 		models.forEach(model => console.log(model.get('id')))
// 	}) // This is better

Hero.forge().fetchAll({withRelated: ['weapons']})
	.then(models => {
		models.forEach(model => console.log(model.toJSON()))
	})

Weapon.forge().fetchAll({withRelated: ['heros']})
	.then(models => {
		models.forEach(model => console.log(model.toJSON()))
	})
























