import styled from "styled-components";
import { Link } from "react-router-dom";

function originals() {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8AE390BE95A4BB881B57BEAACA239C623553057751FDBF2720DAE5DD1C8EBA8E/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E8AE6930B0A452C2FB77C15CFC0F5C0AE3C0FED690FED059698C650B11EA6BFF/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A609ADC72244136BA23E19ADFC3B6975633266764C343183C32015A1F4801314/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/89B060646523F363CCCCC82E0B4812360CB094DCAFF67BADFD4E203D9DF234C8/scale?width=1200&aspectRatio=1.78&format=jpeg"
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

export default originals;
