import React from "react"
import {connect} from "react-redux"

class Counter extends React.Component{

    render(){
        return(
            <div className = "col-md-6 text-left ">
                <h2 className = "h2" >Counter:</h2>
                <p className = "col-md-11 counter h3 text-center">
                    {this.props.value}
                </p>
            </div>
        )
    }
}
export default connect(
    state =>({}),
    dispatch =>({})
)(Counter);