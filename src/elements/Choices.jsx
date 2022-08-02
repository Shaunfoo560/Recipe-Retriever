import { MdFreeBreakfast, MdOutlineFastfood } from 'react-icons/md';
import { GiChipsBag } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import { FaLeaf } from 'react-icons/fa';
import { TbSoup } from 'react-icons/tb';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Choices() {
  return (
    <Bunch>
        <Path to={'/Types/breakfast'}>
            <MdFreeBreakfast/>
            <h5>Breakfast</h5>
        </Path>
        <Path to={'/Types/maincourse'}>
            <MdOutlineFastfood/>
            <h5>Main Course</h5>
        </Path>
        <Path to={'/Types/drink'}>
            <BiDrink/>
            <h5>Beverages</h5>
        </Path>
        <Path to={'/Types/salad '}>
            <FaLeaf/>
            <h5>Salads</h5>
        </Path>
        <Path to={'/Types/soup'}>
            <TbSoup/>
            <h5>Soups</h5>
        </Path>
        <Path to={'/Types/snacks'}>
            <GiChipsBag/>
            <h5>Snacks</h5>
        </Path>
    </Bunch>
  )
}

const Bunch = styled.div`
    margin: 0rem 0rem;    
    display: flex;
    justify-content: center;
`
const Path = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    text-decoration: none;
    width: 6rem;
    height: 6rem;
    cursor: pointer;

    h5 {
        color: black;
        font-size: 1rem;
    }
    svg {
        color: black;
        font-size: 3rem;
        transition: 0.5s;
    }
    svg:hover {
        transform: scale(1.5);
    }
`

export default Choices