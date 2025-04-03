import { Title } from '../../globals/Title';
import style from './Banner.module.css';

export const Banner = () => {
  return (
    <div className={style.container}>
      <Title
        tag='h2'
        contentText='Obtenha o seu voucher e até 20% de desconto na sua compra'
        className={style.titleBanner}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        velit! Officiis facere quasi recusandae totam nostrum non quae quas
        porro?
      </p>
    </div>
  );
};
