/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';

import StyleModal from './StyleModal';

export default function ModalPagePrincipal() {
  const [Visible, setVisible] = useState(false);
  return (
    <View>
      <Modal visible={Visible} transparent={true} animationType="slide">
        <View style={StyleModal.containermodal}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}>
            <View style={StyleModal.IconModal1} />
          </TouchableOpacity>
          <Text style={StyleModal.TitleModal1}>
            Esperamos que você tenha uma otima experiencia
          </Text>
          <Text style={StyleModal.TitleModal2}>
            Neste APP é possivel guardar e acompanhar informações sobre: 1-
            Empregado; 2- Veiculos; 3- Smartphones; 4- Loec Automatica; 5-
            produtividade
          </Text>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}>
        <View style={StyleModal.IconModal2} />
      </TouchableOpacity>
    </View>
  );
}
