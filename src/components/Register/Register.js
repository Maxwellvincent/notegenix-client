import React, {useState} from 'react'
import './Register.css';

function Register() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    })

    const {email, password, name} = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log("this works")
        try {
            // const response = await fetch
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
