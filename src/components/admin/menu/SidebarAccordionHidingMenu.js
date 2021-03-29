import React from 'react';
import { Accordion, Menu } from 'semantic-ui-react';

const SidebarAccordionHidingMenu = (props) => {
  const {sidebarActive} = props;
  if(sidebarActive){
  return (
    <div className={"nav-sidebar active"}>
      <Accordion inverted>
        {props.children}
      </Accordion>
    </div>
   );}

   return (
    <div className={"nav-sidebar"}>
      <Menu inverted vertical className="blue">
        {props.children}
      </Menu>
    </div>
   );

}
 
export default SidebarAccordionHidingMenu;