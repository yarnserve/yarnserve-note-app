import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'

export default function List() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'notes'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      console.log(items)
    })
  }, [])

  return (
    <ul className='list'>
      <li className='note'>
        <h2>노트 제목....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
          officia optio? Unde quo consectetur omnis neque adipisci debitis amet.
          Perspiciatis neque pariatur quidem? Voluptate voluptates iste ipsa
          inventore atque?
        </p>
        <div className='note_footer'>
          <div className='date'>2023-12-25 12:20:45</div>
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
      <li className='note'>
        <h2>노트 제목....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
          officia optio? Unde quo consectetur omnis neque adipisci debitis amet.
          Perspiciatis neque pariatur quidem? Voluptate voluptates iste ipsa
          inventore atque?
        </p>
        <div className='note_footer'>
          <div className='date'>2023-12-25 12:20:45</div>
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
      <li className='note'>
        <h2>노트 제목....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
          officia optio? Unde quo consectetur omnis neque adipisci debitis amet.
          Perspiciatis neque pariatur quidem? Voluptate voluptates iste ipsa
          inventore atque?
        </p>
        <div className='note_footer'>
          <div className='date'>2023-12-25 12:20:45</div>
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
      <li className='note'>
        <h2>노트 제목....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
          officia optio? Unde quo consectetur omnis neque adipisci debitis amet.
          Perspiciatis neque pariatur quidem? Voluptate voluptates iste ipsa
          inventore atque?
        </p>
        <div className='note_footer'>
          <div className='date'>2023-12-25 12:20:45</div>
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
      <li className='note'>
        <h2>노트 제목....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
          officia optio? Unde quo consectetur omnis neque adipisci debitis amet.
          Perspiciatis neque pariatur quidem? Voluptate voluptates iste ipsa
          inventore atque?
        </p>
        <div className='note_footer'>
          <div className='date'>2023-12-25 12:20:45</div>
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
      <li className='note'>
        <h2>노트 제목....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
          officia optio? Unde quo consectetur omnis neque adipisci debitis amet.
          Perspiciatis neque pariatur quidem? Voluptate voluptates iste ipsa
          inventore atque?
        </p>
        <div className='note_footer'>
          <div className='date'>2023-12-25 12:20:45</div>
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
    </ul>
  )
}
