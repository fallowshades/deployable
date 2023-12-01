import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaAlignRight, FaAlignJustify } from 'react-icons/fa'
import Logo from './Logo'
import LogoutContainer from './LogoutContainer'
import ThemeToggle from './ThemeToggle'

import { useDashboardContext } from '../pages/DashboardLayout'
const Navbar = () => {
  const { toggleSidebar, activeLeftSidebar } = useDashboardContext()

  const handleLeftButtonClick = () => {
    toggleSidebar('leftButton')
  }

  const handleRightButtonClick = () => {
    toggleSidebar('rightButton')
  }

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          data-value="leftButton"
          type="button"
          className="toggle-btn"
          onClick={handleLeftButtonClick}
        >
          {activeLeftSidebar ? <FaAlignLeft /> : <FaAlignJustify />}
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <LogoutContainer />
          <ThemeToggle />
        </div>
      </div>
      <button
        data-value="rightButton"
        type="button"
        className="toggle-btn"
        onClick={handleRightButtonClick}
      >
        {activeLeftSidebar ? <FaAlignJustify /> : <FaAlignRight />}
      </button>
    </Wrapper>
  )
}

export default Navbar
