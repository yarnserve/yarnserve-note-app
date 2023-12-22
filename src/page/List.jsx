import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import NoteItem from '../components/NoteItem'

export default function List() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setNotes(items)
    })

    return () => unsubscribe()
  }, [])

  return (
    <ul className='list'>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ul>
  )
}
