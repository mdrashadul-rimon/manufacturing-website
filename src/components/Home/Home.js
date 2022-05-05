import React from 'react';
import Banner from '../HomeSections/Banner/Banner';
import Inventories from '../HomeSections/Inventories/Inventories';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;