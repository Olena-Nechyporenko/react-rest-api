import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
export function ImageGalleryItem({ image, onClick }) {
  function onClickImg(evt) {
    onClick(evt.target.dataset.img);
  }
  return (
    <li className={css.galleryItem}>
      <img
        onClick={onClickImg}
        className={css.galleryImage}
        src={image.webformatURL}
        alt={image.tags}
        data-img={image.largeImageURL}
      />
    </li>
  );
}
