import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDisplayAddForm, toggleDisplayAnalytics } from '../actions/navActions';
import helpButton from "../images/help.svg";
import homeButton from "../images/home.svg";
import analyticsButton from "../images/analytics.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpDisplayed: false,
    }
    this.displayAddForm = this.displayAddForm.bind(this);
    this.displayHelp = this.displayHelp.bind(this);
    this.addForm = React.createRef();
    this.homeHelp = React.createRef();
    this.analyticsHelp = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.displayAddForm !== this.props.displayAddForm) {
      this.addFormBackground();
    }
  }

  displayAddForm = () => {
    this.addFormBackground();
    this.props.toggleDisplayAddForm()
  }

  addFormBackground = () => {
    let button = this.addForm.current

    this.props.displayAddForm ?
      button.style = "background-color: #B37C57" :
      button.style = "background-color: red";
  }

  displayAnalytics = () => {
    if(this.props.displayAnalytics) {
      this.addForm.current.style.visibility = "visible";
    } else {
      this.addForm.current.style.visibility = "hidden";
    }
    this.analyticsHelp.current.style.display = "none";
    this.homeHelp.current.style.display = "none";
    this.setState({ helpDisplayed: false })
    this.props.toggleDisplayAnalytics()
  }

  displayHelp() {
    if(this.props.displayAnalytics && !this.state.helpDisplayed) {
      this.analyticsHelp.current.style.display = "block";
    } else if(this.props.displayAnalytics && this.state.helpDisplayed) {
      this.analyticsHelp.current.style.display = "none";
    } else if(!this.props.displayAnalytics && !this.state.helpDisplayed) {
      this.homeHelp.current.style.display = "block";
    } else if (!this.props.displayAnalytics && this.state.helpDisplayed) {
      this.homeHelp.current.style.display = "none";
    }
    this.setState({ helpDisplayed: !this.state.helpDisplayed })
  }

  render() {

    return (
      <div>
        <footer>
          <img className="home-button"
            src={this.props.displayAnalytics ?
              homeButton :
              analyticsButton}
            alt="toggle home and analytics button"
            onClick={this.displayAnalytics} />
          <button className="add-button"
            ref={this.addForm}
            onClick={this.displayAddForm}>
            {this.props.displayAddForm ? "x" : "+"}
          </button>
          <img className="analytics-button"
            src={helpButton}
            alt="help button"
            onClick={this.displayHelp} />
        </footer>
        <div id="home-help-container" 
             className="help-container"
             ref={this.homeHelp} >
          <h3>Foods and Reactions</h3>
          <p>This page displays foods and reactions that were added for the selected date.
          You can change the selected date by clicking the arrow buttons above or by clicking on the previous or next date, indicated by an underline.</p>
          <h4>Updating and Deleting</h4>
          <p>You can delete any food (indicated by gray background) or reaction (indicated by red background) by clicking the X button next to the name of the food or reaction.
          The name and time for a food or reaction can be updated by clicking the pencil icon.</p>
          <h4>Adding Foods and Reactions</h4>
          <p>Click the green + button below to add a food or reaction.  Select Food or Reaction, enter the name and time, and click Submit.  
          A message should appear indicating that your food or reaction was saved.  Click the red X button to cancel the form.</p>
          <p>Click the graph button below to see detailed information about your added reactions.</p>
        </div>
        <div id="analytics-help-container" 
             className="help-container"
             ref={this.analyticsHelp} >
          <h3>Reactions and Potential Triggers</h3>
          <p>This screen displays details about reactions that have been added.
          If you have added more than one reaction, you can view additional reactions by clicking the arrows on each side of the name of the condition above.
          The following provides a brief description of the fields on this page.</p>
          <h4>Last Week</h4>
          <p>The number of occurrences in the past 7 days.</p>
          <h4>Last Two Weeks</h4>
          <p>The number of occurrences in the past 14 days.</p>
          <h4>This Month</h4>
          <p>The number of occurrences in the past 30 days.</p>
          <h4>Last Month</h4>
          <p>The number of occurrences in the past 31-60 days.</p>
          <h4>Potential Triggers</h4>
          <p>A potential trigger is a food that was added within the 24-hour period preceding a reaction.  
          These foods are sorted by frequency.  
          Frequency is calculated based on the number of times the food preceded the reaction, divided by the number of times the food was eaten overall.</p>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  toggleDisplayAddForm: PropTypes.func.isRequired,
  toggleDisplayAnalytics: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  displayAddForm: state.nav.displayAddForm,
  displayAnalytics: state.nav.displayAnalytics,
});

export default connect(mapStateToProps, { toggleDisplayAddForm, toggleDisplayAnalytics })(Nav);
