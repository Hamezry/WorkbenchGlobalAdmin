import React from 'react'
import { useParams } from 'react-router-dom'

function Single({list, setlist}) {
    const {id} = useParams()
    const item = list ? list.find(x => x.id.toString() === id) : undefined
  if(list)  console.log(list);
  return (
    <div>
      {"single this is the iD" + id}
      {/* {"single this is the iD" + item?.id}
      {"single this is the iD" + item?.status} */}
    </div>
  )
}

export default Single
