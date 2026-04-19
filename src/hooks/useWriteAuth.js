import { useState, useCallback } from 'react'

const SESSION_KEY = 'anniversary_write_auth'

export function useWriteAuth() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true'
  )
  const [error, setError] = useState('')

  const unlock = useCallback((input) => {
    if (input === process.env.REACT_APP_WRITE_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setUnlocked(true)
      setError('')
      return true
    }
    setError('Wrong password — try again')
    return false
  }, [])

  return { unlocked, unlock, error }
}
