import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        color:'red',
        paddingBottom:'5px',
        fontWeight: "bold"
      };

    return (
        <nav >
            <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                to='/home' 
            >Home</NavLink>
            <NavLink
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }     
             to='/friends'
             >friends</NavLink>
            <NavLink 
 
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
              
                to='/about'
                
              >About</NavLink>
        </nav>
    );
};

export default Header;