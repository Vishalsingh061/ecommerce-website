import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components"
import Footer from "../components/Footer";
import { Add, CurrencyRupee, Remove } from "@mui/icons-material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding:"10px" })}
  ${tablet({
    padding: '20px',
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;

  ${mobile({ fontSize:"18px",fontWeight:"300" })}
  
  ${tablet({
    fontSize: '22px',
    fontWeight: '400',
  })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled(RouterLink)`
  padding: 10px 30px;
  font-weight: 400;
  cursor: pointer;
  text-decoration:none;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display:"none" })}`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column" })}
  ${tablet({ flexDirection:"column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column" })}

`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 300px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding:"10px 0px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin:"5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom:"20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled(RouterLink)`
  display:flex;
  align-items:center;
  justify-content:space-around;
  width: auto;
  padding: 10px;
  background-color: black;
  color: white;
  text-decoration:none;
  font-weight: 400;
`;

const Cart = () => {
  const [productAmount, setProductAmount] = useState(1);

  const increaseProductAmount = () => {
    setProductAmount(productAmount + 1);
  }

  const decreaseProductAmount = () => {
    if (productAmount > 1) {
      setProductAmount(productAmount - 1);
    }
  }

  return (
    <Container>
    <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <TopButton to="/" style={{backgroundColor: 'white', color: 'black'}}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <Button to="/product" type="filled">CHECKOUT NOW</Button>

        </Top>
        <Bottom>
          <Info>
            <Product>
            <ProductDetails>
                <Image src="https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg" />
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 828362938</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> XL</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                <Add onClick={increaseProductAmount} />
                <ProductAmount>{productAmount}</ProductAmount>
                <Remove onClick={decreaseProductAmount} />
                </ProductAmountContainer>
                <ProductPrice><CurrencyRupee /> 3,999</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://media.istockphoto.com/id/468970936/photo/sneaker-on-white-background.jpg?s=612x612&w=0&k=20&c=mDL8nKSzHRgG5tDSFygNrD3tY6fDvOi145yLca7EYFU=" />
                <Details>
                  <ProductName><b>Product:</b> LOAFER SHOES</ProductName>
                  <ProductId><b>ID:</b> 828362938</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                <Add onClick={increaseProductAmount} />
                <ProductAmount>{productAmount}</ProductAmount>
                <Remove onClick={decreaseProductAmount} />
                </ProductAmountContainer>
                <ProductPrice><CurrencyRupee /> 99,999</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice><CurrencyRupee/> 35,465</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice><CurrencyRupee/> 29</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice><CurrencyRupee/> -299</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice><CurrencyRupee/> 999,999</SummaryItemPrice>
            </SummaryItem>
            <Button to="/product" type="filled">CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
