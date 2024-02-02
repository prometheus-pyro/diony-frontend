import React from 'react'

type Props = {
  prompt?: string
}

const PromptTag = ({ prompt }: Props) => {
  return (
    <div>{prompt}</div>
  )
}

export default PromptTag