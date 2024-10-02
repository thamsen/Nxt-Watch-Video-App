import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  NavigationContainer,
  NavLink,
  NavigationOptions,
  NavItemContainer,
  NavText,
  ContactContainer,
  ContactText,
  ContactHeading,
  SocialMediaContainer,
  LogoElement,
} from './StyledComponents'

const NavigationBar = () => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value

      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

      const homeTab = () => {
        changeTab('Home')
      }

      const trendingTab = () => {
        changeTab('Trending')
      }

      const gameTab = () => {
        changeTab('Game')
      }

      const savedTab = () => {
        changeTab('SavedVideos')
      }

      return (
        <NavigationContainer bgColor={bgColor}>
          <NavigationOptions>
            <NavLink to="/">
              <NavItemContainer
                key="home"
                bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                onClick={homeTab}
              >
                <AiFillHome
                  size={30}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <NavText color={textColor}>Home</NavText>
              </NavItemContainer>
            </NavLink>

            <NavLink to="/trending">
              <NavItemContainer
                key="trending"
                bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                onClick={trendingTab}
              >
                <HiFire
                  size={30}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <NavText color={textColor}>Trending</NavText>
              </NavItemContainer>
            </NavLink>

            <NavLink to="/gaming">
              <NavItemContainer
                key="game"
                bgColor={activeTab === 'Game' ? activeTabBg : 'none'}
                onClick={gameTab}
              >
                <SiYoutubegaming
                  size={30}
                  color={activeTab === 'Game' ? '#ff0b37' : '#909090'}
                />
                <NavText color={textColor}>Gaming</NavText>
              </NavItemContainer>
            </NavLink>

            <NavLink to="/saved-videos">
              <NavItemContainer
                key="videos"
                bgColor={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
                onClick={savedTab}
              >
                <CgPlayListAdd
                  size={30}
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
                />
                <NavText color={textColor}>Saved Videos</NavText>
              </NavItemContainer>
            </NavLink>
          </NavigationOptions>
          <ContactContainer>
            <ContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactHeading>
            <SocialMediaContainer>
              <LogoElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactText isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactText>
          </ContactContainer>
        </NavigationContainer>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default NavigationBar