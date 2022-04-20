// import { Slider } from '@material-ui/core';
import Slider from '../components/Slider';
import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Catagories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
