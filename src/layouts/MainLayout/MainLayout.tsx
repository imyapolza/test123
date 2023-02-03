import { Header } from 'components/Header';
import { Props } from './MainLayout.types';

export function MainLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
