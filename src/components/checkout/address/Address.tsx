import { IoLocationOutline } from 'react-icons/io5';
import { Title } from '../../globals/Title';
import style from './Address.module.css';

export const Address = () => {
  return (
    <div className={style.container}>
      <Title
        tag='h4'
        contentText='Endereço'
        className={style.title}
      />
      <div className={style.containerStreet}>
        <span>
          <IoLocationOutline /> Elm Street, 23
        </span>
        <button>Alterar</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        magni voluptatem modi iusto possimus et.
      </p>
      <div className={style.containerButtonActions}>
        <button>Detalhes</button>
        <button>Observações</button>
      </div>
    </div>
  );
};
