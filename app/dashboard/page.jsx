import React, { Children } from 'react'
import Header from './_components/Header'

function DashboardLayout({Children}) {
  return (
    <div>
        <Header />
        {Children}</div>
  )
}

export default DashboardLayout