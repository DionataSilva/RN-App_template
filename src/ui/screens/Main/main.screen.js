import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import {
  ButtonComponent,
  InputTextComponent
} from '~/ui/components'
import * as SC from './main.styles'
import maps from './main.map'
import I18n from '~/i18n/src/locale'
import { useTheme } from '~/utils'

const Main = ({
  isLogged,
  token,
  loading,
  error,
  login,
  navigation: { navigate },
}) => {

  const {colors} = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isLogged) {
      navigate('App')
      setEmail('')
      setPassword('')
    }
    if (error && !loading && !isLogged) {
      setPassword('')
      console.tron.log(`Error: ${JSON.stringify(error?.message)}`)
    }
  }, [loading, error])

  const onLogin = () => login({ email, password })

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps='handled'
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.primary1} />
      <SC.Container>
        <SC.Logo
          color={colors.light2}
          source={require('~/assets/images/my-logo.png')}
          resizeMode="contain"
        />
        <SC.Text>
          {I18n(`main.${loading ? 'loading' : 'welcome'}`)}
        </SC.Text>
        <SC.Form>
          <InputTextComponent
            color={colors.light2}
            placeholder={I18n('main.email')}
            onChangeText={setEmail}
            value={email}
          />
          <InputTextComponent
            color={colors.light2}
            placeholder={I18n('main.password')}
            secureTextEntry
            textContentType={'password'}
            onChangeText={setPassword}
            value={password}
            onSubmit={onLogin}
          />
          {error && <SC.Error>{I18n('main.errorMessage')}</SC.Error>}
        </SC.Form>
        <ButtonComponent
          backgroundColor={colors.light2}
          disabled={loading}
          title={I18n('main.signIn')}
          onClick={onLogin}
        />
      </SC.Container>
    </ScrollView>
  )
}

export const MainScreen = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(Main)

