import { Box, Button, Checkbox, Divider, Heading, Icon, IconButton, ScrollView, Stack, Text, VStack } from 'native-base'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@native-base/icons'

function HistorialMovimientosPorDia(props) {
    const [listaMovimientosPorDia, setListaMovimientosPorDia] = React.useState(props.listado);
    const [renderIngresos, setRenderIngresos] = React.useState(false);
    const [renderGastos, setRenderGastos] = React.useState(false);
    const [renderRetiros, setRenderRetiros] = React.useState(false);
    useEffect(() => {
        props.listado === undefined ?
            setListaMovimientosPorDia([]) :
            setListaMovimientosPorDia(props.listado);
    }, [props.listado])

    const renderMovimientos = (e, tipo) => {
        if (tipo == 'ingreso') {
            setRenderIngresos(e);
            setRenderGastos(false);
            setRenderRetiros(false);
        } else if (tipo == 'gasto') {
            setRenderGastos(e);
            setRenderIngresos(false);
            setRenderRetiros(false);
        } else if (tipo == 'retiro') {
            setRenderRetiros(e);
            setRenderGastos(false);
            setRenderIngresos(false);
        }
        let filtro = props.listado?.filter(movimiento => {
            if (e && tipo == "ingreso") {
                return movimiento.tipoMovimiento === 'ingreso'
            } else if (e && tipo == "gasto") {
                return movimiento.tipoMovimiento === 'gasto'
            } else if (e && tipo == "retiro") {
                return movimiento.tipoMovimiento === 'retiro'
            } else {
                return movimiento;
            }
        })
        setListaMovimientosPorDia(filtro);
    }
    return (
        <Box pb={'110%'}>
            <Box alignItems="center" mt={1}>
                <Stack direction={{
                    base: "row",
                    md: "row"
                }} space={3} alignItems="center">
                    <Checkbox
                        onChange={(e) => { renderMovimientos(e, 'ingreso') }}
                        bg={'#155e75'}  value="orange" _text={{ fontSize: 15, color: 'white' }} colorScheme="green" size="lg" icon={<Icon as={<MaterialCommunityIcons name="cash-plus" />} />} isChecked={renderIngresos}>Ingresos</Checkbox>
                    <Checkbox
                        onChange={(e) => { renderMovimientos(e, 'gasto') }}
                        bg={'#155e75'}  value="yellow" _text={{ fontSize: 15, color: 'white' }} colorScheme="yellow" size="lg" icon={<Icon as={<MaterialCommunityIcons name="cash-minus" />} />} isChecked={renderGastos}>
                        Gastos
                    </Checkbox>
                    <Checkbox
                        onChange={(e) => { renderMovimientos(e, 'retiro') }}
                        bg={'#155e75'}  colorScheme="red" value="red" size="lg" _text={{ fontSize: 15, color: 'white' }} icon={<Icon as={<MaterialCommunityIcons name="cash-refund" />} />} isChecked={renderRetiros}>
                        Retiros
                    </Checkbox>
                </Stack>
            </Box>
            <VStack mt={5} space={4} alignItems="center">
                {
                    listaMovimientosPorDia.length > 0 && listaMovimientosPorDia.map((movimiento, index) => {
                        return (
                            <Box w="80" h="16" bg="cyan.100" rounded="md" shadow={3} key={index}>
                                <Heading textAlign={'center'} color={(movimiento.tipoMovimiento == 'ingreso' ? 'green.500' : movimiento.tipoMovimiento == 'retiro' ? 'yellow.500' : 'red.500')} >{
                                    (movimiento.tipoMovimiento == 'ingreso' ? 'Ingreso de dinero' : movimiento.tipoMovimiento == 'retiro' ? 'Retiro de dinero' : 'Gasto de dinero')
                                }</Heading>
                                <Stack justifyContent={'center'} direction="row" mb="2.5" mt="1.5" space={3}>
                                    <Stack direction="row" >
                                        <Text fontWeight={'bold'} fontSize={15}>Hora: </Text>
                                        <Text>{movimiento.hora}</Text>
                                    </Stack>
                                    <Stack direction="row" >
                                        <Text fontWeight={'bold'} fontSize={15}>Monto: </Text>
                                        <Text>{movimiento.monto}</Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        )
                    })
                }

            </VStack>

        </Box>
    )
}

export default HistorialMovimientosPorDia