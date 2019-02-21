import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as numberHelper from '../helpers/number';
import leftButton from "../images/left.svg";
import rightButton from "../images/right.svg";
import { fetchTriggers, 
         fetchCurrentTrigger,
         incrementCurrentTrigger,
         decrementCurrentTrigger } from '../actions/triggerActions';

class Triggers extends Component {
  constructor(props) {
    super(props)
    this.analyticsContainer = React.createRef();
    this.incrementButton = React.createRef();
    this.decrementButton = React.createRef();
    this.incrementCurrentTrigger = this.incrementCurrentTrigger.bind(this);
    this.decrementCurrentTrigger = this.decrementCurrentTrigger.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchTriggers();
    await this.props.fetchCurrentTrigger(this.props.triggers[this.props.currentTrigger].id);
    await this.disableScroll(this.props.triggers.length)
  }

  componentDidUpdate() {
    this.toggleDisplay();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentTrigger !== this.props.currentTrigger) {
      this.props.fetchCurrentTrigger(this.props.triggers[nextProps.currentTrigger].id);
    }
  }

  toggleDisplay() {
    if(this.props.displayAnalytics) { 
      this.analyticsContainer.current.style.visibility = "visible"
    } else {
      this.analyticsContainer.current.style.visibility = "hidden"
    }
  }

  incrementCurrentTrigger() {
    this.props.incrementCurrentTrigger(this.props.currentTrigger, this.props.triggers.length)
  }
  
  decrementCurrentTrigger() {
    this.props.decrementCurrentTrigger(this.props.currentTrigger, this.props.triggers.length)
  }

  disableScroll(triggersLength) {
    if(triggersLength < 2) {
      this.incrementButton.current.visibility = "hidden";
      this.decrementButton.current.visibility = "hidden";
    }
  }
  
  render () {
    const triggers = this.props.foods.filter(food => food.frequency >= 0.5)
      .map(food => (
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
          <h5 className="occurrences-value">{this.props.occurrences.last_31_to_60_days}</h5>
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
            ref={this.decrementButton}
            className="calendar-button"
            alt="decrement trigger" 
            onClick={this.decrementCurrentTrigger} />
          <div className="calendar-dates-container">
            {triggerName}
          </div>
          <img src={rightButton}
            ref={this.incrementButton}
            className="calendar-button"
            alt="increment trigger"
            onClick={this.incrementCurrentTrigger} />
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
  fetchTriggers: PropTypes.func.isRequired,
  fetchCurrentTrigger: PropTypes.func.isRequired,
  foods: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  occurrences: PropTypes.object.isRequired,
  displayAnalytics: PropTypes.bool,
  triggers: PropTypes.array,
  currentTrigger: PropTypes.number

}

const mapStateToProps = state => ({
  foods: state.trigger.items,
  name: state.trigger.name,
  occurrences: state.trigger.occurrences,
  displayAnalytics: state.nav.displayAnalytics,
  triggers: state.trigger.triggers,
  currentTrigger: state.trigger.currentTrigger
})

export default connect(mapStateToProps, { fetchTriggers, 
                                          fetchCurrentTrigger,
                                          incrementCurrentTrigger,
                                          decrementCurrentTrigger })(Triggers);
