import React from 'react';
import Table from './Table';

const Main = () => {
    return (
        <div className='main'>
            <div className="topbar">
                <div className="left">
                    <div className="order">
                        <span>Work Order ID</span>
                        <span>1233232333XXXXXXXX</span>
                    </div>
                </div>

                <div className="right">
                    <div className="date">
                        <span>Request Data</span>
                        <span>05/07/2022</span>
                    </div>

                    <div className="type">
                        <span>Request Type</span>
                        <span>Access</span>
                    </div>
                </div>
            </div>

            <Table />
        </div>
    );
};

export default Main;