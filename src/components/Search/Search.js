import React, { useState } from 'react'
import './Search.css'
import axios from 'axios'

export default function Search(props) {

  const [query, setQuery] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=playlist&key=${process.env.REACT_APP_API_KEY}`)

    console.log(res.data.items)

  }

  const handleChange = (e) => setQuery(e.target.value)

  return (
    <form className="search-form">
      <input type="search" id="search-input" onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Search</button>
    </form>
  )
}
