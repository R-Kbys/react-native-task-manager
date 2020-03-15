import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: { padding: 6, flex: 1, justifyContent:'space-between'},
  body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
  main: {
    padding: 10, backgroundColor: 'white', 
 },
  title: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  modalpanel: {
    padding: 10,
    margin: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  message: {
    padding: 10,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    // height: 40,
  },
  image: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: '80%',
  },
  buttoArea: {
    padding: 10,
    margin: 10,
    // flex: 1,
  }

})