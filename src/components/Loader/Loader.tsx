import { Triangle } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={s.ldr}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
