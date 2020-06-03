import React, { useEffect } from 'react'
import './SearchResults.css'
import { Card, Button, CardColumns } from 'react-bootstrap';


export default function SearchResults(props) {

  let Ids = []

  if (JSON.parse(localStorage.getItem('myCourses'))) {
    JSON.parse(localStorage.getItem('myCourses')).map(el => Ids.push(el.id.playlistId))
  }

  const handleClick = (e, course) => {
    let arr = localStorage.getItem('myCourses') != null ? JSON.parse(localStorage.getItem('myCourses')) : []

    arr.push(course)

    localStorage.setItem('myCourses', JSON.stringify(arr))

    e.target.disabled = true
    e.target.innerText = "Added"
  }

  return (
    <div className="SearchResults">
      <CardColumns>
        {props.coursesList.map(course => {
          return (
            <Card key={course.id.playlistId}>
              <Card.Img variant="top" src={course.snippet.thumbnails.high.url} />
              <Card.Body>
                <Card.Title>{course.snippet.title}</Card.Title>
                <Card.Text>{course.snippet.description.slice(0, 50)}</Card.Text>

                {Ids.includes(course.id.playlistId) ?

                  <Button onClick={(e) => handleClick(e, course)} variant="outline-info" size="lg" block disabled>Added</Button> :

                  <Button onClick={(e) => handleClick(e, course)} variant="outline-info" size="lg" block>Add to my courses</Button>
                }
              </Card.Body>
            </Card>
          )
        })}
      </CardColumns>
    </div>
  )
}
