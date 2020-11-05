import React, {useState} from 'react'
import './Register.css';
import {toast} from 'react-toastify';


function Register({setAuth}) {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    })

    const {name, email, password} = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {email, user_password : password, user_name: name}
            const response = await fetch("http://localhost:8000/auth/register",{
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            if(parseRes.token){
                localStorage.setItem("token", parseRes.token); //set token to local storage
                setAuth(true);
                // console.log(parseRes); this is the token
                toast.success("Registered Successfully!");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
            

             
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <section className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                value={name}
                                placeholder="name"
                                style={{"color": "black", "background-color": "white"}}
                                onChange={e => onChange(e)}    
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email"  
                                id="email"
                                value={email}
                                placeholder="email@email.com"
                                style={{"color": "black", "background-color": "white"}}
                                onChange={e => onChange(e)}     
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                value={password}
                                placeholder="password"
                                style={{"color": "black", "background-color": "white"}}
                                onChange={e => onChange(e)} 
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Register"
                                style={{"border-color": "white", "color": "white"}}
                                onClick={onSubmitForm}
                            />
                        </div>
                        {/* <div className="lh-copy mt3">
                            <p 
                                onClick={onRouteChange('register')}
                                className="f6 link dim black db"
                                > 
                                Register</p>
                        </div> */}
                </section>
            </main>
        </article>
    )
}

export default Register
