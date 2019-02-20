import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as numberHelper from '../helpers/number';
import { fetchTrigger } from '../actions/triggerActions';

class Triggers extends Component {

  componentDidMount() {
    this.props.fetchTrigger();
  }
  render () {
    const triggers = this.props.foods.map(food => (
      <div key={food.id} className="potencial-triggers">
        <h5 className="card-name">{food.name}</h5>
        <h5 className="card-name">{numberHelper.toPercentage(food.frequency)}</h5>
      </div>
    ))
    const occurences = () => (
      <div className="occurences">
        <h5 id="occurences-title">Last week</h5>
        <h5 id="occurences-value">{this.props.occurences.last_7_days}</h5>
        <h5 id="occurences-title">Last two weeks</h5>
        <h5 id="occurences-value">{this.props.occurences.last_15_days}</h5>
        <h5 id="occurences-title"> This month</h5>
        <h5 id="occurences-value">{this.props.occurences.last_30_days}</h5>
        <h5 id="occurences-title">Last month</h5>
        <h5 id="occurences-value">{this.props.last_31_to_60_days}</h5>
      </div>
  )
  const triggerName = () => (
    <div className="trigger-name">
      <h3>{this.props.name}</h3>
    </div>
    )

    return (
      <div>
        <div className="trigger-name-container"> {triggerName}</div>
        <div className="potencial-triggers-container">{triggers}</div>
        <div className="occurences-container">{occurences}</div>
      </div>
    )
  }
}

Triggers.propTypes = {
  fetchTrigger: PropTypes.func.isRequired,
  foods: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  occurences: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  foods: state.trigger.items,
  name: state.trigger.name,
  occurences: state.trigger.occurences,
})

export default connect(mapStateToProps, { fetchTrigger })(Triggers);
