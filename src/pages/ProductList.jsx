import styled from "styled-components"
import { useState } from "react";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";


const Container = styled.div``;

const Title = styled.h1`
margin:20px;`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;`;

const Filter = styled.div`
margin:20px;`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`;

const Select = styled.select`
padding:10px;
margin-right:20px;
background-color:white;
border: 1px solid gray;
border-radius:10%;
${mobile({ margin:"5px 3px" })}`;

const Option = styled.option``;


const ProductList = () => {
  const [sort, setSort] = useState("Newest");
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select defaultValue= "Color">
                <Option disabled>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
                <Option>Purple</Option>
            </Select>
            <Select defaultValue="Size">
                <Option disabled>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Newest">Newest</option>
            <option value="Price (asc)">Price (asc)</option>
            <option value="Price (desc)">Price (desc)</option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
