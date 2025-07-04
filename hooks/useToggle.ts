import { useCallback, useState } from 'react'

export function useToggle(initial = false): [boolean, () => void, (value: boolean) => void] {
  const [state, setState] = useState(initial)

  const toggle = useCallback(() => setState((v) => !v), [])
  const set = useCallback((value: boolean) => setState(value), [])

  return [state, toggle, set]
} 