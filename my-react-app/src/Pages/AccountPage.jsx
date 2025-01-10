import React from 'react';

const AccountPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove token on logout
        window.location.href = "/login"; // Redirect to login
    };

    return (
        <div>
            <h1>Welcome to Your Account</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AccountPage;