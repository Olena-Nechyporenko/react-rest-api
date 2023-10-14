import css from './Button.module.css';
export function Button({ children, onClick, ...allyProps }) {
  return (
    <div className={css.buttonWrapper}>
      <button
        className={css.button}
        type="button"
        name="load"
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  );
}
