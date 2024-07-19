import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

interface TableFooterProps {
  pageCount: number;
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  nextPage: () => void;
  previousPage: () => void;
}

const TableFooter: React.FC<TableFooterProps> = ({ pageCount, pageIndex, setPageIndex, canPreviousPage, canNextPage, nextPage, previousPage }) => {
  return (
    <Card style={styles.footer}>
      <Button disabled={!canPreviousPage} onPress={previousPage}>Página Anterior</Button>
      <Text style={styles.pageInfo}>Página {pageIndex + 1} de {pageCount}</Text>
      <Button disabled={!canNextPage} onPress={nextPage}>Página Siguiente</Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
  },
  pageInfo: {
    fontSize: 14,
  },
});

export default TableFooter;
