import { Email, Facebook, GitHub, Instagram, LinkedIn, LocalPhone, MapsHomeWork } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
display:flex;
${mobile({ flexDirection: "column" })}`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;`;

const Logo = styled.h1``;

const Desc = styled.p`
margin:20px 0px;`;

const SocialContainer = styled.h1`
display:flex;`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;`;

const Center = styled.div`
flex:1;
padding:20px;
${mobile({ display: "none" })}`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`;

const Right = styled.div`
flex:1;
padding:20px
${mobile({ backgroundColor: "#fff8f8" })}`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TOTALITY CORP.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nulla maxime officiis praesentium numquam ea provident perspiciatis suscipit, recusandae consequatur natus quisquam fugit, repellat quidem, cum tempore expedita molestiae nihil!</Desc>
        <SocialContainer>
            <SocialIcon color = "0a66c2">
                <LinkedIn />
            </SocialIcon>

            <SocialIcon color = "14171a">
                <GitHub />
            </SocialIcon>

            <SocialIcon color = "c32aa3">
                <Instagram />
            </SocialIcon>

            <SocialIcon color = "1877f2">
                <Facebook />
            </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>

        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>My Orders</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <MapsHomeWork style={{marginRight:"10px"}}/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ContactItem>
        <ContactItem>
            <LocalPhone style={{marginRight:"10px"}}/>
            +91-1234567890
        </ContactItem>
        <ContactItem>
            <Email style={{marginRight:"10px"}}/>
            Contact@TotalityCorp.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
