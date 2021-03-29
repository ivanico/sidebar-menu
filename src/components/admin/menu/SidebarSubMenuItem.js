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
  if(!sidebarActive)
  return (
      <NavLink to={to}>
        <span style={{display: "inline"}}>{content}</span>
      </NavLink>
  );

  return (
    <Dropdown.Item>
      <NavLink to={to}>
        <span style={{display: "inline"}}>{content}</span>
      </NavLink>
    </Dropdown.Item>
  );


}
 
export default SidebarSubMenuItem;