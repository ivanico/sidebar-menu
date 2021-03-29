import React from 'react';
import { Accordion } from 'semantic-ui-react';

const SidebarAccordionHidingMenu = (props) => {
  const {sidebarActive} = props;
  return (
    <div className={sidebarActive ? "nav-sidebar active" : "nav-sidebar"}>
      <Accordion inverted>
        {props.children}
      </Accordion>
    </div>
   );
}
 
export default SidebarAccordionHidingMenu;