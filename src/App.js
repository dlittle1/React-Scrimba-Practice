import React, {Component} from "react"
import Forms from "./Forms"
import Lifecycles from "./Lifecycles"
import ComponentDidUpdatePractice from "./ComponentDidUpdatePractice"
import ReactConditionalRender from "./ReactConditionalRender"
import ConditionalPractice from "./ConditionalPractice"
import ReactAPI from "./ReactAPI"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
               <h1>Forms</h1>
                <Forms />
                <h1>Lifecycles</h1>
                <Lifecycles />
                <h1>ComponentDidUpdatePractice</h1>
                <ComponentDidUpdatePractice />
                <h1>ReactConditionalRender</h1>
                <ReactConditionalRender/>
                <h1>ConditionalPractice</h1>
                <ConditionalPractice />
                <h1>ReactAPI</h1>
                <ReactAPI />
            </div>
        )
    }
}

export default App
