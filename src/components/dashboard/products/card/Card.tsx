import { useState } from 'react';
import { IoIosHeartEmpty, IoIosStar, IoMdAdd, IoMdHeart } from 'react-icons/io';
import style from './Card.module.css';

type CardProps = {
  price: number;
  name: string;
  imageUrl: string;
  discount: number;
};

export const Card = ({ price, name, imageUrl, discount }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className={style.container}>
      <span className={style.discount}>{discount}% OFF</span>
      <button
        className={style.buttonFavorite}
        aria-label='Adicionar aos favoritos'
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
      </button>
      <a
        className={style.containerImage}
        href='/'
        aria-label={name}
      >
        <img
          src={imageUrl}
          alt={name}
        />
      </a>
      <div className={style.containerInfo}>
        <div className={style.info}>
          <span>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </span>
          <p className={style.infoDescription}>{name}</p>
          <p className={style.infoPrice}>
            <span>R$</span>
            {price.toFixed(2)}
          </p>
        </div>
        <button className={style.button}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};
