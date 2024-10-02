import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  margin-top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavigationOptions = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
`

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  padding: 5px;
`

export const NavText = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  color: ${props => props.color};
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`

export const ContactText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const LogoElement = styled.img`
  height: 30px;
  width: 30px;
`