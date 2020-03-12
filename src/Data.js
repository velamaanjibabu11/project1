import React from 'react'


class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render(){
        return(
            <div>
    <h2>{this.state.count}</h2>
    <button onClick={this.countIncrement}>clickme</button>
    <button onClick={this.countDecrement}>clickme</button>
 
    </div>
        )
    }
countIncrement=()=>{
    this.setState({count:this.state.count+1})
}
countDecrement=()=>{
    this.setState({count:this.state.count-1})
}


}
export default Data;