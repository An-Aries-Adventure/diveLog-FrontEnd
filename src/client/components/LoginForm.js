import React from 'react';
import axios from 'axios';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            email: "",
            password: ""
        };
        };

        handleChange(event){
            console.log('change event', event.target.name);
            this.setState({
            [event.target.name]: event.target.value   
            });
        }
        handleSubmit(event){
           
            event.preventDefault();
            const {email, password} = this.state;
            console.log("state", this.state);
            axios.post('http://localhost:5000/api/auth/',
                {
                        email: email,
                        password: password
                        
                }

            )
            .then(response => {
                console.log(response);
                this.props.setCookieApp(response.data.token);
                this.props.handleLogin(event)

                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                  }
            })
            .catch(error =>{
                console.log("Oops! something went wrong, check your credentials and try again.", error);

            });

        };

    render() {
        return (
            <div className = "loginWrap">
                <div className = "input">
                <form className = "input" onSubmit = {() => this.handleSubmit(event)}>
                    <div>
                        <h5>Registered Diver Login</h5>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Enter your email" value= {this.state.email} onChange={(event) => this.handleChange(event)} required/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Enter your Access Code" value= {this.state.password} onChange={(event) => this.handleChange(event)} required/>
                    </div>
                    <div>
                        <div>
                            <span>
                             <button className ="submit" type = "submit">Dive Dive Dive</button>
                            </span>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    };

};

