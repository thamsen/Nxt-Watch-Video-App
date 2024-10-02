import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const HomeNavigationAndContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const DataContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  height: 40px;
`

export const SearchInput = styled.input`
  border: 1px solid #616e7c;
  padding: 5px;
  background-color: transparent;
  width: 40%;
`
export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d7dfe9;
  border: none;
  color: #7e858e;
`
export const LoaderContainer = styled.div`
  direction: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`

export const FailureContainer = styled.div`
  direction: flex;
  flex-direction: row;
  justify-content: center;

  text-align: center;
  margin-top: 20px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const FailureImage = styled.img`
  height: 200px;
  width: 250px;
`

export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#909090')};
`

export const FailureButton = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  width: 100px;
`
export const VideosUnorderedList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const BannerLogo = styled.img`
  width: 120px;
  height: 50px;
`

export const BannerHeading = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: bold;
  color: #383838;
`

export const BannerButton = styled.button`
  border: 2px solid #383838;
  color: #383838;
  padding: 7px;
  width: 100px;
  background-color: transparent;
`
export const BannerContentContainer = styled.div`
  padding: 0px;
`
export const CancelButton = styled.button`
  border: none;
  background-color: transparent;
`

export const NoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const NoSearchImage = styled.img`
  height: 200px;
  width: 200px;
`

export const NoSearchHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const NoSearchPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
`

export const NoSearchTryButton = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  width: 100px;
`