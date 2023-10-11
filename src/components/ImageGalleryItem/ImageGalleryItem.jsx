import css from './ImageGalleryItem.module.css';
export function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <li key={id} className={css.galleryItem}>
          <img className={css.galleryImage} src={webformatURL} alt={tags} />
        </li>
      ))}
    </>
  );
}
