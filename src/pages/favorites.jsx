import { Layout } from '@/components/layout/layout';

import { EmptyState } from '@/components/empty-state/empty-state';
import { Cards } from '@/components/cards/cards-list';

const FavoritesPage = () => {
  const favorites = Object.keys(localStorage).filter((vacancy) => vacancy.slice(0, 8) === 'favorite');

  return (
    <Layout>
      {/* <Cards vacanciesData={favorites} /> */}
      <EmptyState />
    </Layout>
  );
};

export default FavoritesPage;
