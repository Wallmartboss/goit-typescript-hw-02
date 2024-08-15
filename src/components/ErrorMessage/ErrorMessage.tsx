import s from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return <p className={s.errorText}> Something went wrong! Try again... </p>;
};

export default ErrorMessage;
