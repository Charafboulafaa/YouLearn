import React from 'react'
import './SearchResults.css'
import { Card, Button, CardColumns } from 'react-bootstrap';


export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <CardColumns>
        {props.coursesList.map(course => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={course.snippet.thumbnails.high.url} />
              <Card.Body>
                <Card.Title>{course.snippet.title}</Card.Title>
                <Card.Text>{course.snippet.description.slice(0, 50)}</Card.Text>
                <Button variant="outline-info" size="lg" block>Add to my courses</Button>
              </Card.Body>
            </Card>
          )
        })}
      </CardColumns>
    </div>
  )
}
