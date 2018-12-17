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
                    <Counter value = {this.props.counter}/>
                </div>
            </div> 
        );
    }
}

export default connect(
    state =>({}),
    dispatch =>({})
)(Task2);