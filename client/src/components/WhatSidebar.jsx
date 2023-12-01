import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { whatlinks } from '../utils/links'
import Logo from './Logo'
import Wrapper from '../assets/wrappers/smallWhatSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'

const WhatSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      ></div>
      <div className="content">
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <header>
          <Logo />
        </header>
        <div className="nav-links">
          {whatlinks.map((link) => {
            const { text, path, icon } = link
            return (
              <NavLink to={path} key={text} className="nav-link" end>
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default WhatSidebar
