import React from 'react';

const Aside = () => {
    return (
        <aside className='aside'>
            <h1>Dashboard</h1>

            <ul className="links">
                <li>
                    <span>Vadrs</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </li>
                <li>Reports</li>
            </ul>

            <button className='link'>Internal Notes</button>
        </aside>
    );
};

export default Aside;