import ImageStrapi from "components/ImageStrapi"
import * as Styled from "./styled"

import Links from "components/Links"
import { Email, Instagram, Facebook, Linkedin, Twitter } from "icons"

const Author = ({ data }: any) => {
  const { picture, name, email, about, social, slug } = data.attributes

  const getLinks = (n: string) => {
    switch (n) {
      case "linkedin":
        return <Linkedin width="15" height="15" />
      case "twitter":
        return <Twitter width="15" height="15" />
      case "facebook":
        return <Facebook width="15" height="15" />
      case "instagram":
        return <Instagram width="15" height="15" />
      case "email":
        return <Email width="15" height="15" />
      default:
        return
    }
  }

  return (
    <Styled.Author>
      <Styled.Picture>
        <ImageStrapi image={picture} layout="fill" />
      </Styled.Picture>
      <Styled.Info>
        <Styled.Title>
          <Links to={`/authors/${slug}`}>{name}</Links>
        </Styled.Title>
        <Styled.About>{about}</Styled.About>
      </Styled.Info>
      {social && (
        <Styled.Social>
          <Styled.Network>
            <Links to={`mailto: ${email}`} target="_blank">
              {getLinks("email")}
            </Links>
          </Styled.Network>
          {social.map((item: any) => {
            const { id, network, url } = item
            return (
              <Styled.Network key={`social_${id}`}>
                <Links to={url} target="_blank">
                  {getLinks(network)}
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
