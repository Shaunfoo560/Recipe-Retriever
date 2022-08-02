import Choices from "./elements/Choices";
import PageLinks from "./pages/PageLinks";
import {BrowserRouter} from 'react-router-dom';
import Find from "./elements/Find";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {IoMdHome} from 'react-icons/io';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Link to={"/"}>
            <IoMdHome />
          </Link>
        </Nav>
        <Choices />
        <Find />
        <br></br>
        <br></br>
        <PageLinks />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 3rem 0rem;
  margin-left: auto;
  margin-right: auto;
  width: 7%;
  font-size: 3rem;

`

export default App;
