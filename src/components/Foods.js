import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFoods} from '../actions/foodActions';

 class Foods extends Component {
   componentWillMount() {
     this.props.fetchFoods();
   }

  render() {

      const foodItems = this.props.foods.map(food => (
        <div key={[food.id, food.attributes.type]} className={"card-container " + food.attributes.type} >
          <div className="name-time-container" >
            <h5 className="card-name"> {food.attributes.name} </h5>
            <h5 className="card-time"> {food.attributes.time} </h5>
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
