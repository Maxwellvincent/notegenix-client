import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import {toast} from 'react-toastify';


const Login = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        email: "",
        user_password: ""
    });

    const {email, user_password} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        try {

            const body = {email, user_password};

            // Post request to server to verify that login info was correct, if correct generate token and take user to dashboard
            const response = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();

            if(parseRes.token) {
                localStorage.setItem("token", parseRes.token);

                setAuth(true);
                toast.success("Login Successfully!");
            }else {
                setAuth(false);
                toast.error(parseRes);
            }
           

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <section className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Login</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email"  
                                id="email"
                                value={email}
                                style={{"color":"white"}}
                                onChange={e => onChange(e)}    
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="user_password"  
                                id="user_password"
                                value={user_password}
                                style={{"color":"white"}}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in"
                                style={{"color": "white", "borderColor": "white"}}
                                onClick={onSubmitLogin}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <Link exact to='/register'>
                                <p 
                                    // onClick={() => onRouteChange('register')}
                                    className="f6 link dim black db pointer"
                                    >
                                        Register
                                </p>
                            </Link> 
                        </div>
                </section>
            </main>
        </article>
    )
}

export default Login

