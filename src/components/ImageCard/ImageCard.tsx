import s from './ImageCard.module.css';
import { ImageItem } from '../types';

// Визначення типа для пропсів компонента ImageCard
interface ImageCardProps {
  item: ImageItem;
  openModal: (largeImage: string, alt: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  const {
    alt_description,
    urls: { small, regular },
  } = item;

  return (
    <img
      src={small}
      alt={alt_description}
      className={s.card}
      onClick={() => {
        console.log(
          // для перевірки отриманих параметрів
          'Opening modal with image:',
          regular,
          'alt:',
          alt_description
        );
        openModal(regular, alt_description);
      }}
    />
  );
};

export default ImageCard;
