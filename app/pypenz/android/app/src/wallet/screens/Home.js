import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import BalanceLabel from '../components/Home/BalanceBoard/BalanceLabel';
import BalanceValue from '../components/Home/BalanceBoard/BalanceValue';
import BalanceVisibility from '../components/Home/BalanceBoard/BalanceVisibility';
import AddMoney from '../components/Home/BalanceBoard/AddMoney';
import Currency from '../components/Home/BalanceBoard/Currency';

export default function Home() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  let primaryList = [
    {title: 'Transfer'}, 
    {title: 'Cash Out'}, 
    {title: 'To Paypenz'}, 
    {title: 'Transactions'}
  ]
  let secondaryList = [
    {title: 'Airtime'}, 
    {title: 'Data'}, 
    {title: 'Betting'}, 
    {title: 'Internet'},
    {title: 'Electricity'},
    {title: 'Cable'},
    {title: 'School/Exam'},
    {title: 'Gift Card'}
  ]
  return ( 
    <>

      <View style={styles.Home}>

        {/* Balance Board Jsx */}
        <View style={styles.BalanceBoard}>

          <View style={styles.BalanceLeftBoard}>

            <View style={styles.BalanceLabel}>
              <BalanceLabel />
              <BalanceVisibility />
            </View>
            <BalanceValue />

          </View>

          <View style={styles.BalanceRightBoard}>
            <Currency />
            <AddMoney />
          </View>

        </View>

        {/* Primary Board Jsx */}
        <View style={styles.PrimaryService}>

          {
            primaryList.map((item) => 
              <View style={styles.PrimaryServiceBox}>
                <View>
                  <Text style={{fontSize: 10}}>
                    {item.title}
                  </Text>
                </View>
              </View>
            )
          }

        </View>

        {/* Secondary Board Jsx */}
        <View style={styles.SecondaryService}>

          {
            secondaryList.map(item => 
              <View style={styles.SecondaryServiceBox}>
                <View>
                  <Text style={{fontSize: 10}}>
                    {item.title}
                  </Text>
                </View>
              </View>
            )
          }

        </View>
         
      </View>
      
    </>
  )
}
 


const styles = StyleSheet.create({
  Home: {
    height: '100%',
    width: '100%',
    padding: 15
      
  },

  BalanceLeftBoard:{
    width: '50%',
    height: '100%',
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'

  },

  BalanceRightBoard:{
    width: '50%',
    height: '100%',
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#000',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly'

 
  },

  
  BalanceLabel:{
    width: '100%',
    height: '20%',
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },


  BalanceBoard: {
    height: 200,
    borderRadius: 15,
    width: '100%', 
    borderRadius: 5,
    backgroundColor: '#fff',
    display: 'flex', 
    padding: 20,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },



  PrimaryService: {
    height: 90,
    borderRadius: 15,
    width: '100%', 
    borderRadius: 5,
    backgroundColor: '#fff',
    display: 'flex', 
    // padding: 20,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 15
  },

  PrimaryServiceBox: {
    height: 90,
    width: '25%', 
    borderRadius: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    display: 'flex', 
    padding: 10,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginBottom: 5
  },


  SecondaryService: {
    height: 'auto',
    borderRadius: 15,
    width: '100%', 
    borderRadius: 5,
    backgroundColor: '#fff',
    display: 'flex', 
    // padding: 20,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },

  SecondaryServiceBox: {
    height: 90,
    width: '25%', 
    borderRadius: 15,
    flexShrink: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    display: 'flex', 
    padding: 10,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginBottom: 5
  }
  
});
