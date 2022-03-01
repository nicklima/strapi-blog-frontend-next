import Image from "next/image"
import * as Styled from "./styled"

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Logos>
        <Styled.Logo
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/vercel.svg" alt="Vercel Logo" width={90} height={35} />
        </Styled.Logo>

        <Styled.Logo
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/nextjs.svg" alt="Next.js Logo" width={90} height={35} />
        </Styled.Logo>

        <Styled.Logo
          href="https://strapi.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/strapi.svg" alt="Strapi Logo" width={90} height={35} />
        </Styled.Logo>
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
}
export default Footer
