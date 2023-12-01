import React from 'react'

import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { MdAdminPanelSettings } from 'react-icons/md'

export const links = [
  { text: 'add Achievement', path: '.', icon: <FaWpforms /> },
  {
    text: 'all Achievements',
    path: 'all-achievements',
    icon: <MdQueryStats />,
  },
  { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
]

export const whatlinks = [
  { id: 1, path: '.', text: 'home', icon: <IoBarChartSharp /> },
  { id: 2, path: 'about', text: 'about', icon: <IoBarChartSharp /> },
  { id: 3, path: 'all-signs', text: 'signs', icon: <IoBarChartSharp /> },
  { id: 4, path: 'cart', text: 'cart', icon: <IoBarChartSharp /> },
  { id: 5, path: 'checkout', text: 'checkout', icon: <IoBarChartSharp /> },
  { id: 6, path: 'orders', text: 'orders', icon: <IoBarChartSharp /> },
]
