import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    ${
        "" /* ${mobile({
        padding: "10px",
        marginTop: "20px",
    })}; */
    }
`;

const Announcement = () => {
    return <Container>Super Deal! Get 50% off on all products.</Container>;
};

export default Announcement;
