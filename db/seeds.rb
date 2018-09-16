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

File.readlines('app/assets/stats.txt').each do |line|
  arr = line.split(" ")
  name = arr[0]
  stamina = arr[1]
  attack = arr[2]
  defense = arr[3]
  createPokemon(name, stamina, attack, defense)
end
