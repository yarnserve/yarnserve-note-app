import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>📘 노트</h1>
      </Link>
      <Link to={'/write'}>
        <button>쓰기</button>
      </Link>
    </div>
  )
}
