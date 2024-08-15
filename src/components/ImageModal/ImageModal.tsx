import s from './ImageModal.module.css';
import ReactModal from 'react-modal';

interface ImageModalProps {
  // key: string;
  largeImage: string;
  alt: string;
  isOpen: boolean;
  onRequestClose: () => void;
  onAfterOpen: () => void;
  onAfterClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  largeImage,
  alt,
  isOpen,
  onRequestClose,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={() => console.log('Modal has been registered and opened')}
      onAfterClose={() => console.log('Modal has been unregistered and closed')}
      onRequestClose={onRequestClose}
      contentLabel={alt}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div>
        <button onClick={onRequestClose} className={s.btn} type="button">
          X
        </button>
        <img className={s.card} src={largeImage} alt={alt} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
