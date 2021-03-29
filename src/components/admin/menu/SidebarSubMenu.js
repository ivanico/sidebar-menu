import React from 'react';
import { Accordion, Dropdown, Item } from 'semantic-ui-react';

const SidebarSubMenu = (props) => {

  const {activeIndex, index, sidebarActive} = props;
  if(sidebarActive){
    return ( <Accordion.Content
    active={activeIndex === index}
    as={Item}
    className="ui"
  >
    {props.children}
    </Accordion.Content> );}
    return ( 
      <Dropdown.Menu>
      {/* <Icon name={icon} size={iconSize} /> */}
      {props.children}
    </Dropdown.Menu>
       );
}
 
export default SidebarSubMenu;