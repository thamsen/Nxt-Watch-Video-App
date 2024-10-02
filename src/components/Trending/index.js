import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  TrendingContainer,
  TrendingNavigationAndContentContainer,
  TrendingHeader,
  TrendingIconContainer,
  TendingHeading,
  TrendingDataContainer,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailureButton,
  FailurePara,
  TrendingVideosList,
} from './StyledComponents'

const apisConsts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apisConsts.initial, trendingVideosData: []}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiStatus: apisConsts.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'

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
        channel: item.channel,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }))
      console.log(updatedData)
      this.setState({
        apiStatus: apisConsts.success,
        trendingVideosData: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apisConsts.failure,
      })
    }
  }

  renderTrendingVideosContent = () => {
    const {trendingVideosData} = this.state

    return (
      <TrendingVideosList>
        {trendingVideosData.map(video => (
          <TrendingVideoItem videoDetails={video} key={video.id} />
        ))}
      </TrendingVideosList>
    )
  }

  renderResultViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apisConsts.success:
        return this.renderTrendingVideosContent()
      case apisConsts.failure:
        return this.renderTrendingFailureView()
      case apisConsts.inProgress:
        return this.renderTrendingLoader()
      default:
        return null
    }
  }

  renderTrendingFailureView = () => (
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

  retryAgain = () => {
    this.getTrendingVideosData()
  }

  renderTrendingLoader = () => (
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
            <TrendingContainer bgColor={bgColor} data-testid="trending">
              <Header />
              <TrendingNavigationAndContentContainer>
                <NavigationBar />
                <TrendingDataContainer bgColor={bgColor}>
                  <TrendingHeader isDarkTheme={isDarkTheme}>
                    <TrendingIconContainer isDarkTheme={isDarkTheme}>
                      <HiFire size={30} color="#ff0000" />
                    </TrendingIconContainer>
                    <TendingHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TendingHeading>
                  </TrendingHeader>
                  {this.renderResultViews()}
                </TrendingDataContainer>
              </TrendingNavigationAndContentContainer>
            </TrendingContainer>
          )
        }}
      </NxtWaveWatchContext.Consumer>
    )
  }
}

export default Trending