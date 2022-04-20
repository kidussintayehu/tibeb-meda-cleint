import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
    width:100%;
    height:93.5vh;
    display:flex;
    positon:relative;
    overflow:hidden;
    ${mobile({ "display": "none" })};
`
const Arrow = styled.div`
    width: 60px;
    height: 60px;
    background-color: #fff7f7;
    border-radius : 50%;
    align-items: center;
    justify-content: center;
    display:flex;
    position:absolute;
    top:0 ;
    bottom:0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin:auto;
    cursor : pointer;
    z-index:2;
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
`
const ImgContainer = styled.div`
    flex:1;
    height:100%; 
`

const InfoContainer = styled.div`
    flex:1;

`
const Title = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin:50px 0px;
    font-size : 20px;
    font-weight :500;
    latter-spacing : 3px;
`

const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:#${props => props.background}
`
const Image = styled.img`
    height:95%;
`


function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={ () =>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Link to="/products">
                            <Button>SHOW NOW</Button>
                            
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={ () => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider; 
