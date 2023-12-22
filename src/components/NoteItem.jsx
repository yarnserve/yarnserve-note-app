import { Link } from 'react-router-dom'

export default function NoteItem({ note }) {
  return (
    <li className='note'>
      <h2>{note.title}</h2>
      <p>{note.detail}</p>
      <div className='note_footer'>
        <div className='date'>{note.date.toDate().toLocaleString()}</div>
        <div className='btns'>
          <Link to={'/edit'}>
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </div>
      </div>
    </li>
  )
}
