import { styled } from "styled-components";
import bgimg from "../assets/oceano.jpg"
import FormSignup from "../components/FormSignup";

const Container = styled.div`
    background-image: url(${bgimg});
    background-size: cover;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: " ";
        background-color: #0a3d62;
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        transform: skew(15deg) translateX(50%);
        box-shadow: -2px -2px 5px #000000;
    }

    > * {
        position: relative;
        z-index: 9;
    }
`

export default () => <>
    <Container>
        <FormSignup />
    </Container>
</>