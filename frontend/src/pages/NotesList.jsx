import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function NotesList() {
  const navigate = useNavigate()
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
    <div className="Notes">
      {Notes.map((Note) => {
        return (
          <>
            <div onClick={() => {
              console.log('clicked')
              navigate(`/note/${Note.id}`)
            }} className='Note' key={Note.id}>
              <h3>{Note.name}</h3>
            </div>
          </>
        )
      })}
      <input onClick={(e) => {
        navigate('/add')
        e.target.classList.add('click-animation')
      }} className='add' type="button" value="+" />
    </div>
  )
}

export default NotesList