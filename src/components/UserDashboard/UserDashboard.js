import React,{useState, useEffect} from 'react';
import {toast} from 'react-toastify';

const UserDashboard = ({setAuth}) => {
    const [name, setName] = useState("");

    async function getName(){
        try {
            const response = await fetch("http://localhost:8000/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            });
            const parseRes = await response.json();
            setName(parseRes);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getName()
    },[]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logged out succcessfully!");
    }

    return (
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={e => logout(e)} style={{"width": "100px", "height": "50px","backgroundColor": "white"}}>Logout</button>
        </div>
    )
}

export default UserDashboard
