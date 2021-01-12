import React from 'react'
import moment from 'moment'
import {InputText} from './style'

const displayInput = (date) => {

    const today = moment().format('l');
    const yesterday = moment().subtract(1, 'day').format('l');
    const dayState = moment(date).format('l');
  
    return (dayState === today) ? 'Hoje' : (dayState === yesterday) ? 'Ontem' : moment(date).format('l');
  }

//COMPONENTE PARA SOBREPOR INPUT DATE
export const Input = ({value, onClick}) => {
    return <InputText type="text" value={displayInput(value)} onClick={onClick} />

}