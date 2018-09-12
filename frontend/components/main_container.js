import { connect } from 'react-redux';
import Main from './main';
import { fetchPokemon } from '../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: () => dispatch(fetchPokemon())
})

export default connect(mapStateToProps, null)(Main);