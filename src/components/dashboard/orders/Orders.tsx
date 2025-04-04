import { Link } from '../../globals/Link';
import { Title } from '../../globals/Title';
import { Card } from './card/Card';
import style from './Orders.module.css';

const recentOrders = [
  {
    id: 1,
    product: 'Comida japonesa',
    price: 85.25,
    km: 4.97,
    time: 21,
    imageUrl: 'src/assets/orders/japan.png',
  },
  {
    id: 2,
    product: 'Yakissoba',
    price: 95.25,
    km: 4.97,
    time: 21,
    imageUrl: 'src/assets/orders/pasta.png',
  },
  {
    id: 3,
    product: 'Pizza',
    price: 75.25,
    km: 4.97,
    time: 21,
    imageUrl: 'src/assets/orders/pizza.png',
  },
];

export default function RecentOrders() {
  return (
    <section className={style.container}>
      <div className={style.containerTitle}>
        <Title
          tag='h4'
          contentText='Pedidos recentes'
        />
        <Link />
      </div>
      <div className={style.containerOrders}>
        {recentOrders.map(order => (
          <Card
            key={order.id}
            {...order}
          />
        ))}
      </div>
    </section>
  );
}
