'use client'

import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { helix } = await import('ldrs')
      helix.register()
    }
    getLoader()
  }, [])
    
  return <l-helix size="28" speed="2.5" color="violet" />
}



