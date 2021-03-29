import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Dropdown, Icon, Menu } from 'semantic-ui-react';

const SidebarMenuItem = (props) => {
  const {activeIndex, handleClick, index, content,to, isHeading, icon, iconSize, sidebarActive} = props;
  if(sidebarActive){
  return ( <Accordion.Title
    className="ui"
    as={Menu.Item}
    active={activeIndex === index}
    index={index}
    onClick={handleClick}
  >
    {!isHeading && to && 
     <NavLink to={to}>
        <Icon name={icon}size={iconSize} />
        <span>{content}</span>
      </NavLink>
    }
    {isHeading &&
      <>
        <Icon name={icon}size={iconSize} />
        <span>{content}</span>
        <Icon name="dropdown" />
      </>
    }


  </Accordion.Title> );
  }

  if(isHeading){
    return (<React.Fragment></React.Fragment>)
  }
  
  return ( <Menu.Item
    className="ui"
    active={activeIndex === index}
    index={index}
    onClick={handleClick}
  >
    {!isHeading && to && 
     <NavLink to={to}>
        <Icon name={icon}size={iconSize} />
      </NavLink>
    }

  </Menu.Item> );
}
 
export default SidebarMenuItem;