import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'

const Header = () => {
  const [Notes, setNotes] = useState([])
  async function getNotes() {
    let res = await fetch('/notes')
    let data = await res.json()
    setNotes(data)
  }
  useEffect(() => {
    getNotes()
  }, [])
  return (
    <header>
      <h1>
        <a href='/'>Note List</a>
      </h1>
    </header>
  )
}

export default Header