import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.gallery}>
      {images.map(img => (
        <ImageGalleryItem key={img.id} image={img} onClick={onClick} />
      ))}
    </ul>
  );
}
