import React from 'react'
import Adminlist from './Adminlist'
import Adminpage from './Adminpage'

function Adminlevel({setViewAdminModal}) {
  return (
    <div className="p-3 rounded-3xl w-full bg-[#FFFF]">
      <Adminpage setViewAdminModal= {setViewAdminModal}/>
      <Adminlist/>
    </div>
  )
}

export default Adminlevel
