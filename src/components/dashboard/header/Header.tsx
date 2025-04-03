import { Title } from '../../globals/Title';
import { IoSearchOutline } from 'react-icons/io5';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.container}>
      <Title
        tag='h2'
        contentText='Olá, John Doe'
      />
      <form>
        <input
          type='text'
          placeholder='Pesquisar por refeições...'
          aria-label='Buscar por refeições'
          className={style.searchInp}
        />
        <IoSearchOutline />
      </form>
    </header>
  );
};
