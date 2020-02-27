import React from 'react'

export default function Conditional(props){
   return (
      <div>
         {props.isLoading ? <h1>Loading...</h1> : <h1>Done Rendering</h1>}
      </div>
   )
}
