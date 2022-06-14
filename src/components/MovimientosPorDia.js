import { Box, Center, Heading, Stack, Text, VStack, Divider, Button, Icon, useToast } from 'native-base'
import React, { useEffect } from 'react'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@native-base/icons'

export default function MovimientosPorDia(props) {
    useEffect(() => {
        console.log(props)


    }, [])
    const toast = useToast();
    const id = "test-toastm";

    const showToast = () => {
        if (!toast.isActive(id)) {
            toast.show({
                id,
                render: () => {
                    return <Box bg="warning.300" px="8" py="5" rounded="sm" mb={5}>
                        No se puede cerrar el mes sin ventas 
                    </Box>;
                }
            })
        }
    }
    return (
        <Box>
            <VStack space="2.5" mt="4" px="8" justifyContent={'center'} alignItems={'center'}>
                <Heading size="md" color={'#ffffff'}>Movimientos por dia
                </Heading>
                <Stack direction="row" mt="1.5" space={3} justifyContent={'space-between'}>
                    <Box>
                        <Center size="24" bg="red.300" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                            <Heading size="xs">Retiros</Heading>
                            <Text>${props.retiros}</Text>
                        </Center>
                    </Box>
                    <Box>
                        <Center bg="green.200" size="24" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                            <Heading size="xs">Ingresos</Heading>
                            <Text fontWeight={'bold'}>${props.ingresos}</Text>
                        </Center>
                    </Box>
                    <Box>
                        <Center size="24" bg="red.300" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                            <Heading size="xs">Gastos</Heading>
                            <Text>${props.gastos}</Text>
                        </Center>
                    </Box>
                </Stack>
                <Center size="16" bg="green.400" width={'90%'} rounded="sm" _text={{
                    color: "warmGray.50",
                    fontWeight: "medium"
                }} shadow={"3"}>
                    <Heading size="xs">Boleta</Heading>
                    <Text>Boleta ${props.boleta}</Text>
                </Center>
                <Center size="32" bg="green.400" width={'90%'} rounded="sm" _text={{
                    color: "warmGray.50",
                    fontWeight: "medium"
                }} shadow={"3"}>
                    <Heading size="xs">Ganancia del dia</Heading>
                    <Text fontWeight={'bold'}>${props.gananciaDiaria}</Text>
                </Center>
            </VStack>
            <Stack justifyContent={'center'} direction="row" mb="2.5" mt="1.5" space={3}>
                <Button variant={'solid'} bg={'cyan.400'} width={'40%'} onPress={() => props.listado?.length > 0 ? props.newDay() : props.toast()} leftIcon={<Icon as={AntDesign} name="calendar" size="xl" />}>
                    <Text fontWeight={'bold'} color={'white'}>Nuevo dia</Text>
                </Button>
                <Button variant={'solid'} bg={'cyan.400'} width={'40%'} onPress={() => props.listadoSemanal?.length > 0 ? props.newMonth() : showToast()} leftIcon={<Icon as={MaterialCommunityIcons} size="xl" name="calendar-refresh" color="warmGray.50" _dark={{
                    color: "warmGray.50"
                }} />}>
                    <Text fontWeight={'bold'} color={'white'}>Nuevo mes</Text>
                </Button>
            </Stack>
            <Divider />
        </Box>
    )
}

