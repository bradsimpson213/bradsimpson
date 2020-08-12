import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaAngellist, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../data/siteConfig'

const Link = styled(({ className, icon: Icon, color, ...props }) => (
  <a 
    className={className}
    target='_blank'
    rel="noopener noreferrer"
    {...props}
  >
    <Icon color={color} size={32} />
  </a>
)).attrs(props => ({ color: props.theme.colors.primary }))`
  & + & {
    margin-left: 24px;
  }
`;

const Footer = ({ className }) => {
  const {
    angel,
    linkedin,
    github,
    email,
  } = siteConfig.social
  return (
    <footer className={className}>
      {`© ${new Date().getFullYear()} ${siteConfig.authorName}`}
      <div>
        {github && <Link href={github} icon={FaGithub} />}
        {linkedin && <Link href={linkedin} icon={FaLinkedin} />}
        {angel && <Link href={angel} icon={FaAngellist} />}
        {email && <Link href={`mailto:${email}`} icon={FaEnvelope} />}
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px; 
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 35px 35px 0px 0px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(128, 128, 128, 0.6);
  background: ${({ theme }) => theme.colors.background};

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`;