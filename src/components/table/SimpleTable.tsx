import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'
import { Card } from 'react-native-paper';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';

interface Column {
  header: string;
  accessor: string;
  isImage?: boolean;
  isPrice?: boolean;
}

interface SimpleTableProps {
  renderActionButtons?: (row: any) => React.ReactNode;
  columns: Column[];
  data: any[];
  nameTable: string;
  filters: any[];
  additionalButton?: React.ReactNode;
}

const SimpleTable: React.FC<SimpleTableProps> = ({ renderActionButtons, columns, data, nameTable, filters, additionalButton }) => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [pagination, setPagination] = useState<{ pageIndex: number; pageSize: number }>({ pageIndex: 0, pageSize: 6 });

  const filteredData = data.filter(row =>
    columns.some(col => String(row[col.accessor]).toLowerCase().includes(globalFilter.toLowerCase()))
  );

  const currentData = filteredData.slice(
    pagination.pageIndex * pagination.pageSize,
    (pagination.pageIndex + 1) * pagination.pageSize
  );

  const formatPrice = (price: number) => typeof price === 'number' ? price.toLocaleString() : price;

  const headers = columns.map(col => col.header);
  if (renderActionButtons) headers.push('Acciones');

  const rows = currentData.map((row, rowIndex) => {
    const cells = columns.map((col, colIndex) => {
      if (col.isImage && row[col.accessor]) {
        return <Image source={{ uri: row[col.accessor] }} style={styles.image} key={colIndex} />;
      } else if (col.isPrice) {
        return `$ ${formatPrice(row[col.accessor])}`;
      } else {
        return row[col.accessor];
      }
    });
    if (renderActionButtons) {
      cells.push(renderActionButtons(row));
    }
    return cells;
  });

  return (
    <ScrollView style={styles.container}>
      <TableHeader 
        title={nameTable} 
        filters={filters}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        additionalButton={additionalButton}
      />
      <Card style={styles.card}>
        <ScrollView horizontal>
          <Table borderStyle={styles.tableBorder}>
            <Row data={headers} style={styles.head} textStyle={styles.headText} />
            <Rows data={rows} textStyle={styles.text} />
          </Table>
        </ScrollView>
      </Card>
      <TableFooter 
        pageCount={Math.ceil(filteredData.length / pagination.pageSize)}
        pageIndex={pagination.pageIndex}
        setPageIndex={(pageIndex: number) => setPagination(prev => ({ ...prev, pageIndex }))}
        canPreviousPage={pagination.pageIndex > 0}
        canNextPage={(pagination.pageIndex + 1) * pagination.pageSize < filteredData.length}
        nextPage={() => setPagination(prev => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
        previousPage={() => setPagination(prev => ({ ...prev, pageIndex: prev.pageIndex - 1 }))}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginTop: 16,
    padding: 8,
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f1f1',
  },
  headText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default SimpleTable;
