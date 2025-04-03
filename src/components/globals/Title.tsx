import style from './Title.module.css';

type TitleProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  contentText: string;
  className?: string;
};

export const Title = ({ tag, contentText, className }: TitleProps) => {
  if (tag === 'h1') {
    return (
      <h3 className={`${style.titlePage} ${style.bold} ${className}`}>
        {contentText}
      </h3>
    );
  }
  if (tag === 'h2') {
    return (
      <h2 className={`${style.subtitle} ${style.bold} ${className}`}>
        {contentText}
      </h2>
    );
  }
  if (tag === 'h3') {
    return (
      <h3 className={`${style.cardTitle} ${style.bold} ${className}`}>
        {contentText}
      </h3>
    );
  }
  if (tag === 'h4') {
    return (
      <h3 className={`${style.sectionTitle} ${style.bold} ${className}`}>
        {contentText}
      </h3>
    );
  }
  return null;
};
