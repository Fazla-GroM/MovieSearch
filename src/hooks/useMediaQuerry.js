import { useState, useEffect, useMemo, useCallback } from "react"

const getMatches = mql => mql.matches

const useMediaQuery = query => {
  const mql = useMemo(() => window.matchMedia(query), [query])

  const [isMatching, setIsMatching] = useState(getMatches(mql))
  //const handleChange = e => {
  //  setIsMatching(e.matches)
  //}

  const handleChange = useCallback(e => {
    setIsMatching(getMatches(e))
  }, [])

  useEffect(() => {
    mql.addListener(handleChange)

    return () => mql.removeListener(handleChange)
  }, [])

  return isMatching
}

export default useMediaQuery
