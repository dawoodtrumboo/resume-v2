import React from 'react'

const CustomButton = (props) => {

    const btnStyle = {
        margin:'5px',
        display: 'flex',
        height: '60px',
        padding: '16px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'stretch',
        borderRadius: '9px',
        background: 'var(--gradient-dark-gradient, linear-gradient(180deg, #1A1A1A 0%, #131313 100%))',
        boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(255, 255, 255, 0.08) inset, 0px 1px 2px 0px rgba(255, 255, 255, 0.02) inset',
      };
  return (
    <button style={btnStyle}>
       <a href={`${props.link?props.link:'#'}`} target='_blank'>{props.name}</a>
    </button>
  )
}

export default CustomButton