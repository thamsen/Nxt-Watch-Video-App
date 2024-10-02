import styled from 'styled-components'

export const DataContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
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
  font-size: 15px;
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
  font-weight: bold;
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

export const VideoItemDetailsDataContainer = styled.div`
  padding: 20px;
`

export const VideoViewsYearsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PlayVideoStatus = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const VideoItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.textColor};
`

export const ViewsPara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.color};
`

export const YearsPara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.color};
  margin-left: 10px;
`

export const LikesSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HrLine = styled.hr`
  color: ${props => props.color};
  width: 100%;
  background-color: ${props => props.color};
`
export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChannelNameSubscribersContainer = styled.div`
  margin-left: 10px;
`

export const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 20px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 600;
  color: ${props => props.textColor};
`

export const SubscribesCount = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.color};
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.color};
`

export const DisLikeButton = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  background-color: transparent;
  border: none;
`

export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  background-color: transparent;
  border: none;
`

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  background-color: transparent;
  border: none;
`