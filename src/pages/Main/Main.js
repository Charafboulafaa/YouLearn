import React, { useState } from 'react'
import './Main.css'
import Search from '../../components/Search/Search'

export default function Main() {

  const [courses, setCourses] = useState([])

  return (
    <main>
      <Search setCourses={setCourses} />
    </main>
  )
}
