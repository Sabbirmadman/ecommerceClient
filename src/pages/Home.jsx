//rafce
import React from "react";
import Announcement from "../components/Announcement";
import Cataories from "../components/Cataories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

import styled from "styled-components";

const Title = styled.h1`
    font-weight: 300;
    padding-left: 20px;
    padding-top: 20px;
`;

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Cataories />
            <Title>Products</Title>
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;
