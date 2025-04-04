import { Link } from '../../globals/Link';
import { Title } from '../../globals/Title';
import { Card } from './card/Card';
import style from './PopularProducts.module.css';

const products = [
  {
    id: 1,
    name: 'Burger de Peixe',
    imageUrl: 'src/assets/products/burguer1.png',
    price: 59.9,
    discount: 15,
  },
  {
    id: 2,
    name: 'Burger de Frango',
    imageUrl: 'src/assets/products/burguer2.png',
    price: 49.9,
    discount: 10,
  },
  {
    id: 3,
    name: 'Burger de Carne',
    imageUrl: 'src/assets/products/burguer3.png',
    price: 39.9,
    discount: 5,
  },
];

export const PopularProducts = () => {
  return (
    <section className={style.container}>
      <div className={style.containerTitle}>
        <Title
          tag='h4'
          contentText='Mais pedidos'
        />
        <Link />
      </div>
      <div className={style.containerProducts}>
        {products.map(product => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};
