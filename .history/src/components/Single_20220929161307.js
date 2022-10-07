import React from 'react'
import { useParams } from 'react-router-dom'

function Single({list, setlist}) {
    const {id} = useParams()
  return (
    <div>
      {"single this is the iD" + id}
    </div>
  )
}

export default Single
