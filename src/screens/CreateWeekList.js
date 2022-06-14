import React from 'react'
import { Text, Button, Box, ZStack, Stack, IconButton, Icon, Divider, ScrollView } from 'native-base'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@native-base/icons'
import DataTable, { COL_TYPES } from 'react-native-datatable-component';

function CreateWeekList() {
  return (
    <DataTable
      data={[
        { Item : 'Muhammad Rafeh', Cantidad: 21, Acciones: 'male' },
        { Item : 'Muhammad Akif', Cantidad: 22, Acciones: 'male' },
        { Item : 'Muhammad Umar', Cantidad: 21, Acciones: 'male' },
        { Item : 'Amna Shakeel', Cantidad: 22, Acciones: 'female' },
        { Item : 'Muhammad Ammar', Cantidad: 20, Acciones: 'male' },
        { Item : 'Muhammad Moiz', Cantidad: 13, Acciones: 'male' }
      ]} // list of objects
      colNames={['Cantidad', 'Item', 'Acciones']} //List of Strings
      colSettings={[
        { name: 'Cantidad', type: COL_TYPES.STRING, width: '30%' },
        { name: 'Item', type: COL_TYPES.INT, width: '40%' },
        { name: 'Acciones', type: COL_TYPES.CHECK_BOX, width: '30%' }
      ]}//List of Objects
      noOfPages={2} //number
      backgroundColor={'#155e75'} //Table Background Color
      headerLabelStyle={{ color: 'white', fontSize: 12 }} //Text Style Works
      onRowSelect={(rowData) => {
        console.log(rowData)
      }}
    />

  )
}

export default CreateWeekList