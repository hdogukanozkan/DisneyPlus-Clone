import styled from "styled-components";
import { Link } from "react-router-dom";

function newDisney() {
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C7AEA7FE736736CC8FDB3E5E5F93B74B7C9780C2F3BBF5E804456726D2CE4D8/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/simpsons_s33_social_16x9_1920x1080_en_v1_xxxxxx_395a8f3b.png"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/69D9A2CECD3FBCCE143F3AE3F7D3A9A7B79BC6596FB341305DD38641898808F1/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/newMovie">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F22B26C253A35292E7DAF2E214372AF1B3E48EAE9DA1355382CAFB3E22E42992/scale?width=1200&aspectRatio=1.78&format=jpeg"
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

export default newDisney;
