import React, { useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    notes: string;
    onNotesChange: (newNotes: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, notes, onNotesChange }) => {
    const [localNotes, setLocalNotes] = useState(notes);

    useEffect(() => {
        setLocalNotes(notes);
    }, [notes]);

    const handleSave = () => {
        onNotesChange(localNotes);
        onClose(); // Close the modal after saving notes
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-amber-300 p-6 rounded-lg shadow-lg relative w-3/4 md:w-1/3">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-amber-400 hover:text-amber-300"
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h3 className="text-2xl font-bold mb-4">Course Notes</h3>
                <textarea
                    value={localNotes}
                    onChange={(e) => setLocalNotes(e.target.value)}
                    className="w-full p-2 bg-gray-800 border border-amber-700 rounded-lg text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <button
                    onClick={handleSave}
                    className="mt-4 bg-amber-500 text-gray-900 px-4 py-2 rounded-full hover:bg-amber-400 transition-colors"
                >
                    Save Notes
                </button>
            </div>
        </div>
    );
};

export default Modal;
