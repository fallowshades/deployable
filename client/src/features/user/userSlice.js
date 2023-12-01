import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}

const themes = {
  darkTheme: 'darkTheme',
  default: 'dark-theme',
}

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

// const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)
const initialState = {
  user: getUserFromLocalStorage(),
  isDarkTheme: checkDefaultTheme(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt }
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null
      // localStorage.clear()
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },
    toggleTheme: (state) => {
      const newDarkTheme = !state.isDarkTheme
      state.isDarkTheme = newDarkTheme
      document.body.classList.toggle('dark-theme', newDarkTheme)
      localStorage.setItem('darkTheme', newDarkTheme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
