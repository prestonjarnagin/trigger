import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFoods} from '../actions/foodActions';

 class Foods extends Component {
   componentWillMount() {
     this.props.fetchFoods();
   }

   componentWillReceiveProps(nextProps) {
     if(nextProps.newFood) {
       this.props.foods.push(nextProps.newFood);
     }
   }
  render() {

    const foodItems = this.props.foods.map(food => (
      <div key={food.id} className="card-container">
        <div className="name-time-container" >
          <h3> {food.name} </h3>
          <h3> {food.body} </h3>
        </div>
        <button className="edit-card">...</button>
        <button className="delete-card">X</button>
      </div>
    ))
    return(
      <div id='day-summary-container'>
        {foodItems}
      </div>
    )
  }
}

Foods.propTypes = {
  fetchFoods: PropTypes.func.isRequired,
  foods: PropTypes.array.isRequired,
  newFood: PropTypes.object
}

const mapStateToProps = state => ({
  foods: state.foods.items,
  newFood: state.foods.item
});

export default connect(mapStateToProps, { fetchFoods })(Foods);
