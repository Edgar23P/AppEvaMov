import { StyleSheet } from 'react-native'

const containers = (backgroundColor) => StyleSheet.create({
   containerPrimary: {
       flex: 1,
       flexDirection: 'column',
       backgroundColor: backgroundColor,
   },
    containerSecundary: {
        flexDirection: 'row',
        margin:10
    },
    containerTertiary:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
    }
});

const titles = (color, size) =>  StyleSheet.create({
    titlePrimary:{
        color: color,
        fontSize: size,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    }
});

const images = (width,height) => StyleSheet.create({
    image:{
        width: width,
        height: height,
        margin: 10
    }
});

const text = () => StyleSheet.create({
    textPrimary:{
        fontWeight: 'bold'
    },
    textSecondary: {

    }
});

const  buttons = (backgroundColor) => StyleSheet.create({
    buttonPrimary:{
        backgroundColor:backgroundColor,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 10,
        fontWeight: 'bold',
        margin:10
    }
});

export {containers, titles, images, text, buttons}