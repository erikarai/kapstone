import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {
  return (
    <div class="col p-0 m-0">
    <div className='p-2 d-flex justify-content-center shadow'>
      <h4>Participant Dashboard</h4>					
    </div>
    <Outlet/>
  </div>
  )
}

export default Dashboard
