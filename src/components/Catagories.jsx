import { categories } from "../data";
import styled from "styled-components";
import CategoryItem from "./CatagoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
    ${mobile({ "padding": "0px", "flex-direction":"column" })}
`

const Categories = () => {
    return (
        <Container>
          {categories.map((item) => (
            <CategoryItem item={item} />
          ))}
        </Container>
      );
    };
  
export default Categories;

  