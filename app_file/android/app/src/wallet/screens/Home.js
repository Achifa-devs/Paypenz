import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BalanceLabel from '../components/Home/BalanceBoard/BalanceLabel';
import BalanceValue from '../components/Home/BalanceBoard/BalanceValue';
import BalanceVisibility from '../components/Home/BalanceBoard/BalanceVisibility';
import AddMoney from '../components/Home/BalanceBoard/AddMoney';
import Currency from '../components/Home/BalanceBoard/Currency';

export default function Home({navigation}) {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  let BalanceBtmBoardList = [
    {title: 'Transfer', url: 'user-transfer'}, 
    // {title: 'Cash Out', url: 'user-withdraw'}, 
    {title: 'Deposit', url: 'user-deposit'}, 
    {title: 'Transactions', url: 'user-history'}
  ]
  let primaryList = [
    // {title: 'To Paypenz'}, 
    {title: 'Invoice'}, 
    {title: 'Request Cash'}, 
    {title: 'View assets'}, 
    {title: 'Invite Friends'}
  ]
  let secondaryList = [
    {url: 'user-airtime', title: 'Airtime'}, 
    {url: 'user-data', title: 'Data'}, 
    {url: 'user-betting', title: 'Betting'}, 
    {url: 'user-internet', title: 'Internet'},
    {url: 'user-electricity', title: 'Electricity'},
    {url: 'user-cable', title: 'Cable'},
    {url: 'user-school', title: 'School/Exam'},
    {url: 'user-gift-card', title: 'Gift Card'}
  ]


  let ads = [
    {title: 'Receive Money From The US', desc: 'you can now easily recieve money from friends and family in the US. It&apos;s instant'},
    {title: 'Unlock higher transaction limit', desc: 'Get a Paypenz Business account to handle your business activities'},
    {title: 'Protect your account', desc: 'Never share your PIN, password or OTP with anyone'},
    {title: 'Promotions and conditions', desc: 'Need more info about our current promotion'}
  ]

  return ( 
    <>

      <View style={styles.Home}>

        {/* Balance Board Jsx */}
        <View style={styles.BalanceBoard}>

          <View style={styles.BalanceTopBoard}>

            <View style={styles.BalanceLabel}>
              <BalanceLabel />
              <BalanceVisibility />
            </View>
            <BalanceValue />

          </View>

          <View style={styles.BalanceBtmBoard}>
            {
              
              BalanceBtmBoardList.map((item, index) => 
                index === 0
                ?
                <View style={[styles.BalanceBtmBoardBox, {marginLeft: 0}]}>
                  <TouchableOpacity onPress={e=>navigation.navigate(item.url)}>
                    <View></View>
                    <Text style={{fontSize: 10, color: '#000'}}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
                :
                <View style={styles.BalanceBtmBoardBox}>
                  <TouchableOpacity onPress={e=>navigation.navigate(item.url)}>
                    <View></View>
                    <Text style={{fontSize: 10, color: '#000'}}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>

        </View>


        <ScrollView contentContainerStyle={{
          display: 'flex',
          flexDirection: 'column',
        }} style={{height: (screenHeight - 305), padding: 10}}>
  
          {/* Primary Board Jsx */}
          <View>
            <ScrollView horizontal contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }} style={[styles.PrimaryService, {margin: 0, height: 180}]}>
            {
              primaryList.map((item,index) =>
                index === 0
                ?
                <View style={[styles.PrimaryServiceBox, {marginLeft: 0}]}>
                  <View>
                    <View></View>
                    <Text style={{fontSize: 10, color: '#000'}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
                :
                <View style={styles.PrimaryServiceBox}>
                  <View>
                    <View></View>
                    <Text style={{fontSize: 10, color: '#000'}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              )
            }
            </ScrollView>
          </View>
  
          {/* Secondary Board Jsx */}
          
          <View style={styles.SecondaryService}>
  
            {
              secondaryList.map(item =>
                <TouchableOpacity onPress={e=> navigation.navigate(item.url)} style={styles.SecondaryServiceBox}>
                  <View>
                    <Text style={{fontSize: 10}}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }
  
          </View>

          {/* Ads Cnt */}
          <View>
            <ScrollView horizontal contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between'
            }} style={styles.AdsCnt}>
              {
                ads.map((item, index) =>
                  index === 0
                  ?
                  <>
                    <View  style={[styles.AdsCntBox, {marginLeft: 0}]}>
                      <Text style={{color: '#fff'}}>{item.title}</Text>
                    </View>
                  </>
                  :
                  <>
                    <View style={styles.AdsCntBox}>
                      <Text style={{color: '#fff'}}>{item.title}</Text>
                    </View>
                  </>
                )
              }
            </ScrollView>
          </View>
  
        </ScrollView>

      </View>
      
    </>
  )
}
 


const styles = StyleSheet.create({
  AdsCnt:{
    height: 150,
    width: '100%',
    // padding: 10,
    // backgroundColor: '#fff',
    marginBottom: 20 
  },

  AdsCntBox: {
    height: '100%',
    width: 280,
    flexShrink: 0,
    borderRadius: 5,
    marginLeft: 5, 
    padding: 10,
    marginRight: 5,
    backgroundColor: '#1E90FF'
  },

  Home: {
    height: '100%',
    width: '100%',
    padding: 0
      
  },

  BalanceTopBoard:{
    width: '100%',
    height: '50%',
    display: 'flex',
    // flex: 1,
    color: '#fff',
    marginBottom: 20,
    flexDirection: 'column',
    // backgroundColor: '#753737',
    alignItems: 'center',
    justifyContent: 'center'

  },

  BalanceBtmBoard:{
    width: '85%',
    height: 70,
    display: 'flex',
    margin: 0, 
    padding: 0,
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#000',
    alignItems: 'flex-end',
    justifyContent: 'space-between'

 
  },

  BalanceBtmBoardBox: {
    height: 60,
    borderRadius: 15,
    width: '23%', 
    borderRadius: 5,
    backgroundColor: '#fff',
    display: 'flex', 
    // padding: 20,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // marginBottom: 15
  },

  
  BalanceLabel:{
    width: '100%',
    height: '30%',
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },


  BalanceBoard: {
    height: 250,
    width: '100%', 
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#1E90FF',
    display: 'flex', 
    padding: 20,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // marginBottom: 10
  },



  PrimaryService: {
    borderRadius: 15,
    width: '100%',  
    // borderRadius: 5,
    // backgroundColor: '#161111',
    fontFamily: 'serif',
    padding: 10,
    marginBottom: 5
  },

  PrimaryServiceBox: {
    height: '100%',
    width: 180, 
    borderRadius: 25,
    backgroundColor: '#fff',
    display: 'flex', 
    padding: 10,
    marginLeft: 8,
    color: '#1E90FF',
    marginRight: 8,
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
    // backgroundColor: '#fff',
    display: 'flex', 
    padding: 10,
    fontFamily: 'serif',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginBottom: 5
  }
  
});
