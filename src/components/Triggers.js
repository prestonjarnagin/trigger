import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as numberHelper from '../helpers/number';
import { fetchTrigger } from '../actions/triggerActions';
import leftButton from "../images/left.svg";
import rightButton from "../images/right.svg";

class Triggers extends Component {
  constructor(props) {
    super(props)
    this.analyticsContainer = React.createRef();
  }

  componentDidMount() {
    this.props.fetchTrigger();
  }

  componentDidUpdate() {
    this.toggleDisplay();
  }

  toggleDisplay() {
    if(this.props.displayAnalytics) {
      this.analyticsContainer.current.style.visibility = "visible"
    } else {
      this.analyticsContainer.current.style.visibility = "hidden"
    }
  }
  
  render () {
    const triggers = this.props.foods.map(food => (
      <div key={food.id} className="potential-triggers">
        <h5 className="trigger-name">{food.name}</h5>
        <h5 className="trigger-frequency">{numberHelper.toPercentage(food.frequency)}</h5>
      </div>
    ))

    const occurrences = (
      <div id="occurrences-container">
        <div className="occurrence">
          <h5 className="occurrences-title">Last week</h5>
          <h5 className="occurrences-value">{this.props.occurrences.last_7_days}</h5>
        </div>
        <div className="occurrence">
          <h5 className="occurrences-title">Last two weeks</h5>
          <h5 className="occurrences-value">{this.props.occurrences.last_15_days}</h5>
        </div>
        <div className="occurrence">
          <h5 className="occurrences-title"> This month</h5>
          <h5 className="occurrences-value">{this.props.occurrences.last_30_days}</h5>
        </div>
        <div className="occurrence">
          <h5 className="occurrences-title">Last month</h5>
          <h5 className="occurrences-value">{this.props.last_31_to_60_days}</h5>
        </div>
      </div>
    )

  const triggerName = ( 
    <div id="trigger-name">
      <h1>{this.props.name}</h1>
    </div>
    )

    return (
      <div id="triggers-component-container" ref={this.analyticsContainer}>
        <div id="trigger-name-container">
          <img src={leftButton}
            className="calendar-button"
            alt="decrement date" />
          <div className="calendar-dates-container">
            {triggerName}
          </div>
          <img src={rightButton}
            className="calendar-button"
            alt="increment date" />
        </div>
        <div id="triggers-container-main">
          <div id="trigger-occurrences-container">
            <h3>Occurrences</h3>
            {occurrences}
          </div>
          <div id="potential-triggers-container">
            <h3>Potential Triggers</h3>
            <div id="triggers-container">
              {triggers}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Triggers.propTypes = {
  fetchTrigger: PropTypes.func.isRequired,
  foods: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  occurrences: PropTypes.object.isRequired,
  displayAnalytics: PropTypes.bool,

}

const mapStateToProps = state => ({
  foods: state.trigger.items,
  name: state.trigger.name,
  occurrences: state.trigger.occurrences,
  displayAnalytics: state.nav.displayAnalytics,
})

export default connect(mapStateToProps, { fetchTrigger })(Triggers);
