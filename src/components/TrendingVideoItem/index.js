import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  TrendingVideoList,
  TrendingImage,
  VideoLink,
  VideoInfoContainer,
  VideoTitle,
  VideoChannel,
  ViewsDateContainer,
  VideoViews,
  VideoDate,
  TrendingImageContentContainer,
} from './StyledComponents'

const TrendingVideoItem = props => (
  <NxtWaveWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab} = value

      const {videoDetails} = props
      const {id, channel, title, thumbnailUrl, viewCount, publishedAt} =
        videoDetails

      const onChangeTab = () => {
        changeTab('')
      }

      return (
        <TrendingVideoList onClick={onChangeTab}>
          <VideoLink to={`/videos/${id}`}>
            <TrendingImageContentContainer>
              <TrendingImage alt="video thumbnail" src={thumbnailUrl} />
              <VideoInfoContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoChannel isDarkTheme={isDarkTheme}>
                  {channel.name}
                </VideoChannel>
                <ViewsDateContainer>
                  <VideoViews isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </VideoViews>
                  <VideoDate isDarkTheme={isDarkTheme}>{publishedAt}</VideoDate>
                </ViewsDateContainer>
              </VideoInfoContainer>
            </TrendingImageContentContainer>
          </VideoLink>
        </TrendingVideoList>
      )
    }}
  </NxtWaveWatchContext.Consumer>
)

export default TrendingVideoItem
