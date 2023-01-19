import React from 'react'
import ResumeItem from '../ResumeItem';
import * as C from './style'
import { BsCashCoin } from 'react-icons/bs'
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md'

const Resume = ( {income, expense, total} ) => {
  return (
    <>
    <C.Container>
    <ResumeItem
        title="Entradas"
        Icon={MdOutlineAddCircleOutline}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={MdOutlineRemoveCircleOutline}
        value={expense}
      />
      <ResumeItem title="Total" 
      Icon={BsCashCoin} 
      value={total}
      />
    </C.Container>
    </>
  )
}

export default Resume;