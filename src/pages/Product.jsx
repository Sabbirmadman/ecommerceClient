import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
    border: 0.1px solid black;
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
    const locations = useLocation();
    const product_id = locations.pathname.split("/")[2];
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest(`/products/find/${product_id}`);
                setProduct(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        getProduct();
    }, [product_id]);

    const handleQuantity = (type) => {
        if (type === "add") {
            setQuantity(quantity + 1);
        } else if (type === "remove" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({
                ...product,
                quantity,
                color,
                size,
            })
        );
        // console.log({ ...product, quantity, color, size });
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.Desc}</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color &&
                                product.color.map((color) => (
                                    <FilterOption1
                                        color={color}
                                        key={color}
                                        onClick={() => setColor(color)}
                                    />
                                ))}

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
                            <FilterSelect
                                onChange={(e) => {
                                    setSize(e.target.value);
                                }}
                            >
                                {product.size?.map((size) => (
                                    <FilterOption2 key={size}>
                                        {size}
                                    </FilterOption2>
                                ))}
                            </FilterSelect>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmmountContainer>
                            <Remove onClick={() => handleQuantity("remove")} />
                            <Ammount>{quantity}</Ammount>
                            <Add onClick={() => handleQuantity("add")} />
                        </AmmountContainer>
                        <Button onClick={handleClick}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default Product;
