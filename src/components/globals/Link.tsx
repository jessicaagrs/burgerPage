import { IoIosArrowForward } from 'react-icons/io';
import style from './Link.module.css';

export const Link = () => {
  return (
    <a
      href='/'
      className={style.link}
    >
      Ver todas
      <IoIosArrowForward />
    </a>
  );
};
