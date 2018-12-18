import React from "react"
import {connect} from "react-redux"

class Range extends React.Component{
    onChange(){
        this.props.onEstimation(this.valueInput.value)
        localStorage.setItem("rangeValue",this.valueInput.value)
    }
    render(){
        return(
            <div className = "col-md-6">
                <input type="range" 
                    max = "5000" min = "0" 
                    step = "100" className = "col-md-11"
                    value = {localStorage.getItem('rangeValue')}
                    ref = {(value)=>{this.valueInput = value}}
                    onChange = {this.onChange.bind(this)}/>
                <div className = "d-flex">
                    <p className = "col-md-2 h3">0</p>
                    <p className = "col-md-8"></p>
                    <p className = "col-md-2 h3">5000</p>
                </div>
            </div>
        )  
    }
}
export default connect(
    state =>  ({
        testStore:state
      }),
      dispatch => ({
        onEstimation:(count)=>{
          dispatch({
              type:"COUNTER",
              payload:count})
        }
      })
    )(Range);