import React from "react"
import {connect} from "react-redux"


class Input extends React.Component{
    deleteElement(){
        this.props.onDeleteText(this.props.value);
    }
    render(){
        return (
        <div className="col-md-11 row result align-items-center ">
            <p className = "">{this.props.value}</p>
            <button type="submit" 
                className = "btn delete"
                onClick = {this.deleteElement.bind(this)}
                >
                Delete text
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
        onDeleteText:(text)=>{
          dispatch({
              type:"DELETE_TEXT",
              payload:text})
        }
      })
    )(Input);