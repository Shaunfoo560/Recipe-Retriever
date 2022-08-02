import styled from 'styled-components';
import {useState} from 'react';
import {FcSearch} from 'react-icons/fc';
import {useNavigate} from 'react-router-dom';

function Search() {

  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/Results/' + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FcSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search for any recipe!" value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 0rem 15rem;
    position: relative;
    div {
      width: 100%
      position: relative;
    }
    input {
        border: none;
        background: white;
        font-size: 1.7rem;
        color: black;
        padding: 1rem 5rem;
        border: solid;
        border-radius: 1rem;
        outline: solid;
        width: 95%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        font-size: 1.75rem;
    }
`

export default Search