import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import SimpleTable from './SimpleTable';

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Nombre', accessor: 'name' },
  { header: 'Edad', accessor: 'age' },
  { header: 'Imagen', accessor: 'image', isImage: true },
  { header: 'Precio', accessor: 'price', isPrice: true },
];

const data = [
  { id: 1, name: 'Juan Pérez', age: 28, image: 'https://via.placeholder.com/40', price: 5000 },
  { id: 2, name: 'María García', age: 34, image: 'https://via.placeholder.com/40', price: 7000 },
  { id: 3, name: 'Carlos López', age: 45, image: 'https://via.placeholder.com/40', price: 9000 },
  // Agrega más datos de prueba aquí
];

const filters = [
  { index: '1', name: 'Filter 1' },
  { index: '2', name: 'Filter 2' },
];

const renderActionButtons = (row: any) => (
  <Button onPress={() => console.log(`Action for row ${row.id}`)}>Action</Button>
);

const MyTableComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <SimpleTable
        renderActionButtons={renderActionButtons}
        columns={columns}
        data={data}
        nameTable="Ejemplo de Tabla"
        filters={filters}
        additionalButton={<Button onPress={() => console.log('Button clicked')}>Botón Adicional</Button>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default MyTableComponent;
