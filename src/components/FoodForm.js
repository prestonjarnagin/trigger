import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { createFood } from '../actions/foodActions';

class FoodForm extends Component {
   constructor(props) {
     super(props);
     this.state = {
       title: '',
       body: ''
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }

   onSubmit(event){
     event.preventDefault();

     const food = {
       title: this.state.title,
       body: this.state.body
     }

     this.props.createFood(food);
   }
  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label> <br/>
            <input type="text" name="title" value={this.state.title}
            onChange = {this.onChange}
            />
          </div>
          <div>
            <label>Body: </label> <br/>
            <input type="text" name="body" value={this.state.body}
            onChange = {this.onChange}
             />
          </div>
          <br/>
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

FoodForm.propTypes = {
  createFood: PropTypes.func.isRequired
}
export default connect(null, {createFood} )(FoodForm);
