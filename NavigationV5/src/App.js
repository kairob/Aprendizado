import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

export default function App() {
  const [tela, setTela] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([]);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');

  function iniciarJogo(jogador) {
    setJogadorAtual(jogador);
    setJogadasRestantes(9);
    setTabuleiro([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setTela('jogo');
  }
  function jogar(linha, coluna) {
    tabuleiro[linha][coluna] = jogadorAtual;
    setTabuleiro([...tabuleiro]);
    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    verificadorGanhador(tabuleiro, linha, coluna);
  }
  function verificadorGanhador(tabuleiro, linha, coluna) {
    //linhas
    if (
      tabuleiro[linha][0] !== '' &&
      tabuleiro[linha][0] === tabuleiro[linha][1] &&
      tabuleiro[linha][1] === tabuleiro[linha][2]
    ) {
      return finalizarJogo(tabuleiro[linha][0]);
    }
    //colunas
    if (
      tabuleiro[0][coluna] !== '' &&
      tabuleiro[0][coluna] === tabuleiro[1][coluna] &&
      tabuleiro[1][coluna] === tabuleiro[2][coluna]
    ) {
      return finalizarJogo(tabuleiro[0][coluna]);
    }
    //diagonal 1
    if (
      tabuleiro[0][0] !== '' &&
      tabuleiro[0][0] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][2]
    ) {
      return finalizarJogo(tabuleiro[0][0]);
    }
    //diagonal 2
    if (
      tabuleiro[0][2] !== '' &&
      tabuleiro[0][2] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][0]
    ) {
      return finalizarJogo(tabuleiro[0][2]);
    }
    //nenhum jogador
    if (jogadasRestantes - 1 === 0) {
      return finalizarJogo('');
    }
    //jogo
    setJogadasRestantes(jogadasRestantes - 1);
  }
  function finalizarJogo(jogador) {
    setGanhador(jogador);
    setTela('ganhador');
  }
  switch (tela) {
    case 'menu':
      return getTelaMenu();
    case 'jogo':
      return getTelaJogo();
    case 'ganhador':
      return getTelaGanhador();
  }
  function getTelaMenu() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo da Velha</Text>
        <Text style={styles.subtitulo}>Selecione o primeiro Jogador</Text>
        <View style={styles.inLineItems}>
          <TouchableOpacity
            style={styles.boxjogador}
            onPress={() => iniciarJogo('X')}>
            <Text style={styles.jogadorX}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxjogador}
            onPress={() => iniciarJogo('O')}>
            <Text style={styles.jogadorO}>O</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function getTelaJogo() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo da Velha</Text>
        {tabuleiro.map((linha, numeroLinha) => {
          return (
            <View key={numeroLinha} style={styles.inLineItems}>
              {linha.map((coluna, numeroColuna) => {
                return (
                  <TouchableOpacity
                    key={numeroColuna}
                    style={styles.boxjogador}
                    onPress={() => jogar(numeroLinha, numeroColuna)}
                    disabled={coluna !== ''}>
                    <Text
                      style={
                        coluna === 'X' ? styles.jogadorX : styles.jogadorO
                      }>
                      {coluna};
                    </Text>
                  </TouchableOpacity>
                );
              })}
              ;
            </View>
          );
        })}
        <TouchableOpacity style={styles.botao} onPress={() => setTela('menu')}>
          <Text style={styles.botaotext} />
          Voltar ao Menu
          <Text />
        </TouchableOpacity>
      </View>
    );
  }
  function getTelaGanhador() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo da Velha</Text>
        <Text style={styles.subtitulo}>Resultado Final</Text>
        {ganhador === '' && <Text>Nenhum ganhador</Text>}
        {ganhador !== '' && (
          <>
            <Text>Ganhador</Text>
            <View>
              <Text
                style={ganhador === 'X' ? styles.jogadorX : styles.jogadorO}>
                {ganhador}
              </Text>
            </View>
          </>
        )}
        <TouchableOpacity style={styles.botao} onPress={() => setTela('menu')}>
          <Text style={styles.botaotext} />
          Voltar ao Menu
          <Text />
        </TouchableOpacity>
      </View>
    );
  }
}
