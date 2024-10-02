import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const TrendingVideoList = styled.li`
  width: 100%;
  list-style-type: none;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`
export const TrendingImageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingImage = styled.img`
  height: 200px;
  width: 300px;
  margin-right: 20px;
`
export const VideoInfoContainer = styled.div`
  margin-right: 10px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const VideoChannel = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`

export const ViewsDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoViews = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`

export const VideoDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
  margin-left: 10px;
`