import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className="left">
                <span className='circle'></span>
                <p className='text'><span>inturt</span> <span>dataprivacy</span></p>
            </div>

            <div className="right">
                <ion-icon name="person-circle-outline"></ion-icon>
                <span>Garg, Adi</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
        </header>
    );
};

export default Header;