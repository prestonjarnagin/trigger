import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDate, incrementDate, decrementDate } from '../actions/calendarActions';
import leftButton from "../images/left.svg";
import rightButton from "../images/right.svg";

class Calendar extends Component {

  render() {

    const { unixDate, incrementDate, decrementDate } = this.props;

    return (
      <div>
        <section id="calendar-container">
          <img src={leftButton} 
               className="calendar-button" 
               alt="decrement date" 
               onClick={() => decrementDate(unixDate)}/>
          <div className="calendar-dates-container">
          <h2>{this.props.displayDate}</h2>
          </div>
          <img src={rightButton} 
               className="calendar-button" 
               alt="increment date" 
               onClick={() => incrementDate(unixDate)}/>
        </section>
        </div>
    )
  }
}

Calendar.propTypes = {
  unixDate: PropTypes.number,
  displayDate: PropTypes.string,
  changeDate: PropTypes.func.isRequired,
  incrementDate: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  unixDate: state.calendar.unixDate,
  displayDate: state.calendar.displayDate,
});

export default connect(mapStateToProps, { changeDate, 
                                          incrementDate,
                                          decrementDate })(Calendar);

