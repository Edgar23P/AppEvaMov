import React,{Component} from 'react';
import {StyleSheet, Text, View, ToastAndroid, NetInfo} from 'react-native';
import {Button} from 'react-native-elements';
import Detail from '../../components/Detail';
import OfflineNotice from '../../components/OfflineNotice';
import {GetSubjectTimeHour, PostAssistanceSpaces} from '../../../services/Assistance/AssistanceService';
import { connect } from "react-redux";


 class AssistancePass extends Component{
    constructor(props){
        super(props);
        this.state = {
            isConnected: true,
            item: null
        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
        this.state.item =  (!this.state.isConnected) ? GetSubjectTimeHour() : null;
        if(this.state.item == null) ToastAndroid.show("ALERTA: ¡NADA ASIGNADO PARA ESTA HORA!", ToastAndroid.LONG)
        const { navigationState, dispatch, isLoggedIn } = this.props;
        ToastAndroid.show(isLoggedIn+'',ToastAndroid.LONG);
        
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
        this.state.item =  (!this.state.isConnected) ? GetSubjectTimeHour() : null;
        if(this.state.item == null) ToastAndroid.show("ALERTA: ¡NADA ASIGNADO PARA ESTA HORA!", ToastAndroid.LONG)
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            this.setState({ isConnected });
        } else {
            this.setState({ isConnected });
        }
    };

    render(){
        return (this.state.isConnected) ? (this.state.item == null) ?
            (
                <View style={styles.container}>
                    <Text style={styles.title}>¡NADA ASIGNADO PARA ESTA HORA!</Text>
                </View>
            )
            :
            (
                <View style={styles.container}>

                    <Text style={styles.title}>ASISTENCIA MANUAL</Text>
                    <Detail
                        data={{
                            FechaAsistencia: item.FechaHoraRegIni.DATE.YEAR+"/"+item.FechaHoraRegIni.DATE.MONTH+"/"+item.FechaHoraRegIni.DATE.DAY,
                            TipoAsistencia: item.TipoAsistencia.toLowerCase(),
                            IdPeriodo: item.IdPeriodo.DesPeriodo.toLowerCase(),
                            IdAsignatura: item.IdAsignatura.DesAsignatura.toLowerCase(),
                            IdDocente: item.IdCatedratico.ApPaterno.toLowerCase()+" "+item.IdCatedratico.ApMaterno.toLowerCase()+" "+item.IdCatedratico.Nombre.toLowerCase(),
                            IdGrupo: item.Grupo.toLowerCase(),
                            HoraIni: item.FechaHoraRegIni.TIME.HOUR+":"+item.FechaHoraRegIni.TIME.MINUTES,
                            HoraFin: item.FechaHoraRegFin.TIME.HOUR+":"+item.FechaHoraRegFin.TIME.MINUTES,
                            IdEdificio: item.IdEdificio.DesEdificio.toLowerCase(),
                            IdEspacio: item.eva_cat_espacios.DesEspacio.toLowerCase(),
                            IdBeacon: item.IdBeacon.Identifier
                        }}
                    />
                    <Button
                        title='¡ESTOY AQUI!'
                        buttonStyle={{
                            fontSize: 16,
                            fontStyle: 'bold',
                            backgroundColor: "#03a9f4",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 10,
                            margin: 5
                        }}
                        onPress={()=> {if(this.state.item != null) PostAssistanceSpaces(this.state.item)}}
                    />
                </View>
            )
            :
            (
                <View style={styles.container}>
                    <OfflineNotice/>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title:{
        color: '#000',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    },
});

const mapStateToProps = state => {
    return {
      isLoggedIn: state.LoginReducer.isLoggedIn,
      navigationState: state.NavigationReducer
    };
  };
  const Assistencia = connect(mapStateToProps)(AssistancePass);
  
  export default Assistencia;