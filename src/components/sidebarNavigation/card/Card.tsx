import { Title } from '../../globals/Title';
import style from './Card.module.css';

export const Card = () => {
  return (
    <div className={style.container}>
      <Title
        tag='h3'
        contentText='Faça um upgrade na sua conta e ganhe um Voucher grátis'
        className={style.spaceTitle}
      />
      <button className={style.containerButton}>Upgrade</button>
      <img
        src='/detail-card.svg'
        alt='Imagem com várias bolinhas no top do card'
        width={22}
        height={29}
        className={style.containerImage}
      />
    </div>
  );
};
