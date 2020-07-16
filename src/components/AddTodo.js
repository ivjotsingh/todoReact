import React, {Component} from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component{

  state = {
    'title': ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    
  }

  onsSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    console.log(this.state)
    this.setState({title: ''})
  }

  render(){
    return (
        <form onsSubmit={this.onsSubmit} style={{display: 'flex' }}>
          <input type='text'
          name='title'
          placeholder='Add Todo ...'
          style= {{flex: '10', padding: '5px'}}
          value= {this.state.title}
          onChange= {this.onChange}
          />
          <input 
          type='submit' 
          value='submit' 
          className='btn' 
          style= {{flex: '1'}
          
        }

          />
          
        </form>
    );
  }
}

// proptypes
AddTodo.propTypes = {
    todos: PropTypes.array.isRequired
  }


export default AddTodo;
