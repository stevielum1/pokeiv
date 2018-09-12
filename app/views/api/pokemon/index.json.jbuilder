@pokemon.each do |pokemon|
  json.set! pokemon.id do 
    json.extract! pokemon, :name, :stamina, :attack, :defense
  end
end