import React from 'react';
import { MdPhone } from 'react-icons/md';
import './ContactInfoItem.css';

export default function ContactInfoItem({
    icon= <MdPhone></MdPhone>,
    text= 'this is info',
}) {
  return (
    <div className='items-container'>
        <div className="icon">{icon}</div>
        <div className="info">{text}</div>
    </div>
  )
}
