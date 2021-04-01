import React, { useState } from 'react';
import { Dropdown, Icon, Menu, Image, Item } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import img from '../../../assets/1.jpg'
import { NavLink } from 'react-router-dom';


const AdminTopMenu = () => {

    const [activeItem,setActiveItem]= useState('')
    const items = [
      {
        key: 'Settings & privacy',
        text: <NavLink to="/admin/settings">Settings & privacy</NavLink>,
        value: 'Settings & privacy',
        image: <Icon name="setting" size="large" />
      },
      {
        key: 'Help & support',
        text: 'Help & support',
        value: 'Help & support',
        image: <Icon name="help" size="large" />
      },
      {
        key: 'Log out',
        text: 'Log out',
        value: 'Log out',
        image: <Icon name="log out" size="large" />
      }
      
    ]

    const handleItemClick = (e, { name }) => setActiveItem( name )

    return (
      <div className="top-menu">
        <Menu>
          <Item style={{width: "60px"}}>
            <NavLink to="/admin">
              <Icon name="react" size="large" style={{color:"white"}}/>
            </NavLink>
          </Item>
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
                  options={items}
                  trigger={
                    <div style={{display:'inline-block'}}>
                    <Image src={img} avatar />
                    <span> UsernameUsernameUsernameUsernameUsernameUsername</span>
                    </div>
                    }
                />
              </span>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
}
 
export default AdminTopMenu;