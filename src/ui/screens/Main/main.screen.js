import React, { useEffect, useState } from 'react'
import colors from '~/ui/global_styles/colors'

import {
  Text,
  Image,
  ImageBackground,
  StatusBar,
  Alert,
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { ButtonComponent, InputTextComponent } from '~/ui/global_components'

import { styles } from './main.styles'
import maps from './main.map'

const Main = ({
  isLogged,
  token,
  loading,
  error,
  login,
  navigation: { navigate }
}) => {

  const [text, onChangeText] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isLogged) {
      navigate('App')
      console.tron.log(`Token: ${token}`)

      onChangeText('')
      setPassword('')
    }
    if (error && !loading && !isLogged) {
      setPassword('')
      console.tron.log(`Error: ${JSON.stringify(error?.message)}`)
    }
  }, [loading, error])

  const onLogin = () => {
    login({ email: text, password })
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps='handled'
    >
      <ImageBackground
        source={{
          // uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <Image
          source={require('~/assets/images/my-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        {loading ?
          <Text style={styles.welcome}>Carregando...</Text> :
          <Text style={styles.welcome}>Bem-vindo!</Text>
        }
        <View style={{
          width: '100%',
          alignItems: 'center',
          padding: 15,
        }}>
          <InputTextComponent
            placeholder={'E-mail'}
            onChangeText={onChangeText}
            value={text}
          />
          <InputTextComponent
            placeholder={'Senha'}
            secureTextEntry
            textContentType={'password'}
            onChangeText={setPassword}
            value={password}
            onSubmit={onLogin}
          />
        </View>
        {error &&
          <Text style={styles.instructions, {
            color: colors.red
          }}>Erro ao logar, verifique seu email e senha e tente novamente.</Text>
        }
        <ButtonComponent
          disabled={loading}
          title={'Logar'}
          onClick={onLogin}
          color={colors.rocket}
        />
      </ImageBackground>
    </ScrollView>
  )
}

export const MainScreen = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(Main)

