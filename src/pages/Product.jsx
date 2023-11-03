import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, CurrencyRupee, Remove } from "@mui/icons-material";
import { useState } from "react";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding:50px;
display:flex;`;

const ImgContainer = styled.div`
flex:1;`;

const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;`;

const Title= styled.h1`
font-weight:200;`;

const Desc = styled.p`
margin:20px 0px;`;

const Price = styled.span`
font-weight:100;
font-size:40px;`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin: 30px 0px;`;

const Filter = styled.div`
display:flex;
align-items:center;`;

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;`;

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer;`;

const FilterSize = styled.select`
background-color:white;
border:none;
border:1px solid gray;
border-radius: 10%;
margin-left:10px;
padding:5px;`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ width: "100%"})},
${tablet({ width: "100%"})}`;


const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display : flex;
align-items:center;
justify-content:center;
margin:0px 5px;`;

const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`;

const Product = () => {
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
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/4624960/pexels-photo-4624960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci voluptatem, nihil blanditiis eum ducimus magnam unde, velit modi quibusdam, totam inventore autem nesciunt laudantium commodi eos temporibus ea possimus impedit! Corrupti, earum quibusdam itaque totam facilis veniam repellat, tempora adipisci quis obcaecati aperiam illum magni possimus? Exercitationem, facere! Dicta.

                </Desc>
                <Price><CurrencyRupee /> 9,999/-</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "Lightblue"/>
                        <FilterColor color = "gray"/>
                    </Filter>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <Remove onClick={decreaseProductAmount} />
                        <Amount>{productAmount}</Amount>
                        <Add onClick={increaseProductAmount} />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}


export default Product
