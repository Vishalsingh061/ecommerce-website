import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ height:"90vh", padding: "10px", flexDirection:"column" })}
  ${tablet({ height:"80vh", padding: "30px 0px", margin:"0px 30px" })}

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;