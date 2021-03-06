import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
    return (
        <Menu>
            <MenuItem><NavLink exact to="/home">Home</NavLink></MenuItem>
            <MenuItem><NavLink exact to="/editores">Editores</NavLink></MenuItem>
            <MenuItem><NavLink exact to="/posts/criar">Novo post</NavLink></MenuItem>
        </Menu>
    );
}

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
`;


const MenuItem = styled.li`
    text-transform: lowercase;
    font-size: 18px;
    
    a { 
        text-decoration: none;
        color: #274060;
    }

    a.active {
        color: #09f;
    }
`;