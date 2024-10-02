import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'

import {
  DataContainer,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailureButton,
  FailurePara,
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

const apisConsts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apisConsts.initial,
    videoItemDetails: [],
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apisConsts.inProgress})
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)

      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apisConsts.success,
      })
    } else {
      this.setState({apiStatus: apisConsts.failure})
    }
  }

  clickLiked = () => {
    const {isLike} = this.state
    if (isLike === true) {
      this.setState({isLike: false, isDisLike: true})
    } else {
      this.setState({isLike: true, isDisLike: false})
    }
  }

  clickDisLiked = () => {
    const {isDisLike} = this.state
    if (isDisLike === true) {
      this.setState({isLike: true, isDisLike: false})
    } else {
      this.setState({isLike: false, isDisLike: true})
    }
  }

  renderVideoItemsDetailsContent = () => (
    <NxtWaveWatchContext.Consumer>
      {value => {
        const {isDarkTheme, addSaveVideo, savedVideosList} = value
        const {videoItemDetails, isLike, isDisLike} = this.state

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
                <LikeButton onClick={this.clickLiked}>
                  <AiOutlineLike
                    color={likeIconColor}
                    size={20}
                    className="icon"
                  />
                  <YearsPara color={likeIconColor}>Like</YearsPara>
                </LikeButton>
                <DisLikeButton onClick={this.clickDisLiked}>
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

  renderResultsOfVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apisConsts.success:
        return this.renderVideoItemsDetailsContent()
      case apisConsts.failure:
        return this.renderVideoItemsDetailsFailureView()
      case apisConsts.inProgress:
        return this.renderVideoItemsDetailsLoader()
      default:
        return null
    }
  }

  retryAgain = () => {
    this.getVideoItemDetails()
  }

  renderVideoItemsDetailsFailureView = () => (
    <NxtWaveWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage alt="failure view" src={failureImage} />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <FailureButton type="button" onClick={this.retryAgain}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </NxtWaveWatchContext.Consumer>
  )

  renderVideoItemsDetailsLoader = () => (
    <NxtWaveWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LoaderContainer isDarkTheme={isDarkTheme} data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </NxtWaveWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWaveWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />

              <NavigationBar />
              <DataContainer bgColor={bgColor} data-testid="videoItemDetails">
                {this.renderResultsOfVideoItemDetails()}
              </DataContainer>
            </>
          )
        }}
      </NxtWaveWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails