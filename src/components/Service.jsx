import React, { useState } from 'react';
import styled from 'styled-components';
import How from './../img/woman.jpg';
import Play from './../img/woman.jpg';
import Videofilm from './../img/video.mp4';
import MiniCard from './MiniCard';

const Container = styled.div`
display:flex;
height:100%;

@media only screen and (max-width:480px){
    flex-direction:column;
}
`
const Left = styled.div`
width:50%;
position:relative;

@media only screen and (max-width:480px){
    display:none;
}
`
const Image = styled.img`
display:${(props) => props.open && "none"};
height:100%;
width:50%;
margin-left:100px;
`
const Video = styled.video`
display:${(props) => !props.open && "none"};
height:300px;
position:abslute;
top:0;
bottom:0;
right:0;
margin:auto;

@media only screen and (max-width:480px){
    width:100%;
}
`

const Right = styled.div`
width:50%;

@media only screen and (max-width:480px){
    width:100%;
}
`
const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction:column;

@media only screen and (max-width:480px){
    padding:20px;
    
}
`
const Title = styled.h1``
const Desc = styled.p`
font-size:20px;
margin-top:20px;
color:#555;
`
const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
`
const Button = styled.button`
width:180px;
border:none;
border-radius:10px;
background-color:darkblue;
color:white;
font-size:20px;
padding:15px;
margin-top:50px;
cursor:pointer;
display:flex;
align-items:center;
`
const Icon = styled.img`
width:20px;
margin-right:10px;
`
const Modal = styled.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.5);
`
const CloseButton = styled.button`
position:absolute;
backgroound-color:white;
padding:5px;
border:none;
border-radius:5px;
right:5px;
top:30%;
`

function Service() {
    const [open, setOpen] = useState(false)
    const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video open={open} autoPlay loop controls src={Videofilm} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur, soluta maiores in totam a harum, adipisci corporis recusandae modi ducimus laudantium accusantium minima veniam tempore iste. Veritatis, asperiores eum.</Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={()=>setOpen(true)}>
                        <Icon src={Play} />
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video open={open} autoPlay loop controls src={Videofilm} />
                    <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    );
}

export default Service;
