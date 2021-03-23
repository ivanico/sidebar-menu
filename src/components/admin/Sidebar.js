import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { Accordion, Icon } from 'semantic-ui-react';



const Sidebar = () => {
    const [activeIndex,setActiveIndex] = useState(null);

    const handleClick = (e, titleProps) => {
      const { index } = titleProps
      const newIndex = activeIndex === index ? -1 : index
      setActiveIndex( newIndex )
    }
    return (
      <div>
        <Accordion styled>
          <Accordion.Title>
          <NavLink to="/korisnici-i-uslugi">Корисници и улоги</NavLink>
          </Accordion.Title>
          <Accordion.Title>
            <NavLink to="/klasifikacii">Класификации и кодни листи</NavLink>
          </Accordion.Title>
          <Accordion.Title>
          <NavLink to="/mesecha-obrabotka">Месечна обработка на ЦР податоците</NavLink>
          </Accordion.Title>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            Внес и обработка на административни податоци
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
          <NavLink to="/admin">Централен депозитар за хартии од вредност</NavLink><br/>
          <NavLink to="/admin">Народна банка</NavLink><br/>
          <NavLink to="/admin">Фонд за пензиско и инвалидско осигурување</NavLink><br/>
          <NavLink to="/admin">Список на консолидирани деловни субјекти</NavLink><br/>
          <NavLink to="/admin">Странски директни инвестиции </NavLink><br/>
          <NavLink to="/admin">Завршни годишни сметки (од НАИМС)</NavLink><br/>
          <NavLink to="/admin">Статистички извештај за приходите по дејности </NavLink><br/>
          <NavLink to="/admin">Список на консолидирани деловни субјекти </NavLink><br/>
          <NavLink to="/admin">Преглед на логови</NavLink>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            Идентификација на странски лица
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
          <NavLink to="/admin">Централен регистар</NavLink><br/>
          <NavLink to="/admin">Централен депозитар за хартии од вредност</NavLink><br/>
          <NavLink to="/admin">Народна банка</NavLink><br/>
          <NavLink to="/admin">Странски директни инвестиции </NavLink><br/>
          <NavLink to="/admin">Спој на странски лица </NavLink>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            Определување на групите на претпријатија
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
          <NavLink to="/admin">Екстракција на ЛЕ и нивните врски од СДР</NavLink><br/>
          <NavLink to="/admin">Обработка на консолидирани деловни субјекти</NavLink><br/>
          <NavLink to="/admin">Формирање на групите на претпријатија</NavLink><br/>
          <NavLink to="/admin">Креирање на комплексни претпријатија</NavLink><br/>
          <NavLink to="/admin">Преглед на логови </NavLink>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={handleClick}
          >
            Преглед и ажуриране
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
          <NavLink to="/admin">Преглед на групите на претпријатија</NavLink><br/>
          <NavLink to="/admin">Ажурирање на групите на претпријатија</NavLink><br/>
          <NavLink to="/admin">Преглед на претпријатија</NavLink><br/>
          <NavLink to="/admin">Ажурирање на комплексни претпријатија</NavLink><br/>
          <NavLink to="/admin">Преглед на легални единици</NavLink>
          </Accordion.Content>
          <Accordion.Title>
          <NavLink to="godisna-obrabotka">Годишна обработка</NavLink>
          </Accordion.Title>
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={handleClick}
          >
            Уредување на СДР единиците
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
          <NavLink to="/admin">Легалните единици и нивните врски</NavLink><br/>
          <NavLink to="/admin">Претпријатијата и нивните врски</NavLink><br/>
          <NavLink to="/admin">Групите претпријатија и нивните врски</NavLink><br/>
          <NavLink to="/admin">Единици според видот на дејноста</NavLink>
          </Accordion.Content>
          <Accordion.Title>
          <NavLink to="registracija">Регистрирај единечно претпријатие и/или локална единица</NavLink>
          </Accordion.Title>
        </Accordion>
      </div>
    );
}
 
export default Sidebar;