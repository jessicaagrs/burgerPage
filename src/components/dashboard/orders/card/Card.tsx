import { IoMdHeart } from 'react-icons/io';
import style from './Card.module.css';

type CardProps = {
  product: string;
  price: number;
  km: number;
  time: number;
  imageUrl: string;
};

export const Card = ({ product, price, km, time, imageUrl }: CardProps) => {
  return (
    <div className={style.card}>
      <button
        className={style.buttonFavorite}
        disabled
      >
        <IoMdHeart />
      </button>
      <a
        href='/'
        className={style.link}
      >
        <img
          src={imageUrl}
          alt={product}
        />
      </a>
      <div className={style.cardInfo}>
        <p>{product}</p>
        <p>
          <span>R$</span>
          {price.toFixed(2)}
        </p>
        <p>{`${km} km * ${time} min`}</p>
      </div>
    </div>
  );
};
