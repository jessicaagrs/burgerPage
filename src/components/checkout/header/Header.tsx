import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.container}>
      <nav>
        <ul className={style.list}>
          <li>
            <a href='/'>
              <img
                src='/orderMessage.svg'
                alt='ícone de mensagem de pedido'
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='/notification.svg'
                alt='ícone de notificação'
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='/settings.svg'
                alt='ícone de configurações'
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </nav>
      <a
        href='/'
        className={style.photoUser}
      >
        <img
          src='src/assets/user/user.png'
          alt='foto de perfil do usuário'
          width={50}
          height={50}
        />
      </a>
    </header>
  );
};
