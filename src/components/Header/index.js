import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'

import {
  HeaderContainer,
  IconsUnorderedList,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  LogoImage,
  PopupView,
  LogoutCard,
  CancelButton,
  ConfirmButton,
  LogoutPara,
  ButtonsContainer,
  LinkElement,
  MenuIcon,
  LogoutButtonIcon,
} from './StyledComponents'

const Header = props => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, changeTab} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#181818' : '#ffffff'

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const direcToHome = () => {
        changeTab('Home')
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <LinkElement to="/" onClick={direcToHome}>
            <LogoImage alt="website logo" src={logo} />
          </LinkElement>

          <IconsUnorderedList>
            <ThemeButton data-testid="theme" onClick={toggleTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>

            <ProfileImage
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            />

            <MenuIcon isDarkTheme={isDarkTheme}>
              <GiHamburgerMenu size={25} />
            </MenuIcon>

            <PopupView>
              <Popup
                modal
                trigger={
                  <LogoutButton isDarkTheme={isDarkTheme} type="button">
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutCard isDarkTheme={isDarkTheme}>
                    <LogoutPara isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout
                    </LogoutPara>
                    <ButtonsContainer>
                      <CancelButton
                        onClick={() => close()}
                        isDarkTheme={isDarkTheme}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={logout} isDarkTheme={isDarkTheme}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </LogoutCard>
                )}
              </Popup>
            </PopupView>

            <PopupView>
              <Popup
                modal
                trigger={
                  <LogoutButtonIcon isDarkTheme={isDarkTheme} type="button">
                    <FiLogOut size={25} color={color} />
                  </LogoutButtonIcon>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutCard isDarkTheme={isDarkTheme}>
                    <LogoutPara isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout
                    </LogoutPara>
                    <ButtonsContainer>
                      <CancelButton
                        onClick={() => close()}
                        isDarkTheme={isDarkTheme}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={logout} isDarkTheme={isDarkTheme}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </LogoutCard>
                )}
              </Popup>
            </PopupView>
          </IconsUnorderedList>
        </HeaderContainer>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default withRouter(Header)