import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  box-shadow: 0px 4px 16px 0px
    ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 10px;
  width: 40%;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const WebsiteLogoImage = styled.img`
  height: 50px;
  width: 130px;
  margin-bottom: 20px;
  width: 80%;
`

export const DetailsContainer = styled.div`
  margin-bottom: 23px;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  margin-bottom: 5px;
`

export const InputElement = styled.input`
  padding: 10px;
  border: 1px solid '#f1f1f1';
`

export const LoginButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  width: 80%;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  width: 80%;
`

export const CheckBoxInput = styled.input`
  height: 15px;
  width: 15px;
`

export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 800;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  margin-left: 10px;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ff0b37;
  margin-bottom: 10px;
  width: 80%;
  text-align: left;
`
