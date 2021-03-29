import React from 'react';
import { Accordion, Item } from 'semantic-ui-react';

const SidebarSubMenu = (props) => {
  const {activeIndex, index} = props;
    return ( <Accordion.Content
    active={activeIndex === index}
    as={Item}
    className="ui"
  >
    {props.children}
    </Accordion.Content> );
}
 
export default SidebarSubMenu;