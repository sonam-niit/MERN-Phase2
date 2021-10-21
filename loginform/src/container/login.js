import React,{useState} from "react";
import {Button,FormGroup,FormControl, FormLabel} from "react-bootstrap";

import "./login.css";


export default function Login(props){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function validateForm(){
        return email.length>0 && password.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <FormLabel >Email</FormLabel>
                <FormControl autoFocus type="email" value={email} 
                onChange={e=>setEmail(e.target.value)} >
                </FormControl>
                </FormGroup>
                <FormGroup controlId="password">
                <FormLabel >Password</FormLabel >
                <FormControl autoFocus type="password" value={password} 
                onChange={e=>setPassword(e.target.value)} >
                </FormControl>
                </FormGroup>

                <Button block disabled={!validateForm()} type="submit">Login</Button>
            </form>
        </div>
    )
}