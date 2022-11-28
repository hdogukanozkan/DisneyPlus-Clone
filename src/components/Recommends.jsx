import styled from "styled-components";
import { Link } from "react-router-dom";

function Recommends() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://whatsondisneyplus.com/wp-content/uploads/2019/01/8FB90C0E-B872-481C-8745-A8E4385F7D55.jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7586EC2869876C090002BFBD55E65995403BBD50740A39A8A50A839A91363BD/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://whatsondisneyplus.com/wp-content/uploads/2022/04/frozen-fever.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB656F09C9D63501B23587EA7F2EBF82F38F5A9B8BA5A0F8CA35C10ED21260B8/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: 4px solid rgba(249, 249, 249, 0.1);
  transition: all 300ms ease 0s;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #f6f6f6;
  }
`;

export default Recommends;
