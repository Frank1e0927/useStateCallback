import { useState, useEffect } from 'react'

export function useStateCallback<INIT_STATE>(init: INIT_STATE, cb: (initState: INIT_STATE) => void) {
  const [state, setState] = useState(init)
  useEffect(() => {
    cb(state)
  }, [state, cb])
  return [state, setState]
}