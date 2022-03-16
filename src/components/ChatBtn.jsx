import { useState } from 'react'
import { BiChat } from 'react-icons/bi'
import { IoChevronDownOutline } from 'react-icons/io5'
import ChatOverlay from './ChatOverlay'

const ChatBtn = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-4 lg:bottom-8 right-8 lg:right-10 z-50 text-2xl">

            {/*
                DARK THEME 
            */}
            {/* <div onClick={() => setOpen(!open)} className='cursor-pointer bg-slate-800 pt-5 py-4 px-7 rounded-2xl text-slate-100 transition-all ease-in-out duration-150 shadow-black/60 shadow-md'>
                {open ? <IoChevronDownOutline /> : <BiChat />}
            </div> */}

            {/*
                LIGHT THEME 
            */}
            <div onClick={() => setOpen(!open)} className='cursor-pointer bg-slate-200 pt-5 py-4 px-7 rounded-2xl text-slate-900 transition-all ease-in-out duration-150 shadow-black/60 shadow-md'>
                {open ? <IoChevronDownOutline /> : <BiChat />}
            </div>

            {/*
                OPENING OVERLAY 
            */}
            {open && <ChatOverlay />}


        </div>
    )
}

export default ChatBtn