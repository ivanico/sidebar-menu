import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const SidebarSubMenuItem = (props) => {
  const {to,content, sidebarActive} = props;
  if(sidebarActive){
    return (
      <NavLink to={to}>
        <span>{content}</span>
      </NavLink>
    );
  }
  return (
    // <Dropdown.Item selection icon='attention' text={<NavLink to={to}> <span>{content}</span></NavLink>} /> 
    // <Dropdown text={<span>{content}</span>} options={<NavLink to={to}></NavLink>} simple item />
    <NavLink to={to}>
        <span>{content}</span>
      </NavLink>
  );

}
 
export default SidebarSubMenuItem;