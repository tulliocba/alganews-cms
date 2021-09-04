import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Confirm } from "../../app/components/Confirm/Confirm";

interface ConfirmProps {
    title: string;
    onConfirm?: () => any;
    onCancel?: () => any
}

export default function confirm({ title, onConfirm, onCancel }: ConfirmProps) {
    setTimeout(() => {
        confirmAlert({
            overlayClassName: "confirm-overlay",
            customUI: ({ onClose }) => {
                return (
                    <Confirm
                        title={title}
                        onConfirm={() => {
                            if (onConfirm) onConfirm();

                            onClose();
                        }}

                        onCancel={() => {
                            if (onCancel) onCancel()
                            onClose();
                        }}
                    />
                );
            }
        });
    }, 0);
}