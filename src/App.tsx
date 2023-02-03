import { LeftMenu } from 'components/LeftMenu';
import { Table } from 'components/Table';
import { MainLayout } from 'layouts/MainLayout';
import styles from './App.style.module.scss';
import { table } from 'constants/table';

function App() {
  return (
    <MainLayout>
      <main className={styles.main}>
        <LeftMenu />
        <Table thead={table.thead} tbody={table.tbody} />
      </main>
    </MainLayout>
  );
}

export default App;
