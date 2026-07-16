'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Edition = 'Java' | 'Bedrock'

type EditionContextValue = {
  edition: Edition
  toggleEdition: () => void
}

const EditionContext = createContext<EditionContextValue | null>(null)

export function EditionProvider({ children }: { children: React.ReactNode }) {
  const [edition, setEdition] = useState<Edition>('Java')

  useEffect(() => {
    const saved = window.localStorage.getItem('minecraft-edition')
    if (saved === 'Java' || saved === 'Bedrock') setEdition(saved)
  }, [])

  function toggleEdition() {
    setEdition((current) => {
      const next = current === 'Java' ? 'Bedrock' : 'Java'
      window.localStorage.setItem('minecraft-edition', next)
      return next
    })
  }

  return <EditionContext.Provider value={{ edition, toggleEdition }}>{children}</EditionContext.Provider>
}

export function useEdition() {
  const context = useContext(EditionContext)
  if (!context) throw new Error('useEdition must be used within EditionProvider')
  return context
}

export function supportsEdition(
  item: object,
  edition: Edition
) {
  const data = item as {
    editions?: readonly string[]
    edition?: string
  }

  return (
    data.edition === edition ||
    data.editions?.includes(edition) ||
    (!data.edition && !data.editions)
  )
}
