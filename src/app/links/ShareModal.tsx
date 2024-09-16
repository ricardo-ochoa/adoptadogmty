import React from 'react';
import { ShareSocial } from 'react-share-social';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ShareModalProps {
  url: string;
  socialTypes: string[];
  style?: React.CSSProperties;
  isOpen?: boolean;
  onClose?: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ url, socialTypes, style, isOpen = true, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

      <div className="bg-white p-4 rounded-lg shadow-lg relative w-full m-2 md:max-w-[400px]">

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <h2 className="text-lg mb-4 text-center">Compártenos con ♥️ 🫶🏻 🐕🐩🐈🐈‍⬛</h2>

        <div className="flex justify-center mb-4">
          <Image
            src="/links/qrcode.svg"
            alt="Código QR"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>

        <ShareSocial
          url={url}
          socialTypes={socialTypes}
          style={style}
        />
      </div>
    </div>
  );
};

export default ShareModal;
