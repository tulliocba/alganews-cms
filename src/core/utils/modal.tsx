import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

interface ModalProps {
    children: React.ReactNode
}

export const modal = ({ children }: ModalProps) => {
    setTimeout(() => {
        confirmAlert({
            overlayClassName: 'modal-overlay',
            customUI: () => {
                return children
            }
        });
    }, 0)
}