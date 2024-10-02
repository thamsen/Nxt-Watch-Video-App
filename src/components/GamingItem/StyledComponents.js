import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const GamingList = styled.li`
  list-style-type: none;
  width: 30%;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const GamingImage = styled.img`
  height: 200px;
  width: 90%;
`

export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const GamingViews = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`