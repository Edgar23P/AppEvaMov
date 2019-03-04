import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ChangeColorTypeAssistance} from './Tools'
export default ({data})=>(
    <View style={styles.containerDataBlock}>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>FECHA ASISTENCIA: </Text>
            <Text style={styles.textSecondary}>{data.FechaAsistencia}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>TIPO ASISTENCIA: </Text>
            <Text style={{fontWeight: 'italic', color: ChangeColorTypeAssistance(data.TipoAsistencia)}}>{data.TipoAsistencia}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>PERIODO: </Text>
            <Text style={styles.textSecondary}>{data.IdPeriodo}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>ASIGNATURA: </Text>
            <Text style={styles.textSecondary}>{data.IdAsignatura}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>DOCENTE: </Text>
            <Text style={styles.textSecondary}>{data.IdDocente}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>GRUPO: </Text>
            <Text style={styles.textSecondary}>{data.IdGrupo}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>HORA ENTRADA: </Text>
            <Text style={styles.textSecondary}>{data.HoraIni}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>HORA SALIDA: </Text>
            <Text style={styles.textSecondary}>{data.HoraFin}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>EDIFICIO: </Text>
            <Text style={styles.textSecondary}>{data.IdEdificio}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>ESPACIO: </Text>
            <Text style={styles.textSecondary}>{data.IdEspacio}</Text>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.textPrimary}>IDENTIFICADOR: </Text>
            <Text style={styles.textSecondary}>{data.IdBeacon}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    containerDataBlock:{
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    containerText:{
        flexDirection: 'row',
    },
    textPrimary:{
        fontWeight: 'bold'
    },
    textSecondary:{

    },
});