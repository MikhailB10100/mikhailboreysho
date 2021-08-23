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
}: NavigationLinkProps): JSX.Element {
  return (
    <a
      className="footer__link"
      href={href}
      title={title}
      rel="noreferrer"
      target="_blank"
    >
      <img
        className="footer__l-image"
        width="30px"
        src={imgSrc}
        alt={`${textContent}-icon`}
      />
      <span className="footer__l-text">{textContent}</span>
    </a>
  )
}

export default NavigationLink
