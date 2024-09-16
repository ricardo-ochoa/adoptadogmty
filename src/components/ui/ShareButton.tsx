'use client'; // Indica que es un componente cliente
import { useState } from 'react';
import { Share } from 'lucide-react';
import ShareModal from '@/app/links/ShareModal';

const ShareButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <div className='mb-8 mt-4 animate__animated animate__fadeInDown animate__delay-1s z-50'>
                <button
                    onClick={handleOpen}
                    className="bg-white text-purple-700 border-2 border-purple-700 px-4 py-1.5 rounded-full flex items-center space-x-2 hover:bg-purple-100"
                >
                    <Share className="text-purple-700" size={20} />
                    <span>Compartir</span>
                </button>

            </div>
            {isOpen && <ShareModal url="https://www.adoptadogmty.com" socialTypes={['facebook', 'twitter', 'whatsapp', 'reddit']} isOpen={isOpen} onClose={handleClose} />}
        </>
    );
};

export default ShareButton;
