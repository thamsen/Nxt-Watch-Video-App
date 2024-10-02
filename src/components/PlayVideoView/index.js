import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'

import {
  VideoItemDetailsDataContainer,
  VideoItemTitle,
  VideoViewsYearsLikesContainer,
  PlayVideoStatus,
  PlayVideoDot,
  YearsPara,
  LikesSaveContainer,
  HrLine,
  ChannelContainer,
  ChannelNameSubscribersContainer,
  ChannelImage,
  ChannelName,
  SubscribesCount,
  Description,
  LikeButton,
  DisLikeButton,
  SaveButton,
} from './StyledComponents'

const PlayVideoView = props => {
  const {isLike, isDisLike, videoItemDetails, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <NxtWaveWatchContext.Consumer>
      {value => {
        const {isDarkTheme, addSaveVideo, savedVideosList} = value

        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeIconColor = isLike ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLike ? '#2563eb' : '#64748b'

        let isSaved
        const index = savedVideosList.findIndex(
          eachVideo => eachVideo.id === videoItemDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addSaveVideo(videoItemDetails)
        }

        return (
          <VideoItemDetailsDataContainer>
            <ReactPlayer
              url={videoItemDetails.videoUrl}
              controls
              width="100%"
            />
            <VideoItemTitle textColor={textColor}>
              {videoItemDetails.title}
            </VideoItemTitle>
            <VideoViewsYearsLikesContainer>
              <PlayVideoStatus color={textColor}>
                {videoItemDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoItemDetails.publishedAt}
              </PlayVideoStatus>

              <LikesSaveContainer>
                <LikeButton onClick={onClickLike}>
                  <AiOutlineLike
                    color={likeIconColor}
                    size={20}
                    className="icon"
                  />
                  <YearsPara color={likeIconColor}>Like</YearsPara>
                </LikeButton>
                <DisLikeButton onClick={onClickDislike}>
                  <AiOutlineDislike
                    color={dislikeIconColor}
                    size={20}
                    className="icon"
                  />
                  <YearsPara color={dislikeIconColor}>Dislike</YearsPara>
                </DisLikeButton>
                <SaveButton onClick={onClickSave}>
                  <BiListPlus
                    color={saveIconColor}
                    size={20}
                    className="icon"
                  />
                  <YearsPara color={saveIconColor}>
                    {isSaved ? 'Saved' : 'Save'}
                  </YearsPara>
                </SaveButton>
              </LikesSaveContainer>
            </VideoViewsYearsLikesContainer>
            <HrLine color={textColor} className="line" />
            <ChannelContainer>
              <ChannelImage
                alt="channel logo"
                src={videoItemDetails.profileImageUrl}
              />
              <ChannelNameSubscribersContainer>
                <ChannelName textColor={textColor}>
                  {videoItemDetails.name}
                </ChannelName>
                <SubscribesCount color={textColor}>
                  {videoItemDetails.subscriberCount} subscribers
                </SubscribesCount>
                <Description color={textColor}>
                  {videoItemDetails.description}
                </Description>
              </ChannelNameSubscribersContainer>
            </ChannelContainer>
          </VideoItemDetailsDataContainer>
        )
      }}
    </NxtWaveWatchContext.Consumer>
  )
}

export default PlayVideoView
