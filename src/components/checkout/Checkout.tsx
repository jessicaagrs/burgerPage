import { Address } from './address/Address';
import { Balance } from './balance/Balance';
import style from './Checkout.module.css';
import { Header } from './header/Header';

export default function Checkout() {
  return (
    <aside className={style.container}>
      <Header />
      <Balance />
      <Address />
    </aside>
  );
}
