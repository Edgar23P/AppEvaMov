import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    ToastAndroid
} from "react-native";
import {GetLogin} from '../../../services/Security/SecurityService';
import { login } from "../../../actions/actionCreator";
import { connect } from "react-redux";


 class SignIn extends Component{

    constructor(props) {
        super(props);
        this.state =  {
            /* initial state */
            username : null,
            password: null,
        };
    }//CONSTRUCTOR

    Login (user, password){
        /*
        if((user == null || password == null) || (user.length < 4 || password.length < 8)) Alert.alert(
            'ALERTA',
            'Usuario o contraseña inválidos.',
            [{text: 'Aceptar', onPress: () => {}}],
            {cancelable: false});
        else{
            let signin = GetLogin(user, password);
            //aqui iniciar el redux
        }
        */
       const { navigationState, dispatch, isLoggedIn } = this.props;
       ToastAndroid.show(isLoggedIn+'',ToastAndroid.LONG);
       this.props.login();
    };

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../../../resources/images/logo_tec.png')}/>
                                <Text style={styles.title}>ITTEPIC</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor="rgba(255,255,255,0.8)" keyboardType="email-address" maxLength = {20}
                                           onChangeText={(username) => this.setState({username})}
                                           value={this.state.username}/>
                                <TextInput style={styles.input} placeholder="Clave" placeholderTextColor="rgba(255,255,255,0.8)" maxLength = {20} secureTextEntry autoCorrect={false}
                                           onChangeText={(password) => this.setState({password})}
                                           value={this.state.password}/>
                                <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.Login(this.state.username, this.state.password)}}>
                                    <Text style={styles.buttonText}>INICIAR SESION</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        flexDirection: 'column'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo:{
        width: 200,
        height: 200
    },
    title:{
        color: '#FFF',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    infoContainer:{
        backgroundColor: 'rgb(32,53,70)',
        position: 'absolute',
        left:0,
        right:0,
        bottom:0,
        height: 230,
        padding: 10
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:'#FF8000',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }
});

const mapDispatchToProps = {
        login
  };

  const mapStateToProps = state => {
    return {
      isLoggedIn: state.LoginReducer.isLoggedIn,
      navigationState: state.NavigationReducer
    };
  };
  const Login = connect(mapStateToProps, mapDispatchToProps)(SignIn);
  
  export default Login;
  