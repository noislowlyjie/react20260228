import React from 'react';
import { atom, useAtom } from 'jotai';

export const flashMessageAtom = atom({
    message: '',
    type: 'info',
});

let timeoutId = null;

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessage = (message, type = 'info') => {
        // if there is an ongoing timer, clear it
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        setFlashMessage({ message, type });

        // clear the flash message after 3 seconds
        setTimeout(clearMessage, 3000);
    };

    const clearMessage = () => {

        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        setFlashMessage({ message: '', type: 'info' });
    };

    return {
        flashMessage,
        showMessage,
        clearMessage

    };
}

// 顯示 flash message 的元件
const FlashMessage = () => {
    const { flashMessage } = useFlashMessage();
    if (!flashMessage.message) return null;
    return (
        <div className={`flash-message flash-message-${flashMessage.type}`}
             style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999, padding: '12px 24px', borderRadius: 6, background: flashMessage.type === 'error' ? '#f44336' : '#2196f3', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
             >
            {flashMessage.message}
        </div>
    );
};

export default FlashMessage;
