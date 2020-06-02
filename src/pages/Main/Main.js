import React, { useState } from 'react'
import './Main.css'
import Search from '../../components/Search/Search'
import SearchResults from '../../components/SearchResults/SearchResults'
import { Container } from 'react-bootstrap';

export default function Main() {

  const [courses, setCourses] = useState([])

  return (
    <main>
      <Container>
        <Search setCourses={setCourses} />
        <SearchResults coursesList={courses} />
      </Container>
    </main>
  )
}
