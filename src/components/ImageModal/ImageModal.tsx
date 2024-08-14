import s from './ImageModal.module.css';
import Modal from 'react-modal';

interface ImageModalProps {
  largeImage: string;
  alt: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  largeImage,
  alt,
  isOpen,
  onRequestClose,
}) => {
  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={alt}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button onClick={onRequestClose} className={s.btn} type="button">
        X
      </button>
      <img className={s.card} src={largeImage} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
