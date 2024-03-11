import './App.css'
import { Link, NavLink, Outlet } from 'react-router-dom'

function App() {



  return (
    <>
      <div className="app_wraper1">
        <div className="app_wraper">
          <ul className='navList'>
            <li className='nav_element'>
              <img src="/img/group.png" alt="group" />
              <NavLink
                to={'group'}
                className='linkDecor'>
                Група
              </NavLink>
            </li>
            <li className='nav_element'>
              <img src="/img/teacher.png" alt="" />
              <NavLink
                to={'teacher'}
                className='linkDecor'>
                Викладач
              </NavLink>
            </li>
            <li className='nav_element'>
              <img src="/img/tarif.png" alt="" />
              <NavLink
                to={'tarif'}
                className='linkDecor'>
                Тариф
              </NavLink>
            </li>
            <li className='nav_element'>
              <img src="/img/accounting.png" alt="" />
              <NavLink
                to={'report'}
                className='linkDecor'>
                Облік виконання навантаження
              </NavLink>
            </li>
            <li className='nav_element'>
              <img src="/img/report.png" alt="" />
              <NavLink
                to={'accounting'}
                className='linkDecor'>
                SMTh
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
