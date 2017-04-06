'use strict'

const {bookshelf} = require('./index.js')

////////////
// Models //
////////////

// Define model
const Monster = bookshelf.Model.extend({
	tableName: 'monsters',

	battles: function() {
		return this.hasMany('Battle', 'monster_id')
	}
})
// Register model for registry plugin
bookshelf.model('Monster', Monster)


// Define Model
const Hero = bookshelf.Model.extend({
	tableName: 'heros',

	battles: function() {
		return this.hasMany('Battle', 'hero_id')
	},

	weapons: function() {
		return this.belongsToMany('Weapon').through('HeroWeapon', 'hero_id')
	}
}, {
  byName: function(name) {
    return this.forge().query({where:{ hero_name: name }}).fetch();
  }
})
// Register model for registry plugin
bookshelf.model('Hero', Hero)


// Define Model
const Weapon = bookshelf.Model.extend({
	tableName: 'weapons',

	heros: function() {
		return this.belongsToMany('Hero').through('HeroWeapon', 'weapon_id')
	}
})
// Register model for registry plugin
bookshelf.model('Weapon', Weapon)


// Define Model
const Battle = bookshelf.Model.extend({
	tableName: 'battles',

	hero: function() {
		return this.belongsTo('Hero', 'hero_id')
	},

	monster: function() {
		return this.belongsTo('Monster', 'monster_id')
	}
})
// Register model for registry plugin
bookshelf.model('Battle', Battle)

// Define Model
const HeroWeapon = bookshelf.Model.extend({
	tableName: 'hero_weapons',

	heros: function() {
		return this.belongsToMany('Hero', 'hero_id')
	},

	weapons: function() {
		return this.belongsToMany('Weapons', 'weapon_id')
	}
})
// Register model for registry plugin
bookshelf.model('HeroWeapon', HeroWeapon)




module.exports = { Monster, Hero, Weapon, Battle, HeroWeapon }












