import React, { useState } from "react";
import { Linking, Image, ImageBackground, Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

//const image = {uri: "https://i.imgur.com/cGkChTF.png"};

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Catálogo fechado! Agradecemos a visita.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          
          
          <View style={styles.modalView}>

            <Text style={styles.modalText}>NETFLIX</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} onPress={() => {
                Linking.openURL('https://wa.me/5581986172271');
              }} >1 TELA - 17 REAIS{"\n"}2 TELAS - 25 REAIS{"\n"}4 TELAS - 35 REIAS </Text>
            </Pressable>

            <Text style={styles.modalText}>GLOBOPLAY + CANAIS</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} onPress={() => {
                Linking.openURL('https://wa.me/5581986172271');
              }}>22 REAIS/MÊS</Text>
            </Pressable>

            <Text style={styles.modalText}>DISNEY PLUS</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} onPress={() => {
                Linking.openURL('https://wa.me/5581986172271');
              }}>1 TELA - 14 REAIS{"\n"}4 TELAS - 22 REAIS</Text>
            </Pressable>

            <Text style={styles.modalText}>STAR PLUS</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} onPress={() => {
                Linking.openURL('https://wa.me/5581986172271');
              }}>1 TELA - 14 REAIS{"\n"}4 TELAS - 22 REAIS</Text>
            </Pressable>

            <Text style={styles.modalText}>PARAMOUNT PLUS</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} onPress={() => {
                Linking.openURL('https://wa.me/5581986172271');
              }}>4 TELAS - 14 REAIS</Text>
            </Pressable>

            <Text style={styles.modalText}>AMAZON PRIME VIDEO</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} onPress={() => {
                Linking.openURL('https://wa.me/5581986172271');
              }}>4 TELAS - 7 REAIS</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
      <Image
        style={styles.adzLogo}
        source={{
          uri: 'https://i.imgur.com/cGkChTF.png',
        }}
      />

      <Text>Bem vindo a ADZAPPS STORE</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Veja nosso catálogo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#836FFF"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  adzLogo: {
    width: 192,
    height: 192,
  },
  adzback: {
    width: 400,
     height: 400 
  }
});

export default App;