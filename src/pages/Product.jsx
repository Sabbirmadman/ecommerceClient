import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        flexDirection: "column",
        padding: "10px",
    })};
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({
        height: "40vh",
    })};
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
        padding: "10px",
    })};
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({
        width: "100%",
    })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterOption1 = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSelect = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterOption2 = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        width: "100%",
    })};
`;
const AmmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Ammount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    fonty-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </ImageContainer>
                <InfoContainer>
                    <Title>KABAB</Title>
                    <Desc>Grilled chicken kabab for Sale</Desc>
                    <Price>100$</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Spice</FilterTitle>
                            <FilterOption1 color="black" />
                            <FilterOption1 color="darkblue" />
                            <FilterOption1 color="gray" />

                            {/* 
                            <FilterTitle>Spice</FilterTitle>
                            <FilterSelect>
                                <FilterOption1 color="black" />
                                <FilterOption1 color="darkblue" />
                                <FilterOption1 color="gray" />
                            </FilterSelect> */}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSelect>
                                <FilterOption2>Small</FilterOption2>
                                <FilterOption2>Medium</FilterOption2>
                                <FilterOption2>Large</FilterOption2>
                            </FilterSelect>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmmountContainer>
                            <Remove />
                            <Ammount>1</Ammount>
                            <Add />
                        </AmmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default Product;
