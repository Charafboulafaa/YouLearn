import React from 'react'
import { useParams } from 'react-router-dom'

export default function Learn() {

  let { courseId } = useParams()

  return (
    <div>
      {courseId}
    </div>
  )
}
