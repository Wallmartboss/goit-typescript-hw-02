import s from './LoadMoreBtn.module.css'; 

const LoadMoreBtn = ({ setPage }) => {
  
    return (
        <button className={s.btn} onClick={() => setPage(prev => prev + 1)}>Load more</button>
         );
};
export default LoadMoreBtn;