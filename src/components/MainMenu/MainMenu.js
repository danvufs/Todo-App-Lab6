import { NavLink } from 'react-router-dom';
// I use NavLink instead of Link because I want to be able to style the active tab
import './MainMenu.scss';

function MainMenu() {
    return (
        <nav className='navigationBar'>
            <NavLink className='tab' to="/">Tasks</NavLink>
            <NavLink className='tab' to="/add">Add</NavLink>
            <NavLink className='tab' to="/help">Help</NavLink>
        </nav>
    );
}

export default MainMenu;
