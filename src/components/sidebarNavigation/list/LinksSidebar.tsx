import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { IoFastFoodOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdHistory, MdOutlineDeliveryDining } from 'react-icons/md';
import { TbMessage, TbMessage2Heart } from 'react-icons/tb';
import style from './LinksSidebar.module.css';

export const LinksSidebar = () => {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>
        <a href='/'>
          <IoFastFoodOutline />
          Dashboard
        </a>
      </li>
      <li className={style.listItem}>
        <a href='/'>
          <MdOutlineDeliveryDining />
          Pedidos
        </a>
      </li>
      <li className={style.listItem}>
        <a href='/'>
          <TbMessage2Heart />
          Favoritos
        </a>
      </li>
      <li className={style.listItem}>
        <a href='/'>
          <TbMessage />
          Mensagens
        </a>
      </li>
      <li className={style.listItem}>
        <a href='/'>
          <MdHistory />
          Histórico
        </a>
      </li>
      <li className={style.listItem}>
        <a href='/'>
          <FaMoneyBillTransfer />
          Cartões
        </a>
      </li>
      <li className={style.listItem}>
        <a href='/'>
          <IoSettingsOutline />
          Configurações
        </a>
      </li>
    </ul>
  );
};
