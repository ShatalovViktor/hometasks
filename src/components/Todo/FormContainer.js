import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import { addTodo } from '../../store/todos/actions';

function mapStateToProps(){
  return {
  }
}

const mapDispatchToProps = {
  add: addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);