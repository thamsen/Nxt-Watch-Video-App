import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 100%;
  position: fixed;

  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const IconsUnorderedList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CustomList = styled.li`
  list-style-type: none;
`
export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkTheme ? '#f4f4f4' : '#3b82f6')};
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutButtonIcon = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LinkElement = styled(Link)`
  text-decoration: none;
`
export const LogoImage = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const LogoutCard = styled.div`
  height: 150px;
  width: 250px;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? ' #212121' : '#cbd5e1')};
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  text-align: center;
`
export const CancelButton = styled.button`
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 7px;
  background-color: transparent;
  color: #ebebeb;

  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const ConfirmButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #3b82f6;
  border-radius: 7px;
  color: #ffffff;

  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const LogoutPara = styled.p`
  font-weight:600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')}
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const MenuIcon = styled.div`
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#010101')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`