import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import {
  ButtonComponent,
  InputTextComponent
} from '~/ui/global_components'
import {
  Container,
  Logo,
  StyledText,
  ErrorText,
  FormContainer,
} from './main.styles'
import maps from './main.map'
import colors from '~/ui/global_styles/colors'
import I18n from '~/i18n/src/locale'

const Main = ({
  isLogged,
  token,
  loading,
  error,
  login,
  navigation: { navigate },
  theme,
}) => {

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
      <Container>
        <Logo
          source={require('~/assets/images/my-logo.png')}
          resizeMode="contain"
        />
        <StyledText>
          {I18n(`main.${loading ? 'loading' : 'welcome'}`)}
        </StyledText>
        <FormContainer>
          <InputTextComponent
            placeholder={I18n('main.email')}
            onChangeText={setEmail}
            value={email}
          />
          <InputTextComponent
            placeholder={I18n('main.password')}
            secureTextEntry
            textContentType={'password'}
            onChangeText={setPassword}
            value={password}
            onSubmit={onLogin}
          />
        </FormContainer>
        {error && <ErrorText>{I18n('main.errorMessage')}</ErrorText>}
        <ButtonComponent
          disabled={loading}
          title={I18n('main.signIn')}
          onClick={onLogin}
        />
      </Container>
    </ScrollView>
  )
}

export const MainScreen = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(Main)

