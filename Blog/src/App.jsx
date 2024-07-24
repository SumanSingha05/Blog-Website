import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useDispatch(() => {
    authService.getCurrentUser()
    .then()
    
  }, [])

  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
