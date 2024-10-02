import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import SavedVideoItem from '../SavedVideoItem'
import {
  NoSavedVideosContainer,
  NavigationSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosPara,
  SavedVideosContainer,
  SavedVideosDataContainer,
  SavedVideosHeaderContainer,
  SavedIconContainer,
  SavedVideosUnorderedList,
  Heading,
} from './StyledComponents'

const SavedVideos = () => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
      const paraColor = isDarkTheme ? '#f8fafc' : '#94a3b8'

      const HeaderBgColor = isDarkTheme ? '#0f0f0f' : '#f8fafc'

      console.log(savedVideosList)

      return (
        <SavedVideosContainer bgColor={bgColor} data-testid="savedVideos">
          <Header />
          <NavigationSavedVideosContainer>
            <NavigationBar />
            <SavedVideosDataContainer bgColor={HeaderBgColor}>
              <SavedVideosHeaderContainer isDarkTheme={isDarkTheme}>
                <SavedIconContainer isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming size={30} color="#ff0000" />
                </SavedIconContainer>
                <Heading isDarkTheme={isDarkTheme}>Saved Videos</Heading>
              </SavedVideosHeaderContainer>
              {savedVideosList.length > 0 ? (
                <SavedVideosUnorderedList>
                  {savedVideosList.map(video => (
                    <SavedVideoItem videoDetails={video} key={video.id} />
                  ))}
                </SavedVideosUnorderedList>
              ) : (
                <NoSavedVideosContainer bgColor={bgColor}>
                  <NoSavedVideosImage
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  />
                  <NoSavedVideosHeading color={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosPara color={paraColor}>
                    You can save your videos while watching them
                  </NoSavedVideosPara>
                </NoSavedVideosContainer>
              )}
            </SavedVideosDataContainer>
          </NavigationSavedVideosContainer>
        </SavedVideosContainer>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default SavedVideos
