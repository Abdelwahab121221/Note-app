import React from 'react'
import '../App.css'
import { useParams , useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
function NotePage() {
  let navigator = useNavigate()
  const { id } = useParams()
  const [note, setNote] = useState({})
  useEffect(() => {
    const get_note = async () => {
      try {
        let res = await fetch('/notes/' + id)
        if (res.status === 200) {
          let data = await res.json()
          setNote(data)
        } else {
          console.error('Error fetching note')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    get_note()
  }, [id])
  useEffect(() => {
    console.log('useEffact')
    fetch(`http://127.0.0.1:8000/notes/${note.id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
  }, [note])
  return (
    <div className="Note">
      <h2 className='title'>{note.name}</h2>
      <textarea rows='10' onChange={(e) => { setNote({ ...note, note: e.target.value }) }} defaultValue={note.note || ''} className="content">
      </textarea>
      <span className='created'>{note.created}</span>
      <span className='updated'>{note.updated}</span>
      <i onClick={() => {
        let res = fetch(`http://127.0.0.1:8000/notes/${note.id}/delete`, {
          method: 'DELETE',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(note)
        })
        navigator('/')
      }} className="fa fa-remove"></i>
    </div>
  )
}

export default NotePage