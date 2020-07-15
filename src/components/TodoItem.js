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
    console.log(this.props.todo.completed)
    return (
      <div style={this.getItemStyle()}>
        <h3> {this.props.todo.title} </h3>
      </div>
    );
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    
}

export default TodoItem;
