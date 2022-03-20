import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        marginRight: "0px",
    })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
        margin: "10px 0px",
    })};
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Foods</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter</FilterText>
                    <Select>
                        <Option disabled selected>
                            Fruits
                        </Option>
                        <Option>Banana shake</Option>
                        <Option>Apple Juice</Option>
                        <Option>Orange Juice</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Vegetables
                        </Option>
                        <Option>Salad</Option>
                        <Option>Tomato Sauce</Option>
                        <Option>Cabbage</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Product</FilterText>
                    <Select>
                        <Option disabled selected>
                            Price
                        </Option>
                        <Option>Low to High</Option>
                        <Option>High to Low</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default ProductList;
