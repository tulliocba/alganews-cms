import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Info } from "../../app/components/Info/Info";

interface InfoProps {
    title: string;
    description: string;
}

export default function info({ title, description }: InfoProps) {
    setTimeout(() => {
        confirmAlert({
            overlayClassName: "info-overlay",
            customUI: ({ onClose }) => {
                return (
                    <Info
                        title={title}
                        description={description}
                    />
                );
            }
        });
    }, 0);
}