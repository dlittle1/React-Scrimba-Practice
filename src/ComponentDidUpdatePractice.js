import React from 'react'
import randomcolor from "randomcolor"

class ComponentDidUpdatePractice extends React.Component {
   constructor(){
      super()
      this.state = {
         count: 0,
         color: ""
      }
      this.increment = this.increment.bind(this)
   }

   increment() {
      this.setState(prevState => {
         return {
            count: prevState.count + 1
         }
      })
   }
   componentDidMount(){
      console.log("Mounted")
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count){
         const newColor = randomcolor()
         this.setState({color: newColor})
      }
   }

   render() {
      return (
         <div>
            <h1 style={{color: this.state.color}}>{this.state.count}</h1>
            <button onClick={this.increment}>Increment!</button>
         </div>
      )
   }
}

export default ComponentDidUpdatePractice
