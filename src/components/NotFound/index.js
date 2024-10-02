import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import {
  NotFoundContainer,
  NavigationNotFoundDataContainer,
  NotFoundDataContainer,
  NotFoundImage,
  NotFoundPara,
  NotFoundHeading,
} from './StyledComponents'

const NotFound = () => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundContainer bgColor={bgColor}>
          <Header />
          <NavigationNotFoundDataContainer>
            <NavigationBar />
            <NotFoundDataContainer>
              <NotFoundImage src={image} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundDataContainer>
          </NavigationNotFoundDataContainer>
        </NotFoundContainer>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default NotFound