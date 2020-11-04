import React from 'react'

function UserDashboard({setAuth}) {
    return (
        <div>
            <h1>USER DASHBOARD</h1>
            <button onClick={() => setAuth(false)} style={{"width": "100px", "height": "50px"}}>Logout</button>
        </div>
    )
}

export default UserDashboard
