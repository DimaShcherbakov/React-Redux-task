import React from "react"
import {connect} from "react-redux"

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this)
        this.state = {
            time:null
        }
    }
    startTimer(){
        let time = 0;
        setInterval(()=>{
            time = this.state.time + parseInt(this.props.testStore.counter);
            this.setState({
                time:time,
            })
        },1000);
        return this.setState({time:time})
    }
    componentDidMount(){
        this.timer = this.startTimer()
    }
    render(){
        return(
            <div className = "col-md-6 text-left ">
                <h2 className = "h2" >Counter:</h2>
                <p className = "col-md-11 counter h3 text-center">
                    {this.state.time}
                </p>
            </div>
        )
    }
}
export default connect(
    state =>({
        testStore:state
    }),
    dispatch =>({})
)(Counter);