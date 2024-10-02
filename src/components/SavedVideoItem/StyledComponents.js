import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const SaveVideoList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
  margin-left: 20px;
`

export const SavedVideoImage = styled.img`
  width: 40%;
  height: 200px;
`
export const SavedVideoContentContainer = styled.div`
  margin-left: 20px;
`

export const SavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const SavedVideoChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`

export const ViewsYearsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsPara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`

export const YearsPara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
  margin-left: 10px;
`
