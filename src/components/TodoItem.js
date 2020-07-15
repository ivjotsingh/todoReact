import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{

getItemStyle = () => {
  return {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  }
}
  
  render(){
    const {id, title} = this.props.todo
    return (
      <div style={this.getItemStyle()}>
        
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        <h3> {title} </h3>
        
      </div>
    );
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;
