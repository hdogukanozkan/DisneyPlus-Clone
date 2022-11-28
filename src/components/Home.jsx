import styled from "styled-components";
import ImgSlider from "./imgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./newDisney";
import Originals from "./Originals";

function Home(props) {
  return (
    <>
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
      </Container>
    </>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(85vh);
  display: block;
  top: 85px;
  overflow: hidden;
  padding: 0 calc(3.5vw + 5px);
  padding-top: 1rem;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    inset: 0px;
    opacity: 1;
    z-index: -1;
    position: absolute;
  }
`;

export default Home;
