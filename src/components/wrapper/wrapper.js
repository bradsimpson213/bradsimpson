import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 35px;
  width: 90%;
  padding: 25px;
  max-width: 960px;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0px auto 20px auto ;
  top: -150px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(128, 128, 128, 0.6);
  min-height: 150px;
  
  ${(props) => config(props).media.sm`
    width: 80%;
    padding: 50px;
  `}
`

export default Wrapper
