import { Box, Button, Heading, Icon, IconButton, ScrollView, Stack, Text, VStack } from 'native-base'
import React, { useEffect } from 'react'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@native-base/icons'

function HistorialMovimientosPorDia(props) {
    const [listaMovimientosPorDia, setListaMovimientosPorDia] = React.useState(props.listado);
    useEffect(() => {
        props.listado === undefined ?
            setListaMovimientosPorDia([]) :
            setListaMovimientosPorDia(props.listado);
    }, [props.listado])

    return (
        <Box pb={'110%'}>
            <Stack justifyContent={'center'} direction="row" mb="2.5" mt="1.5" space={3}>
                <Button
                    width={'50%'} onPress={() => props.recalcular()} alignItems={'center'} rounded={50} bg="cyan.400" >Recalcular</Button>
                <IconButton

                    bg="cyan.400"
                    rounded={50}
                    icon={<Icon as={Entypo} size="6" name="cycle" color="warmGray.50" _dark={{
                        color: "warmGray.50"
                    }} />}
                    onPress={() => props.newDay()} ></IconButton>
                <IconButton

                    bg="cyan.400"
                    rounded={50}
                    icon={<Icon as={MaterialCommunityIcons} size="6" name="calendar-refresh" color="warmGray.50" _dark={{
                        color: "warmGray.50"
                    }} />}
                    onPress={() => props.newMonth()} ></IconButton>
            </Stack>
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