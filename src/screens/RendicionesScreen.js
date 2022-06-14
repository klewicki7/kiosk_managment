import moment from 'moment';
import { Box, Button, Center, Divider, Stack, Text, VStack, ZStack } from 'native-base'
import React, { useEffect } from 'react'
import Timeline from "react-native-beautiful-timeline";

function RendicionesScreen(props) {
    const [rendicionesSemanales, setRendicionesSemanales] = React.useState(props.rendicionesSemanales)
    const [rendicionesMensuales, setRendicionesMensuales] = React.useState(props.gananciaPorMes)
    const [rendiciones, setRendiciones] = React.useState(rendicionesSemanales?.length > 0 ? rendicionesSemanales : rendicionesMensuales)
    const [actual, setActual] = React.useState(1)

    useEffect(() => {
        setRendicionesSemanales(props.rendicionesSemanales)
        if (rendicionesSemanales?.length > 0) {
            setRendiciones(rendicionesSemanales)
            setActual(1)
        } else if (rendicionesMensuales?.length > 0) {
            setRendiciones(rendicionesMensuales)
            setActual(2)
        } else {
            setRendiciones([])
            setActual(0)
        }
    }, [rendicionesSemanales])

    useEffect(() => {
        setRendicionesMensuales(props.gananciaPorMes)
        if (rendicionesSemanales?.length > 0) {
            setRendiciones(rendicionesSemanales)
            setActual(1)
        } else if (rendicionesMensuales?.length > 0) {
            setRendiciones(rendicionesMensuales)
            setActual(2)
        } else {
            setRendiciones([])
            setActual(0)
        }
    }, [rendicionesMensuales])


    return (
        <VStack backgroundColor='#155e75'>
            <Stack justifyContent={'space-around'} direction="row" mb="1.5" mt="3" ml={"2"}>
                <Box>
                    <Button
                        width={'32'}
                        bg={actual === 1 ? 'green.700' : 'cyan.400'}
                        onPress={() => {
                            [setRendiciones(rendicionesSemanales), setActual(1)]
                        }}
                    >
                        Semanal
                    </Button>
                </Box>
                <Divider orientation="vertical" bg={'#fffff'} thickness={4} />
                <Box>
                    <Button
                        width={'32'}
                        bg={actual === 2 ? 'green.700' : 'cyan.400'}
                        onPress={() => {
                            [setRendiciones(rendicionesMensuales), setActual(2)]
                        }}
                    >
                        Mensual
                    </Button>
                </Box>
            </Stack>
            {
                rendiciones.length == 0 && <Center mt={'50%'} paddingBottom={'200%'}>
                    <Text fontSize={'2xl'} color={'white'} >No hay rendiciones.</Text>
                </Center>
          }
            {
                rendiciones.length > 0 && actual != 0 ? <Timeline backgroundColor='#155e75' data={rendiciones} actual={actual} />
                    : <Box />

            }
        </VStack>
    )
}

export default RendicionesScreen