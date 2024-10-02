import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const TrendingNavigationAndContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const TrendingDataContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  width: 100%;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const TrendingHeader = styled.div`
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 30px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#e2e8f0')};
`

export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
    margin-top: 20px;
  }
`

export const TendingHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
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
  font-size: 25px;
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
  font-weight: 600;
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
export const TrendingVideosList = styled.ul`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
`