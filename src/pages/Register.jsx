import styled from "styled-components"
import Slide1 from '../img/Slide1Logo.png'
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
width:100vw;
height:100vh;
background:  url(${Slide1});
background-color:#4392ff;
background-repeat: no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = styled.div`
width:40%;
padding:30px;
background-color:rgba(255, 255, 255, 0.3);
${mobile({ height:"60vh", width:"60%"})}
${tablet({
  width: '60%',
  padding: '20px',
})}
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
${mobile({ fontSize:"18px",fontWeight:"300" })}
${tablet({
  fontSize: '22px',
  fontWeight: '400',
})}`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
${mobile({ display: "flex", justifyContent:"Center", alignItems:"center" })}
${tablet({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})}
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
${mobile({ margin:"5px 0px" })}
${tablet({
  margin: '10px',
  minWidth: '45%',
  flexBasis: '45%',
 })}`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
${mobile({ margin:"5px 0px", fontSize:"8px" })}`;

const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color:#3fc5f0;
color:white;
cursor:pointer;`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder = "name"/>
            <Input placeholder = "last name"/>
            <Input placeholder = "username"/>
            <Input placeholder = "email"/>
            <Input placeholder = "password"/>
            <Input placeholder = "confirm password"/>
            <Agreement>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in facilis magnam delectus repudiandae culpa quis, optio harum reiciendis numquam?
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
