import React from "react"
import Form from "./Form.jsx"
import Textfield from "./Textfield.jsx"
import {connect} from "react-redux"

class Task1 extends React.Component{
    render(){
        return(
            <div>
                <h1 className = "text-left h1">Task #1</h1>
                <div className="row">
                    <Form/>
                    <Textfield/>
                </div>   
            </div>
        );
    }
}

export default Task1;