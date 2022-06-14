import React, { useEffect } from 'react'
import { Button, Box, Icon, IconButton, Modal, FormControl, Input, Select, CheckIcon, Center, ScrollView, useToast } from 'native-base'
import { AntDesign, MaterialCommunityIcons } from '@native-base/icons'
import MovimientosPorDia from '../components/MovimientosPorDia';
import HistorialMovimientosPorDia from '../components/HistorialMovimientosPorDia';
import moment from 'moment';


export default function SummaryScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);


  useEffect(() => {
    console.log(props)


  }, [])


  let monto = 0;
  let tipoMovimiento = '';
  function onSave() {
    let hora = moment().format('HH:mm');
    props.newHistory([{ tipoMovimiento: tipoMovimiento, monto: monto, hora: hora }]);
    setModalVisible(false);
  }
  const toast = useToast();
  const id = "test-toast";
  

  function MyModal() {
    return (
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" >
          <Modal.CloseButton />
          <Modal.Header bg={'#155e75'} _text={{ color: 'white' }}>Nuevo movimiento</Modal.Header>
          <Modal.Body>
            <FormControl justifyContent={'center'} alignItems={'center'}>
              <Box w="3/4" maxW="100%" alignItems={'center'} justifyContent={'center'}>
                <Select
                  onValueChange={(value) => tipoMovimiento = value}
                  minWidth="100%" width={'100%'} accessibilityLabel="Choose Service" placeholder="Tipo de movimiento" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} >
                  <Select.Item label="Boleta" value="boleta" />
                  <Select.Item label="Ingreso" value="ingreso" />
                  <Select.Item label="Gasto" value="gasto" />
                  <Select.Item label="Retiro" value="retiro" />
                </Select>
              </Box>
            </FormControl >
            <FormControl mt="3" justifyContent={'center'} alignItems={'center'}>
              <Input
                onChange={(e) => monto = e.nativeEvent.text}
                keyboardType='numeric'
                w={{
                  base: "75%",
                  md: "25%"
                }} InputLeftElement={<Icon as={<MaterialCommunityIcons name="currency-usd" />} size={5} ml="2" color="muted.400" />} placeholder="Monto" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                Cancelar
              </Button>
              <Button onPress={() => {
                onSave();
              }}>
                Guardar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
  }

  return (
    <Box bg={'#155e75'}>
      <MovimientosPorDia toast={() => {
        if (!toast.isActive(id)) {
          toast.show({
            id,
            render: () => {
              return <Box bg="warning.300" px="8" py="5" rounded="sm" mb={5}>
                      No hay movimientos en el dia de hoy.
                    </Box>;
            }
          })
        }
      }} listadoSemanal={props.listadoSemanal} listado={props.listaMovimientosPorDia} boleta={props.boleta} newMonth={() => props.newMonth()} newDay={() => props.newDay()} retiros={props.retiros} gastos={props.gastos} ingresos={props.ingresos} gananciaDiaria={props.gananciaDiaria} />
      <ScrollView>
        <HistorialMovimientosPorDia listado={props.listaMovimientosPorDia} />
      </ScrollView>
      <Box top={'600'} alignSelf={'flex-end'} right={'4%'} position={'absolute'} >
        <IconButton variant="solid" onPress={() => setModalVisible(true)} borderRadius="full" size="lg" bg="cyan.400" icon={<Icon as={AntDesign} size="6" name="plus" color="warmGray.50" _dark={{
          color: "warmGray.50"
        }} />} />
      </Box>
      <MyModal />
    </Box>
  )
}
