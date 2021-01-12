import React, { useState, useRef, useEffect } from 'react';
import { useStaticState, Calendar } from "@material-ui/pickers";

import { Input } from './components'
import { ArrowBase } from './components';
import { Wrapper, WrapperControl, WrapperCalendar } from './style';
import moment from 'moment'

export default function DatePickerCalendar() {

    const [day, setDay] = useState(moment().startOf('day')._d);
    const [open, setOpen] = useState(false);

    const node = useRef()

    const { pickerProps } = useStaticState({
        value: day,
        onChange: (value) => {
            setDay(value._d)},
        },
    );

    const handleButtonClick = ({target}) => {
        const {value} = target;
        if (value === 'prev') {
          setDay(moment(day).startOf('day').subtract(1,'day')._d)
        }
        if (value === 'next') {
          setDay(moment(day).startOf('day').add(1,'day')._d)
        }
    }

    const handleClickOpen = () => {
        setOpen(!open);
    }

    const handleClickCalendar = (e) => {
        if(node.current.contains(e.target))
        //inside click
        return;

        setOpen(false)
    }

    useEffect(() => {
        
        document.addEventListener("mousedown", handleClickCalendar);
        
        return () => {
            document.removeEventListener('mousedown', handleClickCalendar)
        }

    }, [])
    console.log(day);
    return (
        <Wrapper>
            <WrapperControl>
                <ArrowBase type="prev" onClick={handleButtonClick} />
                <Input value={day} onClick={handleClickOpen} />
                <ArrowBase type="next" onClick={handleButtonClick} disabled={(moment(day).startOf('day').format('l') === moment().startOf('day').format('l'))} />
            </WrapperControl>
            <WrapperCalendar open={open} ref={node}>
                <Calendar {...pickerProps} maxDate={moment().startOf('day')._d} />
            </WrapperCalendar>
        </Wrapper>
    )
}

