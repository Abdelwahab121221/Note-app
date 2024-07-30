import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function CreateNewNote() {
    let navigator = useNavigate()
    const [title,setTitle] = useState('')
    const [note, setNote] = useState('')
    const [available, setAvilable] = useState(false)
    function handleSumbit(e) {
        e.preventDefault()
        if (title === '' || note === '') {
            setAvilable(true)
        } else {
            fetch('http://127.0.0.1:8000/notes/create', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: title,
                    note:note
                })
            })
            navigator('/')
        }
    }
    return (
        <form onSubmit={handleSumbit} className='create-note'>
            <div className="title">
                <label htmlFor="title">
                    title:
                </label>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" name="title" placeholder='Enter title of the note' />
            </div>
            <div className="note">
                <label htmlFor="note">
                    note:
                </label>
                <textarea onChange={(e) => {
                    setNote(e.target.value)
                }} rows='4' type="text" name="note" placeholder='Enter your note'/>
            </div>
            {available && (
                <p style={{color:'red',textAlign:'center'}}>you can't let title or note empty.</p>
            )}
            <input type="submit" value="add" />
        </form>
    )
}

export default CreateNewNote