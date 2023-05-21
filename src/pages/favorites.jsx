import { useEffect, useState } from 'react';

import { Layout } from '@/components/layout/layout';
import { EmptyState } from '@/components/empty-state/empty-state';
import { CardsList } from '@/components/cards/cards-list';

const FavoritesPage = () => {
  const [allFavorites, setAllFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      setAllFavorites(Object.keys(localStorage).filter((vacancy) => vacancy.slice(0, 8) === 'favorite'));
    }
  }, []);

  return <Layout>{!!allFavorites.length ? <CardsList vacanciesIds={allFavorites} /> : <EmptyState />}</Layout>;
};

export default FavoritesPage;
