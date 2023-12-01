import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useQueryClient } from '@tanstack/react-query'

const Header = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userState.user)
  const queryClient = useQueryClient()
  const handleLogout = () => {
    navigate('/dashboard')
    dispatch(clearCart())
    dispatch(logoutUser())
    queryClient.removeQueries()
  }

  return (
    <header className=" bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-start ">
        {/* CART LINK*/}
        <NavLink
          to="/dashboard/cart"
          className="btn btn-ghost btn-circle btn-sm ml-4"
        >
          <div className="indicator">
            <BsCart3 className="h-5 w-5" />
            <span className="badge badge-sm badge-primary indicator-item">
              {numItemsInCart}
            </span>
          </div>
        </NavLink>
      </div>
      {/* USER */} {/* LINKS */}
      <div className="align-element flex justify-center sm:justify-end ">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary "
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login-interior"
              className="link link-hover text-xs sm:text-sm"
            >
              Sign in / Guest
            </Link>
            <Link
              to="/register-interior"
              className="link link-hover text-xs sm:text-sm"
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
