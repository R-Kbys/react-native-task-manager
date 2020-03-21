import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    base: { backgroundColor: '#E3F2FD' },//#e5f3ff 
    body: {
        padding: 10,
        flex: 1,
        padding: 6,
        margin: 6,
        margin: 6,
        // backgroundColor: "#442ee8",  
    },
    main: { padding: 10 },
    floatingHeader: {
        backgroundColor: "#2962FF",
        // backgroundColor: "#2089dc",
        shadowOffset: { width: 0, height: 4, },
        shadowColor: '#000',
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    },
    container: {
        flex: 2,
        backgroundColor: "#fff",
        margin: 3,
        padding: 3
    },
    subTextContainer: {
        padding: 3,
        margin: 3,
    },
    timeMessage: {
        padding: 3,
        margin: 4,
        textAlign: 'center'
    },
    buttonArea: {
        flex: 3,
        padding: 2,
        margin: 2,
        // alignItems: "center"
        // flex: 1,
    },
    fotterButtonArea: {
        padding: 5,
        margin: 4,
        // flex: 1,
    },
    buttonStyle: {
        backgroundColor: "#2089dc",// #54dae9 #55cbd9 #39cbd1,03DAC5,03D，2089dc
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    buttonTitle: {
        color: 'white'
    }

})