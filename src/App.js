import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Navbar from './components/Navbar';
import Intro from './components/Intro';


const Container = styled.div`
  height: 100vh;
  overflow:hidden;

  @media only screen and (max-width:480px){
    overflow: scroll;
    overflow-x:hidden;
  }
`;
const IntroShape = styled.img` 

  height:100%;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  clip-path: polygon(100% 0, 63% 0, 28% 100%, 100% 100%);
  background-color: #3264fc;
`;
function App() {
  return <Container> 
          <Navbar/>
          <Intro/>
    </Container>
}

export default App;
