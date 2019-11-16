import { connect } from 'react-redux';
import List from './List';
import { removeTodo } from '../store/todos/actions';

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  remove: removeTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);