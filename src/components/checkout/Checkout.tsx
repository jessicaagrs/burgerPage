import { IoIosArrowForward } from 'react-icons/io';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Title } from '../globals/Title';
import { Address } from './address/Address';
import { Balance } from './balance/Balance';
import style from './Checkout.module.css';
import { Header } from './header/Header';

const itemsOrder = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    imageUrl: 'src/assets/orders/pizza.png',
    price: 49.9,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Cheese Burger',
    imageUrl: 'src/assets/products/burguer1.png',
    price: 89.9,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Massa Spaguetti',
    imageUrl: 'src/assets/orders/pasta.png',
    price: 29.9,
    quantity: 1,
  },
];

export default function Checkout() {
  return (
    <aside className={style.container}>
      <Header />
      <Balance />
      <Address />
      <div className={style.containerItems}>
        <Title
          tag='h4'
          contentText='Itens do pedido'
          className={style.title}
        />
        <div className={style.containerItemsCard}>
          {itemsOrder.map(item => (
            <div
              key={item.id}
              className={style.card}
            >
              <div className={style.cardImage}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  width={64}
                  height={64}
                />
                <div className={style.cardQuantity}>
                  <h5>{item.name}</h5>
                  <p>x {item.quantity}</p>
                </div>
              </div>
              <div className={style.cardPrice}>
                <p>
                  <span>R$</span>
                  {item.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.divisor} />
      <div className={style.containerFinish}>
        <div className={style.containerFinishTax}>
          <p>Taxa do serviço</p>
          <p>
            <span>R$</span> 9,90
          </p>
        </div>
        <div className={style.containerFinishTotal}>
          <p>Total</p>
          <p>
            <span>R$</span> 175,60
          </p>
        </div>
        <button className={style.buttonCupom}>
          <IoFastFoodOutline />
          Inserir cupom
          <IoIosArrowForward />
        </button>
        <button className={style.buttonFinish}>Finalizar pedido</button>
      </div>
    </aside>
  );
}
