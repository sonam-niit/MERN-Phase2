import React from "react";

const validEmailRegex=RegExp(/\S+@\S+\.\S+/);
const validateForm=(errors)=>{
    let valid=true;
    Object.values(errors).forEach((val)=>val.length>0 && (valid=false));
    return valid;
}
export default class RegisterClient extends React.Component{
    constructor(){
        super();
        this.state={
            clientName:null,
            email:null,
            password:null,
            errors:{
                clientName:"",
                email:"",
                password:""
            }
        }
    }

    handleChange=(event)=>{
        event.preventDefault();
        const{name,value}=event.target;
        let errors=this.state.errors;

        switch(name){
            case "clientName": errors.clientName=
            value.length<5 ? "Full Name Must be 5 characters long":"";
            break;
            case "email": errors.email=validEmailRegex.test(value)?"":"Email is not valid";
            break;
            case "password":errors.password=
            value.length<8?"Password must be 8 characters long":"";
            break;
            default: break;
        }

        this.setState({errors,[name]:value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        if(validateForm(this.state.errors)){
            console.info("Valid Form");
            alert('Registration done successfully');

            this.setState({
                clientName:"",
                email:"",
                password:"",
                errors:{
                    clientName:"",
                    email:"",
                    password:"",
                }
            })
            document.getElementById("registration-form").reset();
        }
        else{
            console.error("Invalid-form");
            alert("Registraion Failed");
        }
    }

    render(){
        const{errors}=this.state;
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h2>Client Account</h2>
                    <form onSubmit={this.handleSubmit.bind(this)} id="registration-form">
                        <div className="fullName">
                            <label>Full Name</label>
                            <input type="text" name="clientName"
                            onChange={this.handleChange.bind(this)}/>

                            {errors.clientName.length>0 && (<span>{errors.clientName}</span>)}
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email"
                            onChange={this.handleChange.bind(this)}/>

                            {errors.email.length>0 && (<span>{errors.email}</span>)}
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password"
                            onChange={this.handleChange.bind(this)}/>

                            {errors.password.length>0 && (<span>{errors.password}</span>)}
                        </div>
                        <div>
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}