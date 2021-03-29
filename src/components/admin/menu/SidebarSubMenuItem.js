import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarSubMenuItem = (props) => {
  const {to,content} = props;
  return (
      <NavLink to={to}>
        <span>{content}</span>
      </NavLink>
    );
}
 
export default SidebarSubMenuItem;