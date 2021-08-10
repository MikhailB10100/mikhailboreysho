import React from 'react'
import NavigationLink from '@components/Footer/NavigationLink'

function NavigationMenu() {
  return (
    <div className="footer__links">
      <NavigationLink
        href="https://github.com/MikhailB10100"
        title="GitHub"
        imgSrc="http://cdn.onlinewebfonts.com/svg/download_326384.png"
        textContent="@MikhailB10100"
      />
      <NavigationLink
        href="https://www.linkedin.com/in/morejso/?locale=en_US"
        title="LinkedIn"
        imgSrc="https://mavitecgreenenergy.com/wp-content/uploads/2016/04/Linkedin-Icon.png"
        textContent="Mikhail Boreysho"
      />
      <NavigationLink
        href="https://t.me/Morejso"
        title="Telegram"
        imgSrc="https://avoshop.ru/upload/medialibrary/d5a/4ij9nw14iqtsa7rgwo4vnf8c3c10xbof.png"
        textContent="@morejso"
      />
      <NavigationLink
        href="https://github.com/MikhailB10100"
        title="GMail"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
        textContent="klevak322@gmail.com"
      />
    </div>
  )
}

export default NavigationMenu
