import React from "react";
import { PropTypes } from "prop-types";

// const TestComponent =(props) =>{
//     return <p>Welcome {props.name} From Function</p>
// }

class TestComponent extends React.Component{
    render(){
        return (<div>
                <p style={{color:"green"},{backgroundColor:"yellow"}}>Welcome {this.props.name} </p>
                <p>Age: {this.props.age}</p>
                </div>);
    }
}
TestComponent.prototypes={
    name:PropTypes.string,
    age:PropTypes.number
}
export default TestComponent;