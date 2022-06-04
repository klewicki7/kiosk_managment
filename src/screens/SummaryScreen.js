import React, { useEffect, useState } from 'react'
import { Text, Button, Box } from 'native-base'

function SummaryScreen(props) {
  useEffect(() => {

  }, [])
  return (
    <Box>
      <Text>SummaryScreen</Text>
      <Button onPress={() => props.suma(30)}>
        Sumar
      </Button>
      <Text>
        {props.test}
      </Text>
    </Box>
  )
}

export default SummaryScreen