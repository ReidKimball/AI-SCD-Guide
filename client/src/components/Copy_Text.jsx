import { useState } from 'react'
import { Button } from '@mui/material'

export default function Copy_Text({ AI_Text }) {

    const [copyMessage, setCopyMessage] = useState('')

    const handleCopy = () => {
        navigator.clipboard.writeText(AI_Text)
            .then(() => {
                // optional: add visual feedback copy was successful, like a toast notifcation or msg
                console.log("text copied to system clipboard")
                setCopyMessage('Text copied!')
                setTimeout(() => setCopyMessage(''), 2000) // Message disappears after 2 seconds
            })
    }

    return (
        <div className='copy-container'>
            <span className="copy-message" role="status">{copyMessage}</span>
            <Button
                onClick={handleCopy}
                className='copy-button'
                variant='contained'
                aria-label='copy recipe to clipboard'
            >
                Copy Text
            </Button>
        </div>
    )
}