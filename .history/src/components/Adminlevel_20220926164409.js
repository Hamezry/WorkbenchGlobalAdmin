import React from 'react'
import Adminlist from './Adminlist'
import Adminpage from './Adminpage'

function Adminlevel() {
  return (
    <div className="p-3 rounded-3xl w-full bg-[#FFFF]">
      <Adminpage/>
      <Adminlist/>
    </div>
  )
}

export default Adminlevel
