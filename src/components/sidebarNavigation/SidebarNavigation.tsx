import { Title } from '../globals/Title';
import { Card } from './card/Card';
import { LinksSidebar } from './list/LinksSidebar';
import style from './SidebarNavigation.module.css';

export default function SidebarNavigation() {
  return (
    <aside className={style.container}>
      <Title
        tag='h1'
        contentText='BurgerDev'
      />
      <LinksSidebar />
      <Card />
    </aside>
  );
}
