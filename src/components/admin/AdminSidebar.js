import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { Accordion, Icon, Sidebar, Menu, Item } from 'semantic-ui-react';



const AdminSidebar = () => {
    const [activeIndex,setActiveIndex] = useState(null);
    const [sidebarActive, setSidebarActive] = useState(false);

    const handleClick = (e, titleProps) => {
      const { index } = titleProps
      const newIndex = activeIndex === index ? -1 : index
      setActiveIndex( newIndex )
    }

    const showSidebar = () => {setSidebarActive(!sidebarActive)}
    return (
      <div>
        <Sidebar      
             as={Menu}
             inverted
             className="blue"
             vertical
             visible
             animation="overlay"
        >
        <Icon name={sidebarActive? "close" : "bars"} size="large" onClick={showSidebar} />
        <div className={sidebarActive ? 'nav-sidebar active' : 'nav-sidebar'}>

        <Accordion inverted >
          <Accordion.Title
          className="ui"
          as={Menu.Item}>
          <NavLink to="/admin/korisnici-i-uslugi"><Icon name="chart area" size="large" /><span>Корисници и улоги</span></NavLink>
          </Accordion.Title>
          <Accordion.Title
          className="ui"
          as={Menu.Item}>
            <NavLink to="/admin/klasifikacii"><Icon name="chart area" size="large" /><span>Класификации и кодни листи</span></NavLink>
          </Accordion.Title>
          <Accordion.Title
          className="ui"
          as={Menu.Item}>
          <NavLink to="/admin/mesecha-obrabotka"><Icon name="chart area" size="large" /><span>Месечна обработка на ЦР податоците</span></NavLink>
          </Accordion.Title>
          <Accordion.Title
            className="ui"
            as={Menu.Item}
            active={activeIndex === 0}
            index={0}
            onClick={sidebarActive? handleClick : showSidebar}
            ><Icon name="chart area" size="large"/><span>
          Внес и обработка на административни податоци
            </span>
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0} as={Item} className="ui" >
          <NavLink to="/admin/centralen-depozitar"><span>Централен депозитар за хартии од вредност</span></NavLink>
          <NavLink to="/admin/narodna-banka"><span>Народна банка</span></NavLink>
          <NavLink to="/admin/fond-za-penzisko"><span>Фонд за пензиско и инвалидско осигурување</span></NavLink>
          <NavLink to="/admin"><span>Список на консолидирани деловни субјекти</span></NavLink>
          <NavLink to="/admin"><span>Странски директни инвестиции</span></NavLink>
          <NavLink to="/admin"><span>Завршни годишни сметки (од НАИМС)</span></NavLink>
          <NavLink to="/admin"><span>Статистички извештај за приходите по дејности</span></NavLink>
          <NavLink to="/admin"><span>Список на консолидирани деловни субјекти</span></NavLink>
          <NavLink to="/admin"><span>Преглед на логови</span></NavLink>
          </Accordion.Content>
          <Accordion.Title
            className="ui"
            as={Menu.Item}
            active={activeIndex === 1}
            index={1}
            onClick={sidebarActive? handleClick : showSidebar}
            ><Icon name="chart area" size="large" /><span>
            Идентификација на странски лица
            </span><Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1} as={Item} className="ui" >
          <NavLink to="/admin"><span>Централен регистар</span></NavLink>
          <NavLink to="/admin"><span>Централен депозитар за хартии од вредност</span></NavLink>
          <NavLink to="/admin"><span>Народна банка</span></NavLink>
          <NavLink to="/admin"><span>Странски директни инвестиции</span></NavLink>
          <NavLink to="/admin"><span>Спој на странски лица</span></NavLink>
          </Accordion.Content>
          <Accordion.Title
            className="ui"
            as={Menu.Item}
            active={activeIndex === 2}
            index={2}
            onClick={sidebarActive? handleClick : showSidebar}
            ><Icon name="chart area" size="large" /><span>
            Определување на групите на претпријатија
            </span><Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2} as={Item} className="ui" >
          <NavLink to="/admin"><span>Екстракција на ЛЕ и нивните врски од СДР</span></NavLink>
          <NavLink to="/admin"><span>Обработка на консолидирани деловни субјекти</span></NavLink>
          <NavLink to="/admin"><span>Формирање на групите на претпријатија</span></NavLink>
          <NavLink to="/admin"><span>Креирање на комплексни претпријатија</span></NavLink>
          <NavLink to="/admin"><span>Преглед на логови</span></NavLink>
          </Accordion.Content>
          <Accordion.Title
            className="ui"
            as={Menu.Item}
            active={activeIndex === 3}
            index={3}
            onClick={sidebarActive? handleClick : showSidebar}
            ><Icon name="chart area" size="large" /><span>
            Преглед и ажуриране
            </span><Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3} as={Item} className="ui" >
          <NavLink to="/admin"><span>Преглед на групите на претпријатија</span></NavLink>
          <NavLink to="/admin"><span>Ажурирање на групите на претпријатија</span></NavLink>
          <NavLink to="/admin"><span>Преглед на претпријатија</span></NavLink>
          <NavLink to="/admin"><span>Ажурирање на комплексни претпријатија</span></NavLink>
          <NavLink to="/admin"><span>Преглед на легални единици</span></NavLink>
          </Accordion.Content>
          <Accordion.Title
            className="ui"
            as={Menu.Item}
            >
          <NavLink to="/admin/godisna-obrabotka"><Icon name="chart area" size="large" /><span>Годишна обработка</span></NavLink>
          </Accordion.Title>
          <Accordion.Title
            className="ui"
            as={Menu.Item}
            active={activeIndex === 4}
            index={4}
            onClick={sidebarActive? handleClick : showSidebar}
            ><Icon name="chart area" size="large" /><span>
            Уредување на СДР единиците
            </span><Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4} as={Item} className="ui" >
          <NavLink to="/admin"><span>Легалните единици и нивните врски</span></NavLink>
          <NavLink to="/admin"><span>Претпријатијата и нивните врски</span></NavLink>
          <NavLink to="/admin"><span>Групите претпријатија и нивните врски</span></NavLink>
          <NavLink to="/admin"><span>Единици според видот на дејноста</span></NavLink>
          </Accordion.Content>
          <Accordion.Title
          className="ui"
          as={Menu.Item}
          >
          <NavLink to="/admin/registracija"><Icon name="chart area" size="large" /><span>Регистрирај единечно претпријатие и/или локална единица</span></NavLink>
          </Accordion.Title>
        </Accordion>
        </div>
        </Sidebar>
      </div>
    );
}
 
export default AdminSidebar;