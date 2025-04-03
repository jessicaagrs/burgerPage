import { Banner } from './banner/Banner';
import { Categories } from './categories/Categories';
import style from './Dashboard.module.css';
import { Header } from './header/Header';

export default function Dashboard() {
  return (
    <main className={style.container}>
      <Header />
      <Banner />
      <Categories />
    </main>
  );
}
