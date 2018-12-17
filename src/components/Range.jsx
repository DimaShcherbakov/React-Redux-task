import React from "react"

const Range = () => (
    <div className = "col-md-6">
        <input type="range" 
        max = "5000" min = "0" 
        range = "100" className = "col-md-11"/>
        <div className = "d-flex">
            <p className = "col-md-2 h3">0</p>
            <p className = "col-md-8"></p>
            <p className = "col-md-2 h3">5000</p>
        </div>
    </div>
    
)
export default Range;