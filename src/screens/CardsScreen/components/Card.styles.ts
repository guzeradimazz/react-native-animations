import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#000',
    width: '84%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 180,
    borderRadius: 15,
    backgroundColor: '#000',
    position: 'absolute',
    zIndex:2
  },
  cardTopText: {
    padding: 15,
    fontSize: 20,
    color: '#fff'
  },
  cardNum: {
    color:'#fff',
    fontSize:25,
    marginLeft:'auto',
    marginRight:'auto',
    letterSpacing:4
  },
  bottomLine: {
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15,
    marginTop:23,
    marginBottom:0
  },
  bottomLineText: {
    color:'#fff'
  },
  shape:{
    position:'absolute',
    width:40,
    height:50,
    backgroundColor:'red',
    bottom:0,
    right:0,
    zIndex:0
  }
})
