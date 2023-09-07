import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil({imgUri, genero, nome, email, telefone}) {

    const pessoa = {
        imgUri: '../assets/euuu.jpg',
        genero: "Masculino",
        nome: "Pedro Nunes",
        email: "pedro.hq_@outlook.com",
        telefone: "(61) 98299-9271"
    }

    return (

        <View style={styles.container}>
            <Image
                style={styles.imagem}
                source={require("../assets/euuu.jpg")}>
            </Image>

            <View>
                <Text style={styles.texto}>Este é o meu perfil!</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Gênero:</Text>
                <Text style={styles.texto}>{pessoa.genero}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Nome:</Text>
                <Text style={styles.texto}>{pessoa.nome}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Telefone:</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>E-mail:</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        marginTop: "30%"
    },

    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
    },

    texto: {
        fontSize: 15,
        color: "white"
    },

    textoLabel: {
        fontWeight: "bold"
    },

    imagem: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 500,
        padding: 20,
        marginTop: 20
    }
})