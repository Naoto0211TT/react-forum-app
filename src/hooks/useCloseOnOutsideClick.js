import { useEffect, useCallback } from 'react'

export const useCloseOnOutsideClick = (ref, callback) => {
  const handleOutsideClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    },
    [ref, callback]
  )
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [handleOutsideClick])
}
