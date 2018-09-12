export const fetchPokemon = () => (
  $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
);