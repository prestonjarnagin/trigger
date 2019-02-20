import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDate, incrementDate, decrementDate } from '../actions/calendarActions';
import * as dateHelper from '../helpers/date'
import leftButton from "../images/left.svg";
import rightButton from "../images/right.svg";

class Calendar extends Component {

  render() {

    const { unixDate, incrementDate, decrementDate } = this.props;
    const selectedDate = dateHelper.unixToDateArray(this.props.unixDate)

    return (
      <div>
        <section id="calendar-container">
          <img src={leftButton} 
               className="calendar-button" 
               alt="decrement date" 
               onClick={() => decrementDate(unixDate)}/>
          <div className="calendar-dates-container">
            <div className="date-container" 
                 onClick={() => decrementDate(unixDate)}>
              <h2>{selectedDate.prevDate.date}</h2>
              <h4>{selectedDate.prevDate.day}</h4>
            </div>
            <div className="date-container" id="selected-date-container">
              <h2>{selectedDate.currDate.date}</h2>
              <h4>{selectedDate.currDate.day}</h4>
            </div>
            <div className="date-container"
                 onClick={() => incrementDate(unixDate)}>
              <h2>{selectedDate.nextDate.date}</h2>
              <h4>{selectedDate.nextDate.day}</h4>
            </div>
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
  changeDate: PropTypes.func.isRequired,
  incrementDate: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  unixDate: state.calendar.unixDate,
});

export default connect(mapStateToProps, { changeDate, 
                                          incrementDate,
                                          decrementDate })(Calendar);

