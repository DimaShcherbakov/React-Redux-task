import React from "react"
import Input from "./Input.jsx"
import {connect} from "react-redux"

let data_array = [];
class Textfield extends React.Component{
    render(){
        data_array = this.props.testStore;
        console.log(data_array)
        return (
            <div className = "col-md-6 text-left">
                <h2 className="h2">List:</h2>
                {data_array.map((element)=>(
                    <Input value = {element}/>
                ))}
            </div> 
        );
    }
}
export default connect(
    state =>  ({
        testStore:state
      }),
      dispatch => ({}
      )
    )(Textfield);
