import { useDashboardContext } from '../pages/DashboardLayout'
import { whatlinks } from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const WhatNavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext()
  const user = useSelector((state) => state.userState?.user?.username)
  return (
    <div className="nav-links">
      {whatlinks.map((whatlinks) => {
        const { text, path, icon } = whatlinks
        {
        }
        if ((path == 'checkout' || path == 'orders') && !user) {
          console.log(user)
          return null
        }
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? null : toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default WhatNavLinks
