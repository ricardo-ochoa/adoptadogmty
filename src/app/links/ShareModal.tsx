import React from 'react';
import { ShareSocial } from 'react-share-social';
import { X } from 'lucide-react'; // Importa el ícono X


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
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="float-right text-gray-500">
          <X size={24} />
        </button>
        <h2 className="text-lg mb-4">Compártenos con ♥️ 🫶🏻 🐕🐩🐈🐈‍⬛ </h2>
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
