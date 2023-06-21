
import React from 'react'
import { Collapse } from 'react-collapse'
import {AiFillMinusCircle} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
export default function AccordionItem({open, toggle, title, answer}) {
  return (
    <div className='drop-shadow-lg'>
        <div className='rounded-xl bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer mt-5' onClick={toggle}>
            <p className='text-[22px] font-semibold'>{title}</p>
            <p className='text-[30-px]'>{
                open ? <AiFillMinusCircle /> : <AiOutlinePlus /> 
            }</p>
        </div>

        <Collapse isOpened={open}>
            <div className='bg-white px-[50px] pb-[20px] rounded-xl rounded-t-none -mt-5'>{answer}</div>
        </Collapse>
    </div>
  )
}
