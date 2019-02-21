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
          <h2>Foods and Reactions</h2>
          <p>Here is some information you might find useful.</p>
          <h4>What is food?</h4>
          <p>Food is...</p>
          <h4>What is a reaction?</h4>
          <p>A reaction is...</p>
          <h4>What are all these buttons?</h4>
        </div>
        <div id="analytics-help-container" 
             className="help-container"
             ref={this.analyticsHelp} >
          <h2>Reactions and Potential Triggers</h2>
          <p>Here is some information you might find useful.</p>
          <h4>What are occurrences?</h4>
          <p>An occurrence is...</p>
          <h4>What are potential triggers?</h4>
          <p>A potential trigger is...</p>
          <h4>What are all these buttons?</h4>
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
