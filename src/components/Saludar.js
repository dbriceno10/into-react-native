// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Saludar({name = 'Nombre por Defecto'}) {
//   return (
//     <View>
//       <Text>{`Hola ${name}`}</Text>
//     </View>
//   )
// }

import { View, Text } from 'react-native'
import React from 'react'

export default function Saludar(props) {

  const {firstname, lastname} = props
  return (
    <View>
      <Text>{`Hola ${firstname} ${lastname}`}</Text>
    </View>
  )
}

Saludar.defaultProps = {
  firstname: 'Daniel',
  lastname: 'Briceno'
}