import React, {Component} from "react"

class Forms extends Component {
   constructor() {
      super()
      this.state = {
         firstName: "",
         lastName: "",
         isFriendly: false,
         gender: "male"
      }
      this.handleChange = this.handleChange.bind(this)
   }
   handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({[name]: checked}) : this.setState({ [name]: value })
   }
   render() {
      return (
         <form>
            <input
               type="text"
               name="firstName"
               value={this.state.value}
               placeholder="First Name"
               onChange={this.handleChange}
            />
            <br />
            <input
               type="text"
               name="lastName"
               value={this.lastName}
               placeholder="Last Name"
               onChange={this.handleChange}
            />
            <br />
            <textarea value={"Some default value"}/>
            <br />
            <label>
               <input
                  type="checkbox"
                  name="isFriendly"
                  checked={this.state.isFriendly}
                  onChange={this.handleChange}
               /> Is friendly?
            </label>
            <br />
            <label>
               <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.handleChange}
               /> Male
            </label>
            <label>
               <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleChange}
               /> Female
            </label>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h2>you are a {this.state.gender}</h2>
         </form>
      )
   }
}

export default Forms
