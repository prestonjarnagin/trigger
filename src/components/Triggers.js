import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as dateHelper from '../helpers/date';
import { fetchTrigger } from '../actions/triggerActions';

class Triggers extends Component {

  componentDidMount() {
    this.props.fetchTrigger();
  }
  render () {
    return (

    <div className="trigger-name">
      <h3>{this.props.name}</h3>
    </div>

     const triggerOccurrences = this.props.occurrences.map(occurrences => {
       <div className="occurrences">

       </div>
     })

     // <div className="potencial-triggers">
     // </div>
    )
  }
}

// Foods.propTypes = {
//   fetchTrigger: PropTypes.func.isRequired,
//   foods: PropTypes.array.isRequired,
//   name: PropTypes.string.isRequired,
//   occurrences: PropTypes.object.isRequired
// }
//
// const mapStateToProps = state => {
//   foods: state.foods
// }

export default connect(undefined, { fetchTrigger })(Triggers);
