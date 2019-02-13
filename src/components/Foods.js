import React, { Component } from 'react'

 class Foods extends Component {
   constructor(props) {
     super(props);
     this.state = {
       foods: []
     }
   }
   componentWillMount() {
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({foods: data}))
   }

  render() {
    const foodItems = this.state.foods.map(food => (
      <div key={food.id}>
        <h3> {food.title} </h3>
        <h3> {food.body} </h3>
      </div>
    ))
    return(
      <div>
        <h1> Foods</h1>
        {foodItems}
      </div>
    )
  }
}

export default Foods;
