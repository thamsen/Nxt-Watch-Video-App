import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  VideoLink,
  VideoList,
  VideoImage,
  VideoTitle,
  VideoChannel,
  VideoContentContainer,
  VideoProfileImage,
  VideoInfoContainer,
  ViewsAndDate,
  Dot,
} from './StyledComponents'

const VideoItem = props => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab} = value

      const {videoDetails} = props
      const {id, channel, title, thumbnailUrl, viewCount, publishedAt} =
        videoDetails
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const onChangeTab = () => {
        changeTab('')
      }

      return (
        <VideoList onClick={onChangeTab}>
          <VideoLink to={`/videos/${id}`}>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoContentContainer>
              <VideoProfileImage
                alt="channel logo"
                src={channel.profile_image_url}
              />
              <VideoInfoContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoChannel isDarkTheme={isDarkTheme}>
                  {channel.name}
                </VideoChannel>
                <ViewsAndDate color={textColor}>
                  {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                </ViewsAndDate>
              </VideoInfoContainer>
            </VideoContentContainer>
          </VideoLink>
        </VideoList>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default VideoItem
