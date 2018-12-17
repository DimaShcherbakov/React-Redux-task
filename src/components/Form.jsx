import React from "react"
import {connect} from "react-redux"

class Form extends React.Component{
    addElement(){
        if(this.textInput.value !==""){
            this.props.onAddText(this.textInput.value);
            this.textInput.value = "";
        }else{
            console.log("Enter the Text")
        }
    }
    render(){
        return(
            <div className = "col-md-6">
                <input type="text" placeholder ="Enter text" 
                    className = "form-control col-md-8"
                    ref = {(input) => {this.textInput = input}}/>
                <button className = "btn btn-success" 
                    id = "AddText" 
                    onClick = {this.addElement.bind(this)}>
                    Add text
                </button>
            </div>
        )
    }
}
export default connect(
    state =>  ({
      testStore:state
    }),
    dispatch => ({
      onAddText:(text)=>{
        dispatch({
            type:"ADD_TEXT",
            payload:text})
      }
    })
  )(Form);