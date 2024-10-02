import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoList = styled.li`
  background: none;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const VideoImage = styled.img`
  height: 100px;
  width: 100%;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const VideoChannel = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`

export const ViewsDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoViews = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
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

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoProfileImage = styled.img`
  height: 20px;
  width: 20px;
  margin-top: 15px;
`

export const VideoInfoContainer = styled.div`
  margin-right: 10px;
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`