import React from "react";
import TestComponent from "./testFunction";

class Profile extends React.Component{
    
    render(){
        const  name="sonam soni";
        return (
                <TestComponent name="sonam soni" 
                age="78"></TestComponent>
        );
    }
}

export default Profile;