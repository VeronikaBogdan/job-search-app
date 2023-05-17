import { Layout } from '@/components/layout/layout';

import { EmptyState } from '@/components/empty-state/empty-state';
import { Cards } from '@/components/cards/cards';

const FavoritesPage = () => {
  return (
    <Layout>
      {/* <Cards /> */}
      <EmptyState />
    </Layout>
  );
};

export default FavoritesPage;
