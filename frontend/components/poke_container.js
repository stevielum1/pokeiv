import { connect } from 'react-redux';
import Poke from './poke';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.id]
});

export default connect(mapStateToProps, null)(Poke);