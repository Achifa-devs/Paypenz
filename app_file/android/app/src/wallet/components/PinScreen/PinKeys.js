import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CloseSvg from '../../assets/close-circle-svgrepo-com.svg'
export default function PinKeys({
    updatePin,
    deletePin
}) {

    let keys = [
        1,2,3,4,5,6,7,8,9,0
    ]
  return (
    <>
        <View style={{
            height: 'auto',
            width: '100%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap', 
            padding: 0

        }}>

            {
                [
                    1,2,3,4,5,6,7,8,9,'',0,<CloseSvg height={20} width={20} />
                ].map((item, index) => 
                
                    <TouchableOpacity key={index} style={{
                        height: 70,
                        width: '33.3%',
                        display: 'flex',
                        color: '#000',
                        backgroundColor: '#fff',
                        fontSize: 17,
                        borderColor: '#efefef',
                        flexDirection: 'row',
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }} onPress={e => {
                        index === 11
                        ?
                        deletePin(item) 
                        :
                        updatePin(item) 
                    }}>
                        <Text style={{color: '#000', justifyContent: 'center', flexDirection: 'row', display: 'flex', alignItems: 'center', textAlign: 'center', width: '100%', fontSize: 17}}>{item}</Text>
                    </TouchableOpacity>
                )
            }



        </View>
    </>
  )
}
