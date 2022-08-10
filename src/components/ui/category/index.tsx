import { FC } from 'react';

import { CategoryItem } from '@types';

import styles from './category.module.scss';

type CategoryProps = {
  item: CategoryItem
};
const Category: FC<CategoryProps> = ({ item }) => {

  return (
    <article className={styles.category__container}>
      <div
        className={styles.category__background}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className={styles.category__body}>
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
      </div>
    </article>
  );
};

export { Category };