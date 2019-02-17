import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFood } from '../actions/foodActions';

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'food',
      name: '',
      time: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formContainer = React.createRef();
  }

  componentDidUpdate() {
    this.toggleDisplay()
  }

  toggleDisplay() {
    this.props.displayAddForm ?
      this.formContainer.current.style.bottom = "60px" : 
      this.formContainer.current.style.bottom = "-280px"
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const food = {
      type: this.state.type,
      name: this.state.name,
      time: this.state.time
    }
    this.props.createFood(food);
  }

  render() {
    return(
      <div id="food-form-container" ref={this.formContainer}>
        <div className="food-form-tabs-container">
          <div className="food-form-tab add-food-tab">
            <h4>Add Food</h4>
          </div>
          <div className="food-form-tab add-reaction-tab">
            <h4>Add Reaction</h4>
          </div>
        </div>
        <div id="food-form-fields-container">
          <form onSubmit={this.onSubmit}>
            <div>
              <input type="text"
                     name="name"
                     value={this.state.title}
                     placeholder="Enter Name of Food"
                     onChange={this.onChange}
              />
            </div>
            <div>
              <input type="text"
                     name="time"
                     value={this.state.body}
                     placeholder="Time"
                     onChange={this.onChange}
              />
              <button type="submit"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

FoodForm.propTypes = {
  createFood: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  displayAddForm: state.foodForm.display,
});

export default connect(mapStateToProps, {createFood} )(FoodForm);
