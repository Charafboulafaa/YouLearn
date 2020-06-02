import React from 'react'
import './SearchResults.css'
import { Card, Button, CardColumns } from 'react-bootstrap';


export default function SearchResults(props) {

  const handleClick = (e, course) => {
    let arr = localStorage.getItem('myCourses') != null ? JSON.parse(localStorage.getItem('myCourses')) : []

    arr.push(course)

    localStorage.setItem('myCourses', JSON.stringify(arr))
  }

  return (
    <div className="SearchResults">
      <CardColumns>
        {props.coursesList.map(course => {
          return (
            <Card >
              <Card.Img variant="top" src={course.snippet.thumbnails.high.url} />
              <Card.Body>
                <Card.Title>{course.snippet.title}</Card.Title>
                <Card.Text>{course.snippet.description.slice(0, 50)}</Card.Text>
                <Button onClick={(e) => handleClick(e, course)} variant="outline-info" size="lg" block>Add to my courses</Button>
              </Card.Body>
            </Card>
          )
        })}
      </CardColumns>
    </div>
  )
}
