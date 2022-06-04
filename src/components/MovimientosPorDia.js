import { Box, Center, Heading, Stack, Text, VStack, Divider } from 'native-base'
import React, { useEffect } from 'react'

export default function MovimientosPorDia(props) {
    useEffect(() => {
        console.log(props)


    }, [])

    return (
        <VStack space="2.5" mt="4" px="8" justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color={'#ffffff'}>Movimientos por dia</Heading>
            <Stack direction="row" mb="2.5" mt="1.5" space={3} justifyContent={'space-between'}>
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
            <Center size="32" bg="green.400" width={'90%'} rounded="sm" _text={{
                color: "warmGray.50",
                fontWeight: "medium"
            }} shadow={"3"}>
                <Heading size="xs">Ganancia del dia</Heading>
                <Text>${props.gananciaDiaria}</Text>
            </Center>
            <Divider />
        </VStack>
    )
}

