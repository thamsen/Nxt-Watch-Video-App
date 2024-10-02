import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  LoginBgContainer,
  FormContainer,
  WebsiteLogoImage,
  DetailsContainer,
  LabelElement,
  InputElement,
  LoginButton,
  CheckboxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  ErrorText,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isShowError: false,
    passwordType: 'password',
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    const {passwordType} = this.state
    if (passwordType === 'password') {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onSuccessLogin(data.jwt_token)
    } else {
      const data = await response.json()

      this.onFailureLogin(data.error_msg)
    }
    console.log(response)
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({isShowError: true, errorMsg})
  }

  render() {
    return (
      <NxtWaveWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {isShowError, errorMsg, passwordType, username, password} =
            this.state

          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginBgContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.submitForm}
              >
                <WebsiteLogoImage alt="website logo" src={logo} />
                <DetailsContainer>
                  <LabelElement htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LabelElement>
                  <InputElement
                    id="username"
                    type="text"
                    isDarkTheme={isDarkTheme}
                    placeholder="Username"
                    onChange={this.getUsername}
                    value={username}
                  />
                </DetailsContainer>
                <DetailsContainer>
                  <LabelElement htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    id="password"
                    type={passwordType}
                    isDarkTheme={isDarkTheme}
                    placeholder="Password"
                    onChange={this.getPassword}
                    value={password}
                  />
                </DetailsContainer>

                <CheckboxContainer>
                  <CheckBoxInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.showPassword}
                  />
                  <CheckBoxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                    Show Password
                  </CheckBoxLabel>
                </CheckboxContainer>

                <LoginButton type="submit" isDarkTheme={isDarkTheme}>
                  Login
                </LoginButton>
                {isShowError && <ErrorText>*{errorMsg}</ErrorText>}
              </FormContainer>
            </LoginBgContainer>
          )
        }}
      </NxtWaveWatchContext.Consumer>
    )
  }
}

export default Login
