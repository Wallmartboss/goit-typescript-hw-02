import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  return (
    <button className={s.btn} onClick={() => setPage(prev => prev + 1)}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
