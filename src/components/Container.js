import React from 'react';
import Aside from './Aside';
import Main from './Main';

const Container = () => {
    return (
        <main className='container'>
            <Aside />
            <Main />
        </main>
    );
};

export default Container;