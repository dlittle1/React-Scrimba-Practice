import React from 'react'

class Lifecycles extends React.Component {
   constructor(){
      super()
   }

   // // being depricated
   // UNSAFE_componentWillReceiveProps(nextProps) {
   //    // every time component is recieving props -> will run
   //    // will run every single time mounted, and every time a parent component sends updated props
   //    // good for checking on changed props
   //
   //    // if (nextProps.whatever !== this.props.whatever){
   //    //    // do something important here
   //    // }
   // }
   //
   // shouldComponenetUpdate(nextProps, nextState) {
   //    // updating components may become expensive on runtime
   //    // can stop component from updating
   //    // return true if want it to update
   //    // return false if not
   // }
   //
   // componentWillUnmount() {
   //    // cleanup or teardown of clutter before component dissapears
   //    // (e.g. if you set up an event listener, remove it)
   // }
   //
   // // being depricated
   // componentWillMount(){
   //
   // }
   //
   // static getDerivedStateFromProps(props, state){
   //    // return the new, updated state based upon the props
   //    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
   // }
   //
   // getSnapshotBeforeUpdate() {
   //    // create a backup of the current way things are -> data (e.g. object with multiple points of data) -> snapshot
   //    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
   // }
   //
   // // IMPORTANT
   // componentDidMount() {
   //    // GET the data I need to correctly display
   // }

   render() {
      return (
         <div>

         </div>
      )
   }
}

export default Lifecycles
