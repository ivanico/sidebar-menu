import React, { useState } from 'react';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";


const AdminTopMenu = () => {

    const [activeItem,setActiveItem]= useState('')
    const friendOptions = [
      {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: <Icon name="react" size="large" />,
      },
      {
        key: 'Settings & privacy',
        text: 'Settings & privacy',
        value: 'Settings & privacy',
      },
      {
        key: 'Help & support',
        text: 'Help & support',
        value: 'Help & support',
      },
      {
        key: 'Log out',
        text: 'Log out',
        value: 'Log out',
      }
      
    ]

    const handleItemClick = (e, { name }) => setActiveItem( name )

    return (
      <div className="top-menu">
        <Menu>
          <Menu.Item
          
            name="editorials"
            active={activeItem === "editorials"}
            onClick={handleItemClick}
          >
            Editorials
          </Menu.Item>

          <Menu.Item
            name="reviews"
            active={activeItem === "reviews"}
            onClick={handleItemClick}
          >
            Reviews
          </Menu.Item>

          <Menu.Item
            floated="right"
            name="upcomingEvents"
            active={activeItem === "upcomingEvents"}
            onClick={handleItemClick}
          >
            Upcoming Events
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Dropdown
                  inline
                  image
                  options={friendOptions}
                  defaultValue={friendOptions[0].value}
                />
              </span>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
}
 
export default AdminTopMenu;