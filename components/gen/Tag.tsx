import React from 'react'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <div>{text}</div>
  )
}

export default Tag