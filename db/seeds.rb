# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def createPokemon(name, stamina, attack, defense)
  Pokemon.create({
    name: name,
    stamina: stamina,
    attack: attack,
    defense: defense
  })
end

createPokemon("Bulbasaur", 90, 118, 118)
createPokemon("Ivysaur", 120, 151, 151)
createPokemon("Venusaur", 160, 198, 198)

createPokemon("Charmander", 78, 116, 96)
createPokemon("Charmeleon", 116, 158, 129)
createPokemon("Charizard", 156, 223, 176)

createPokemon("Squirtle", 88, 94, 122)
createPokemon("Wartortle", 118, 126, 155)
createPokemon("Blastoise", 158, 171, 210)

createPokemon("Caterpie", 90, 55, 62)
createPokemon("Metapod", 100, 45, 94)
createPokemon("Butterfree", 120, 167, 151)

createPokemon("Weedle", 80, 63, 55)
createPokemon("Kakuna", 90, 46, 86)
createPokemon("Beedril", 130, 169, 150)

createPokemon("Pidgey", 80, 85, 76)
createPokemon("Pidgeotto", 126, 117, 108)
createPokemon("Pidgeot", 166, 166, 157)

createPokemon("Rattata", 60, 103, 70)
createPokemon("Raticate", 110, 161, 144)

createPokemon("Spearow", 80, 112, 61)
createPokemon("Fearow", 130, 182, 135)

createPokemon("Ekans", 70, 110, 102)
createPokemon("Arbok", 120, 167, 158)