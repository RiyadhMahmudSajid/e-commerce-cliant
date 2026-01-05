import React from 'react';

import Hero from '../HomeComponents/Hero';
import Categories from '../HomeComponents/Categories';
import FeaturedProducts from '../HomeComponents/FeaturedProducts';


const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Categories></Categories>
           <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default HomePage;