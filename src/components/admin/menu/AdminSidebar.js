import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Sidebar, Menu, Item } from 'semantic-ui-react';
import SidebarAccordionHidingMenu from './SidebarAccordionHidingMenu';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarSubMenu from './SidebarSubMenu';
import SidebarSubMenuItem from './SidebarSubMenuItem';

const AdminSidebar = () => {
    const [activeIndex,setActiveIndex] = useState(null);
    const [sidebarActive, setSidebarActive] = useState(false);

    const handleClick = (e, titleProps) => {
      const { index } = titleProps
      const newIndex = activeIndex === index ? -1 : index
      setActiveIndex( newIndex )
    }

    const showSidebar = () => {setSidebarActive(!sidebarActive)
        setActiveIndex(-1)}

    return (
        <Sidebar
          as={Menu}
          inverted
          className="blue"
          vertical
          visible
          animation={sidebarActive?"push":"overlay"}
          // animation="overlay"

          direction="left"
        >
         
          <SidebarAccordionHidingMenu sidebarActive={sidebarActive}> 
          <Menu.Item as={Link}><Icon
          style={{margin:"18px"}}
            name={sidebarActive ? "close" : "bars"}
            size="large"
            onClick={showSidebar}
            /></Menu.Item>
            <SidebarMenuItem
              activeIndex={activeIndex}
              handleClick={handleClick}
              sidebarActive={sidebarActive}
              index={0}
              content="Корисници и улоги"
              icon="tachometer alternate"
              iconSize="large"
              to="/admin/korisnici-i-uslugi"
            />
            <SidebarMenuItem
              activeIndex={activeIndex}
              handleClick={handleClick}
              sidebarActive={sidebarActive}
              index={1}
              content="Класификации и кодни листи"
              icon="chart area"
              iconSize="large"
              to="/admin/klasifikacii"
            />
            <SidebarMenuItem
              activeIndex={activeIndex}
              handleClick={handleClick}
              sidebarActive={sidebarActive}
              index={2}
              content="Месечна обработка на ЦР податоците"
              icon="chart area"
              iconSize="large"
              to="/admin/mesecha-obrabotka"
            />
            <SidebarMenuItem
              activeIndex={activeIndex}
              handleClick={handleClick}
              sidebarActive={sidebarActive}
              index={3}
              content="Месечна обработка на ЦР податоците"
              icon="chart area"
              iconSize="large" 
              isHeading={true}
              />
            <SidebarSubMenu
              icon="chart area"
              iconSize="large" 
              activeIndex={activeIndex}
              sidebarActive={sidebarActive}
              index={3}
              >
              <SidebarSubMenuItem
                to="/admin/centralen-depozitar"
                content="Централен депозитар за хартии од вредност"
                />
              <SidebarSubMenuItem
                to="/admin/narodna-banka"
                content="Народна банка"
                />
              <SidebarSubMenuItem
                to="/admin/fond-za-penzisko"
                content="Фонд за пензиско и инвалидско осигурување"
                />
              <SidebarSubMenuItem
                to="/admin/spisok"
                content="Список на консолидирани деловни субјекти"
                />
              <SidebarSubMenuItem
                to="/admin/stranski-direktori"
                content="Странски директни инвестиции"
                />
              <SidebarSubMenuItem
                to="/admin"
                content="Завршни годишни сметки (од НАИМС)"
                />
              <SidebarSubMenuItem
                to="/admin"
                content="Статистички извештај за приходите по дејности"
                />
              <SidebarSubMenuItem
                to="/admin"
                content="Список на консолидирани деловни субјекти"
                />
              <SidebarSubMenuItem to="/admin" content="Преглед на логови" />
            </SidebarSubMenu>
            <SidebarMenuItem
              activeIndex={activeIndex}
              handleClick={handleClick}
              sidebarActive={sidebarActive}
              index={4}
              content="Идентификација на странски лица"
              icon="chart area"
              iconSize="large" 
              isHeading={true}
            />
            <SidebarSubMenu
              icon="chart area"
              iconSize="large" 
              activeIndex={activeIndex}
              sidebarActive={sidebarActive}
              index={4}
            >
              <SidebarSubMenuItem 
                to="/admin" 
                content="Централен регистар" 
              />
              <SidebarSubMenuItem
                to="/admin"
                content="Централен депозитар за хартии од вредност"
              />
              <SidebarSubMenuItem
                to="/admin"
                content="Странски директни инвестиции"
              />
              <SidebarSubMenuItem to="/admin" content="Спој на странски лица" />
            </SidebarSubMenu>
            <Item style={{width:'100%', position:'absolute', bottom:'0', color: "rgba(255, 255, 255, 0.5)"}}>
              {sidebarActive ? "version 1.0.0" :"v:1.0.0" } 
            </Item>
          </SidebarAccordionHidingMenu>
         
        </Sidebar>
    );
}
 
export default AdminSidebar;