import { db } from '../firebase'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Write() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const detailRef = useRef()

  function writeNote() {
    var docRef = doc(collection(db, 'notes'))
    const data = {
      id: docRef.id,
      title: titleRef.current.value,
      detail: detailRef.current.value,
      date: serverTimestamp(),
    }
    setDoc(docRef, data)
    navigate('/')
  }

  return (
    <div className='container'>
      <h2>쓰기</h2>
      <form className='form'>
        <input type='text' placeholder='제목...' ref={titleRef} />
        <textarea
          cols='30'
          rows='10'
          placeholder='노트 작성...'
          ref={detailRef}
        ></textarea>
      </form>
      <div className='btns'>
        <button>취소</button>
        <button onClick={writeNote}>완료</button>
      </div>
    </div>
  )
}
