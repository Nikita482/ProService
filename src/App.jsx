import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Link to="/Page1">Page 1</Link>
      <Link to="/Page2">Page 2</Link>
    </>
  )
}

