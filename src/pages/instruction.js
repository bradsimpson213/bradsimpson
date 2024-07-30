import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 320px;
  max-width: 320px;
  object-fit: cover;
  ${'' /* object-position: center center; */}
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 20px;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-shadow: -1px 1px 0 #4169E1,
				  1px 1px 0 #4169E1,
				 1px -1px 0 #4169E1,
				-1px -1px 0 #4169E1;
`

const Instruction = ({ className, location }) => {
  const title = "Instructional Content"
  const { keywords, instructional } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero heroImg={withPrefix('https://brad-simpson-website.s3.amazonaws.com/lightning_bolts_needles_1024.jpg')} title={title} />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            { instructional.map(job => (
              <Col key={job.description} align="left">
                <JobCard
                  as={job.url ? 'a' : 'div'}
                  href={job.url}
                  target="_blank"
                >
                  <Title>{job.title}</Title>
                  <p>{job.description}</p>
                  <Image src={withPrefix(job.image)} />
                  <p style={{"font-style": "italic"}}>{job.tech}</p>
                </JobCard>
              </Col>
            )) }
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Instruction)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
