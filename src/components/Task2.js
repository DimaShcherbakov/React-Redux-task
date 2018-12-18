import React from "react"
import Counter from "./Counter.jsx"
import Range from "./Range.jsx"
import {connect} from "react-redux"
class Task2 extends React.Component{
    render(){
        return(
            <div >
                <h1  className = "text-left h1">Task #2</h1>
                <div className = "row">
                    <Range/>
                    <Counter />
                </div>
            </div> 
        );
    }
}

export default connect(
    state =>({
        testStore:state
    }),
    dispatch =>({})
)(Task2);