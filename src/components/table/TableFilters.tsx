import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Menu, Button } from 'react-native-paper';

interface TableFiltersProps {
  filters: { index: string; name: string }[];
  globalFilter: string;
  setGlobalFilter: (filter: string) => void;
}

const TableFilters: React.FC<TableFiltersProps> = ({ filters, globalFilter, setGlobalFilter }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.filtersContainer}>
      <TextInput
        mode="outlined"
        placeholder="Buscar"
        value={globalFilter}
        onChangeText={setGlobalFilter}
        style={styles.searchInput}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Filtros</Button>}
      >
        {filters.map((item) => (
          <Menu.Item key={item.index} onPress={() => {}} title={item.name} />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
  },
});

export default TableFilters;
