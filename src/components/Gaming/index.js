import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import GamingItem from '../GamingItem'

import {
  GamingDataContainer,
  GamingNavigationAndContentContainer,
  GamingContainer,
  GamingHeader,
  GamingIconContainer,
  GamingHeading,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailureButton,
  FailurePara,
  GamingVideosContainer,
} from './StyledComponents'

const apisConsts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apisConsts.initial, gamingVideosData: []}

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiStatus: apisConsts.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'

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
      const updatedData = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
      }))

      this.setState({
        gamingVideosData: updatedData,
        apiStatus: apisConsts.success,
      })
    } else {
      this.setState({
        apiStatus: apisConsts.failure,
      })
    }
  }

  renderGamingVideosContent = () => {
    const {gamingVideosData} = this.state

    return (
      <GamingVideosContainer>
        {gamingVideosData.map(video => (
          <GamingItem videoDetails={video} key={video.id} />
        ))}
      </GamingVideosContainer>
    )
  }

  retryAgain = () => {
    this.getGamingVideosData()
  }

  renderResultsGameData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apisConsts.success:
        return this.renderGamingVideosContent()
      case apisConsts.failure:
        return this.renderGamingFailureView()
      case apisConsts.inProgress:
        return this.renderGamingLoader()
      default:
        return null
    }
  }

  renderGamingFailureView = () => (
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
              We are having some trouble to complete your request.Please try
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

  renderGamingLoader = () => (
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

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f8fafc'

          return (
            <GamingContainer bgColor={bgColor} data-testid="gaming">
              <Header />
              <GamingNavigationAndContentContainer>
                <NavigationBar />
                <GamingDataContainer bgColor={bgColor}>
                  <GamingHeader isDarkTheme={isDarkTheme}>
                    <GamingIconContainer isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming size={30} color="#ff0000" />
                    </GamingIconContainer>
                    <GamingHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingHeader>
                  {this.renderResultsGameData()}
                </GamingDataContainer>
              </GamingNavigationAndContentContainer>
            </GamingContainer>
          )
        }}
      </NxtWaveWatchContext.Consumer>
    )
  }
}

export default Gaming