import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { BASENAME } from '@constants/index'
import StyledWrapper from './Docs.style'

const Docs: React.FC = () => {
  const [markdown, setMarkdown] = useState('')

  const loadMarkdown = async () => {
    const response = await fetch(`${BASENAME}/docs/getting-started.md`)
    const text = await response.text()
    setMarkdown(text)
  }

  useEffect(() => {
    loadMarkdown()
    return () => {}
  }, [])

  return (
    <StyledWrapper className="container">
      <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
    </StyledWrapper>
  )
}

export default Docs
