import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import NxtWaveWatchContext from '../../context/NxtWaveWatchContext'
import {
  DataContainer,
  SearchContainer,
  SearchInput,
  HomeContainer,
  HomeNavigationAndContentContainer,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailureButton,
  FailurePara,
  VideosUnorderedList,
  BannerContainer,
  BannerLogo,
  BannerHeading,
  BannerButton,
  BannerContentContainer,
  CancelButton,
  NoSearchContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchPara,
  NoSearchTryButton,
} from './StyledComponents'
import VideoItem from '../VideoItem'
import Header from '../Header'
import NavigationBar from '../NavigationBar'

const apisConsts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apisConsts.initial,
    videosData: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apisConsts.inProgress})

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
      this.setState({apiStatus: apisConsts.success, videosData: updatedData})
    } else {
      this.setState({apiStatus: apisConsts.failure})
    }
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchData = () => {
    this.getVideosData()
  }

  hideBanner = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerContentContainer>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>Buy Nxt Watch Premium</BannerHeading>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerContentContainer>
      <CancelButton onClick={this.hideBanner} data-testid="close">
        <AiOutlineClose size={25} />
      </CancelButton>
    </BannerContainer>
  )

  renderVideosContent = () => (
    <NxtWaveWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosData} = this.state
        const videosLength = videosData.length > 0

        return videosLength ? (
          <VideosUnorderedList>
            {videosData.map(video => (
              <VideoItem videoDetails={video} key={video.id} />
            ))}
          </VideosUnorderedList>
        ) : (
          <NoSearchContainer>
            <NoSearchImage
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
            />
            <NoSearchHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </NoSearchHeading>
            <NoSearchPara isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </NoSearchPara>
            <NoSearchTryButton type="button" onClick={this.retryAgain}>
              Retry
            </NoSearchTryButton>
          </NoSearchContainer>
        )
      }}
    </NxtWaveWatchContext.Consumer>
  )

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apisConsts.success:
        return this.renderVideosContent()
      case apisConsts.failure:
        return this.renderFailureView()
      case apisConsts.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  renderFailureView = () => (
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
    this.getVideosData()
  }

  renderLoader = () => (
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

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const {searchInput, showBanner} = this.state

          return (
            <HomeContainer bgColor={bgColor} data-testid="home">
              <Header />
              <HomeNavigationAndContentContainer>
                <NavigationBar />
                <DataContainer bgColor={bgColor}>
                  {showBanner && this.renderBanner()}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      onChange={this.getSearchInput}
                      placeholder="Search"
                      value={searchInput}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.getSearchData}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch size={20} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderResults()}
                </DataContainer>
              </HomeNavigationAndContentContainer>
            </HomeContainer>
          )
        }}
      </NxtWaveWatchContext.Consumer>
    )
  }
}

export default Home
