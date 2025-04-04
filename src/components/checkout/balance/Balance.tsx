import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { Title } from '../../globals/Title';
import style from './Balance.module.css';

export const Balance = () => {
  return (
    <div className={style.container}>
      <Title
        tag='h4'
        contentText='Saldo atual'
      />
      <div className={style.containerInfo}>
        <div className={style.containerInfoBalance}>
          <p>Saldo</p>
          <span>R$ 500.00</span>
        </div>
        <div className={style.containerInfoButtons}>
          <div className={style.containerButton}>
            <button>
              <GiReceiveMoney />
            </button>
            <span>Recarregar</span>
          </div>
          <div className={style.containerButton}>
            <button>
              <GiPayMoney />
            </button>
            <span>Transferir</span>
          </div>
        </div>
      </div>
    </div>
  );
};
