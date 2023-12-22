import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Edit() {
  const navigate = useNavigate()
  const note = useLocation().state
  const titleRef = useRef()
  const detailRef = useRef()

  return (
    <div className='container'>
      <h2>수정</h2>
      <form className='form'>
        <input
          type='text'
          placeholder='제목...'
          defaultValue={note.title}
          ref={titleRef}
        />
        <textarea
          cols='30'
          rows='10'
          placeholder='노트 작성...'
          defaultValue={note.detail}
          ref={detailRef}
        ></textarea>
      </form>
      <div className='btns'>
        <button>취소</button>
        <button>완료</button>
      </div>
    </div>
  )
}
