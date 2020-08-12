import React from 'react'
import styled from 'styled-components'
import { DiJavascript1, DiPython, DiHtml5, DiReact, DiCss3 } from 'react-icons/di'

const SkillBar = ({ className, name, level, icon }) => {
  return (
    <div className={className}>
      <label className="skill_label" htmlFor={`${name}-bar`}>{name}</label>
      <div className="skill_box" >
        <div id={`${name}-bar`} className="skill__bar">
          <div className="skill__level animate-on-scroll"></div>
        </div>
        <div className="icons">
          {icon === 'JavaScript' ? <DiJavascript1 size="42" /> : ''}
          {icon === 'Python' ? <DiPython size="42" /> : ''}
          {icon === 'React' ? <DiReact size="42" /> : ''}
          {icon === 'HTML5' ? <DiHtml5 size="42" /> : ''}
          {icon === 'CSS3' ? <DiCss3 size="42" /> : ''}
        </div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;
  .skill__bar {
    width: 100%;
    height: 15px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill_label {
    font-size: 20px;
  }
  .skill_box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icons {
    margin-left: 15px;
  }
  .skill__level {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 0;
    height: 13px;

    &.is-visible {
      transition: width 0.5s ease-in;
      width: ${p => p.level || 0}%;
    }
  }
`
