import React from 'react';

const Resource = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Resource Page</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Resource;