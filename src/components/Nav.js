import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDisplayAddForm, toggleDisplayAnalytics } from '../actions/navActions';
import homeButton from "../images/home.svg";
import analyticsButton from "../images/analytics.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormDisplayed: false
    }
    this.displayAddForm = this.displayAddForm.bind(this);
    this.addForm = React.createRef();
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
    // toggle Nav buttons
    this.props.toggleDisplayAnalytics()
  }



  render() {

    return (
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
             src={analyticsButton} 
             alt="analytics button"
             onClick={this.displayAnalytics} />
      </footer>
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
