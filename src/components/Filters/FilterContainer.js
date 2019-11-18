import { connect } from 'react-redux';
import Filters from './Filters';
import { setFilter } from '../../store/filter/actions'


function mapStateToProps(state, ownProps){
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = {
  setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
