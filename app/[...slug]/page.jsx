import DefaultPage from '../../src/components/DefaultPage';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function CatchAllPage() {
  return <DefaultPage />;
}
