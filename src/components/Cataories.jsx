import React from "react";
import styled from "styled-components";
import { catagories } from "../data";

import CatagoryItem from "./CatagoryItem";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

const Cataories = () => {
    return (
        <Container>
            {catagories.map((item) => (
                <CatagoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Cataories;
