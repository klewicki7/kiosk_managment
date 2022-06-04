import { Box, Button, Heading, ScrollView, Stack, Text, VStack } from 'native-base'
import React, { useEffect } from 'react'

function HistorialMovimientosPorDia(props) {
    const [listaMovimientosPorDia, setListaMovimientosPorDia] = React.useState(props.listado);
        useEffect(() => {
            setListaMovimientosPorDia(props.listado);
        }, [props.listaMovimientosPorDia])

    return (
        <Box pb={'110%'}>
                <Box justifyContent={'center'} alignItems={'center'} mt={'5'}>
                    <Button width={'50%'} onPress={() => props.recalcular()} alignItems={'center'} rounded={50} bg="cyan.400" >Recalcular</Button>
                </Box>
                <VStack mt={5} space={4} alignItems="center">
                    {
                        listaMovimientosPorDia?.map((movimiento, index) => {
                            return (
                                <Box w="80" h="16" bg="cyan.100" rounded="md" shadow={3} key={index}>
                                    <Heading textAlign={'center'} color={(movimiento.tipoMovimiento == 'ingreso' ? 'green.500' : movimiento.tipoMovimiento == 'retiro' ? 'blueGray.400' : 'red.400')} >{
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