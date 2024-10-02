import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import NxtWaveWatchContext from './context/NxtWaveWatchContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRouteAll'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addSaveVideo = video => {
    const {savedVideosList} = this.state
    const index = savedVideosList.findIndex(
      eachVideo => eachVideo.id === video.id,
    )

    if (index === -1) {
      this.setState({savedVideosList: [...savedVideosList, video]})
    } else {
      savedVideosList.splice(index, 1)
      this.setState({savedVideosList})
    }
  }

  render() {
    const {isDarkTheme, savedVideosList, activeTab} = this.state
    return (
      <NxtWaveWatchContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideosList,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addSaveVideo: this.addSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWaveWatchContext.Provider>
    )
  }
}

export default App