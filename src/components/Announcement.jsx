import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0662f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over 1 Rupee
    </Container>
  )
}

export default Announcement
