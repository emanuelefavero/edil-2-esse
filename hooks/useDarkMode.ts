// * Hook to detect if the browser is in dark mode

import { useEffect, useState } from 'react'

export function useDarkMode() {
  // Define a state to keep track of dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if window is available and if dark mode is enabled
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    // Define a listener function that updates the state based on the media query
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    // Add the event listener
    mediaQuery.addEventListener('change', handleChange)

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return isDarkMode
}
