import React from 'react'
import { Button } from 'react-bootstrap'
import './profile.css'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate=useNavigate();
    const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    if (sessionStorage.length === 0) {
    navigate('/', { replace: true });
    }
    };

  return (
    <div>
        <Button type="submit" onClick={handleLogout} className="Logout-button">Logout</Button>
    </div>
  )
}

export default Profile