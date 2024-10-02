import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
  margin-top: 60px;
`

export const NoSavedVideosImage = styled.img`
  height: 250px;
  width: 250px;
  margin-top: 20px;
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: bold;
  color: ${props => props.color};
`

export const NoSavedVideosPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.color};
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
  width: 100%;
`

export const NavigationSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosDataContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const SavedVideosHeaderContainer = styled.nav`
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 30px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#e2e8f0')};
`

export const SavedIconContainer = styled.div`
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

export const SavedHeaderHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideosUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
`