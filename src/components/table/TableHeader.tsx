import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import TableFilters from './TableFilters';
import { Feather } from '@expo/vector-icons';

interface Filter {
  index: string;
  name: string;
}

interface TableHeaderProps {
  title: string;
  filters: Filter[];
  globalFilter: string;
  setGlobalFilter: (filter: string) => void;
  additionalButton?: React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title, filters, globalFilter, setGlobalFilter, additionalButton }) => {
  return (
    <Card style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerActions}>
          {additionalButton && additionalButton}
          <IconButton icon="filter" onPress={() => {}} />
        </View>
      </View>
      <TableFilters filters={filters} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TableHeader;
