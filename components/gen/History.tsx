import React from 'react'
import HistoryElement from './HistoryElement'
import HistoryCurrent from './HistoryCurrent'

type Props = {}

const History = ({}: Props) => {

  

  return (
    <div className='flex flex-col'>
      <HistoryElement/>
      <HistoryCurrent/>
    </div>
  )
}

export default History