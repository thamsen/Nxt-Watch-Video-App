import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  SaveVideoList,
  VideoLink,
  SavedVideoImage,
  SavedVideoTitle,
  SavedVideoChannelName,
  ViewsYearsContainer,
  ViewsPara,
  SavedVideoContentContainer,
  YearsPara,
} from './StyledComponents'

const SavedVideoItem = props => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount, publishedAt, name} =
        videoDetails

      const onChangeTab = () => {
        changeTab('')
      }

      return (
        <SaveVideoList onClick={onChangeTab}>
          <VideoLink to={`/videos/${id}`}>
            <SavedVideoImage src={thumbnailUrl} alt="video thumbnail" />
            <SavedVideoContentContainer>
              <SavedVideoTitle isDarkTheme={isDarkTheme}>
                {title}
              </SavedVideoTitle>
              <SavedVideoChannelName isDarkTheme={isDarkTheme}>
                {name}
              </SavedVideoChannelName>
              <ViewsYearsContainer>
                <ViewsPara isDarkTheme={isDarkTheme}>
                  {viewCount} views
                </ViewsPara>
                <YearsPara isDarkTheme={isDarkTheme}>{publishedAt}</YearsPara>
              </ViewsYearsContainer>
            </SavedVideoContentContainer>
          </VideoLink>
        </SaveVideoList>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default SavedVideoItem
