import Image from "next/image"

import logos from "./data.json"
import * as Styled from "./styled"

const Footer = () => (
  <Styled.Footer>
    <Styled.Logos>
      {logos.map(({ link, alt, img }: ILogos, idx: number) => {
        return (
          <Styled.Logo
            key={`logos-${idx}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={img} alt={alt} loading="lazy" layout="fill" />
          </Styled.Logo>
        )
      })}
    </Styled.Logos>
    <Styled.Credits>
      <a
        href="https://github.com/nicklima/strapi-blog-frontend-next#credits"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repository and Credits
      </a>
    </Styled.Credits>
  </Styled.Footer>
)

export default Footer
