import React from 'react';
import Banner from '../HomeSections/Banner/Banner';
import Contact from '../HomeSections/Contact/Contact';
import Inventories from '../HomeSections/Inventories/Inventories';
import Question from '../HomeSections/Question/Question';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
            <Question></Question>
            <Contact></Contact>
        </div>
    );
};

export default Home;