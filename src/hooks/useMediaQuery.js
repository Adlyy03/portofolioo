import { useSyncExternalStore, useCallback } from 'react'

export function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      if (typeof window === 'undefined') return () => {}
      const mediaQuery = window.matchMedia(query)
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', callback)
        return () => mediaQuery.removeEventListener('change', callback)
      } else {
        mediaQuery.addListener(callback)
        return () => mediaQuery.removeListener(callback)
      }
    },
    [query],
  )

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  }, [query])

  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
