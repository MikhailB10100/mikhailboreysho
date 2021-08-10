import React from 'react'

interface NavigationLinkProps {
  href: string
  title: string
  imgSrc: string
  textContent: string
}

function NavigationLink({
  href,
  title,
  imgSrc,
  textContent,
}: NavigationLinkProps) {
  return (
    <a className="footer__link" href={href} title={title} target="_blank">
      <img className="footer__l-image" width="30px" src={imgSrc} />
      <span className="footer__l-text">{textContent}</span>
    </a>
  )
}

export default NavigationLink
