import { FC } from 'react';

import { Category } from '@ui';

import { CATEGORIES } from './categories.constants';

import styles from './categories.module.scss';

const Categories: FC = () => (
  <section className={styles.categories__container}>
    {CATEGORIES.map(category => <Category key={category.id} item={category} />)}
  </section>
);

export default Categories;