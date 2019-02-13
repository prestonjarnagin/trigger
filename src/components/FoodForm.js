import React, { Component } from 'react'

 class FoodForm extends Component {
   constructor(props) {
     super(props);
     this.state = {
       title: '',
       body: ''
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }

   onSubmit(event){
     event.preventDefault();
     const post = {
       title: this.state.title,
       body: this.state.body
     }
     fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(post)
     })
     .then(response => response.json())
     .then(data => console.log(data));
   }
  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label> <br/>
            <input type="text" name="title" value={this.state.title}
            onChange = {this.onChange}
            />
          </div>
          <div>
            <label>Body: </label> <br/>
            <textarea name="body" value={this.state.body}
            onChange = {this.onChange}
             />
          </div>
          <br/>
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default FoodForm;
