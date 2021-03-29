import React from 'react';
import { Accordion, Dropdown, Icon, Item } from 'semantic-ui-react';

const SidebarSubMenu = (props) => {
  const { activeIndex, index, sidebarActive, icon, iconSize } = props;
  if(sidebarActive){
    return ( <Accordion.Content
    active={activeIndex === index}
    as={Item}
    className="ui"
  >
    {props.children}
    </Accordion.Content> );}
    return ( 

    <Dropdown  pointing="left" text="" trigger={<a href="#" className="ui item">
      <Icon name={icon} size={iconSize} />
      </a>
    } >
      <Dropdown.Menu>
      {props.children}
      </Dropdown.Menu>
    </Dropdown>

       );
}
 
export default SidebarSubMenu;