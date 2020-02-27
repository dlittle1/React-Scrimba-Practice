import React from 'react'

class ConditionalPractice extends React.Component {
   constructor(){
      super()

      this.state = {
         isLoggedIn: false
      }

      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(){
      this.setState(prevState => {
         return{
            isLoggedIn: !prevState.isLoggedIn
         }
      })
   }

   render() {
      return (
         <div>
            <button onClick={this.handleChange}>{this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
         </div>
      )
   }
}

export default ConditionalPractice
