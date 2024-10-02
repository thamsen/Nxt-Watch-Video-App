import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  GamingList,
  VideoLink,
  GamingImage,
  GamingTitle,
  GamingViews,
} from './StyledComponents'

const GamingItem = props => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab} = value
      const {videoDetails} = props
      const {thumbnailUrl, viewCount, title, id} = videoDetails

      const onChangeTab = () => {
        changeTab('')
      }

      return (
        <GamingList onClick={onChangeTab}>
          <VideoLink to={`/videos/${id}`}>
            <GamingImage src={thumbnailUrl} alt="video thumbnail" />
            <GamingTitle isDarkTheme={isDarkTheme}>{title}</GamingTitle>
            <GamingViews isDarkTheme={isDarkTheme}>
              {viewCount} Watching WordWide
            </GamingViews>
          </VideoLink>
        </GamingList>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default GamingItem
