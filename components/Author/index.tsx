import dynamic from "next/dynamic"

const ImageStrapi = dynamic(() => import("components/ImageStrapi"))
const Links = dynamic(() => import("components/Links"))

import { Email, Instagram, Facebook, Linkedin, Twitter } from "icons"
import * as Styled from "./styled"

const Author = ({ data }: any) => {
  const { picture, name, email, about, social, slug } = data

  const socialMedia = {
    linkedin: <Linkedin />,
    twitter: <Twitter />,
    facebook: <Facebook />,
    instagram: <Instagram />,
    email: <Email />,
  } as any

  return (
    <Styled.Author>
      <Styled.Picture>
        <ImageStrapi image={picture} layout="fill" />
      </Styled.Picture>
      <Styled.Info>
        <Styled.Title>
          <Links to={`/authors/${slug}`} alt={`See all ${name} posts`}>
            {name}
          </Links>
        </Styled.Title>
        <Styled.About>{about}</Styled.About>
      </Styled.Info>
      {social && (
        <Styled.Social>
          <Styled.Network>
            <Links
              to={`mailto: ${email}`}
              target="_blank"
              alt={`${name} e-mail address`}
            >
              {socialMedia["email"]}
            </Links>
          </Styled.Network>
          {social.map((item: any) => {
            const { id, network, url } = item
            return (
              <Styled.Network key={`social_${id}`}>
                <Links
                  to={url}
                  target="_blank"
                  alt={`Visit ${name} ${network} profile`}
                >
                  {socialMedia[network]}
                </Links>
              </Styled.Network>
            )
          })}
        </Styled.Social>
      )}
    </Styled.Author>
  )
}

export default Author
