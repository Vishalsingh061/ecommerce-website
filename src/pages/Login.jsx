import styled from "styled-components"
import Slide1 from '../img/Slide1Logo.png';
import { Link as RouterLink } from "react-router-dom";
import { mobile, tablet } from "../responsive";


const Container = styled.div`
width:100vw;
height:100vh;
background:  url(${Slide1});
background-color:#07dbff;
background-repeat: no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = styled.div`
width:25%;
padding:30px;
background-color:rgba(255, 255, 255, 0.3);
${mobile({ width: "60%"})}
${tablet({
  width: '80%',
  padding: '20px',
})}
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
${tablet({
  display:"flex",
  fontSize: '30px',
  fontWeight: '400',
  alignItems: 'center',
  justifyContent: 'center'
})}`;

const Form = styled.form`
display:flex;
flex-direction:column;
${tablet({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
})}`;

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;
${tablet({
  margin: '10px',
  minWidth: '60%',
  flexBasis: '60%',
 })}`;

const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color:#3fc5f0;
color:white;
cursor:pointer;
margin-bottom:10px;`;

const Link = styled(RouterLink)`
  margin: 5px 0px;
  font-size:12px;
  text-decoration:underline;
  cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder = "username"/>
            <Input placeholder = "password"/>
            <Button>LOGIN</Button>
            <Link to="/register">FORGOT PASSWORD?</Link>
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
