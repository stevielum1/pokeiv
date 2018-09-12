class CreatePokemon < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false
      t.integer :stamina, null: false
      t.integer :attack, null: false
      t.integer :defense, null: false
    end
  end
end
