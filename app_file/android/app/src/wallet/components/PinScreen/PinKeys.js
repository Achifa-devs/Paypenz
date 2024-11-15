import React from 'react'

export default function PinKeys() {

    let keys = [
        1,2,3,4,5,6,7,8,9,0
    ]
  return (
    <>
        <View style={{
            height: '45%',
            width: '100%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>

            {
                keys.map(item => 
                
                    <View style={{
                        height: '25%',
                        width: '33.3%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>{item}</Text>
                    </View>
                )
            }



        </View>
    </>
  )
}
