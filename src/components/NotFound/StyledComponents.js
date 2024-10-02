import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const NavigationNotFoundDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundDataContainer = styled.div`
  direction: flex;
  flex-direction: row;
  justify-content: center;

  text-align: center;
  margin-top: 30px;
  width: 100%;
`

export const NotFoundImage = styled.img`
  height: 200px;
  width: 250px;
`

export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#909090')};
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`