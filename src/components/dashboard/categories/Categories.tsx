import baked from '../../../assets/categories/Baked.svg';
import burger from '../../../assets/categories/Burger.svg';
import chicken from '../../../assets/categories/Chicken.svg';
import coffee from '../../../assets/categories/Coffee.svg';
import fast from '../../../assets/categories/Fast.svg';
import fish from '../../../assets/categories/Fish.svg';
import { Link } from '../../globals/Link';
import { Title } from '../../globals/Title';
import style from './Categories.module.css';

export const Categories = () => {
  return (
    <section className={style.container}>
      <div className={style.containerTitle}>
        <Title
          tag='h4'
          contentText='Categorias'
        />
        <Link />
      </div>
      <ul className={style.list}>
        <li>
          <a
            href='/'
            className={style.listItem}
          >
            <img
              src={baked}
              alt='Ícone de bolo'
              width={56}
              height={56}
            />
            <span>Bolos</span>
          </a>
        </li>
        <li>
          <a
            href='/'
            className={style.listItem}
          >
            <img
              src={burger}
              alt='Ícone de hambúrguer'
              width={56}
              height={56}
            />
            <span>Hambúrgueres</span>
          </a>
        </li>
        <li>
          <a
            href='/'
            className={style.listItem}
          >
            <img
              src={coffee}
              alt='Ícone de café'
              width={56}
              height={56}
            />
            <span>Cafés</span>
          </a>
        </li>
        <li>
          <a
            href='/'
            className={style.listItem}
          >
            <img
              src={chicken}
              alt='Ícone de frango'
              width={56}
              height={56}
            />
            <span>Frangos</span>
          </a>
        </li>
        <li>
          <a
            href='/'
            className={style.listItem}
          >
            <img
              src={fast}
              alt='Ícone de pizza'
              width={56}
              height={56}
            />
            <span>Pizza</span>
          </a>
        </li>
        <li>
          <a
            href='/'
            className={style.listItem}
          >
            <img
              src={fish}
              alt='Ícone de peixe'
              width={56}
              height={56}
            />
            <span>Peixes</span>
          </a>
        </li>
      </ul>
    </section>
  );
};
