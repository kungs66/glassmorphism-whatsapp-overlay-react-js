import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
const WaNumb = '' // PUT YOU WHATSAPP NUMBER HERE
const waApi = `https://api.whatsapp.com/send?phone=${WaNumb}&text=`


const ChatOverlay = () => {
    const [pesan, setPesan] = useState('')

    const goToWa = (waApi + pesan)

    const Button = () => {
        return (
            <a href={goToWa} target="_blank" rel="noopener noreferrer">
                <div className='bg-slate-800 px-5 py-2 rounded-sm cursor-pointer shadow-black/30 shadow-md'>
                    <FiSend />
                </div>
            </a>
        )
    }

    const DisableBtn = () => {
        return (
            <div className='bg-slate-700 text-slate-300 px-5 py-2 rounded-sm cursor-not-allowed shadow-black/30 shadow-md'>
                <FiSend />
            </div>
        )
    }

    return (
        <div className="fixed bottom-24 lg:bottom-28 right-[33px] lg:right-12 z-50 text-slate-100">
            <div className='glass-chat-light shadow-black/30 shadow-lg rounded-lg text-base'>
                <div className='py-6 px-4'>
                    <div className='bg-slate-800 py-3 px-3 mr-28 rounded-md shadow-black/30 shadow-md'>
                        <p>
                            Hi there!
                        </p>
                        <p>
                            How can I help you?
                        </p>
                    </div>
                    <div className='mt-32 items-center flex justify-between'>
                        <input
                            className='outline-none bg-slate-800 px-3 py-1 rounded-sm text-base shadow-black/30 shadow-md'
                            type="text"
                            name="pesan"
                            id="pesan"
                            autoComplete='off'
                            onChange={event => setPesan(event.target.value)}
                        />
                        {pesan === '' ? <DisableBtn /> : <Button />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatOverlay