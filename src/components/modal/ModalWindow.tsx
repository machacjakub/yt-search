import styles from './Modal.module.css';

interface IProps {
    onClose: () => void;
    isOpen: boolean;
    children: any;
    tailwind?: string;
}

export const ModalWindow = ( {onClose, isOpen, children }: IProps ) => {
    return (
        <>
            {isOpen && (
                <div onClick={onClose} className={styles.modalBackdrop}>
                    <div onClick={( e ) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};