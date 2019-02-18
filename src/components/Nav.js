import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDisplayAddForm } from '../actions/foodFormActions';
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

  render() {

    return (
      <footer>
        <img className="home-button" src={homeButton} alt="home button" />
        <button className="add-button"
                ref={this.addForm}
                onClick={this.displayAddForm}>
          {this.props.displayAddForm ? "X" : "+"}
        </button>
        <img className="analytics-button" src={analyticsButton} alt="analytics button" />
      </footer>
    )
  }
}

Nav.propTypes = {
  toggleDisplayAddForm: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  displayAddForm: state.foodForm.display,
});

export default connect(mapStateToProps, { toggleDisplayAddForm })(Nav);
