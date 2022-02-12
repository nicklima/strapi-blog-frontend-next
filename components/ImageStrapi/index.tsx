import NextImage from "next/image"
import { getStrapiMedia } from "lib/media"
import { IStrapiImage } from "interfaces"

const ImageStrapi = ({ image, layout, width, height }: IStrapiImage) => {
  const { alternativeText } = image.data.attributes

  const imgW = width ? width : image.data.attributes.width
  const imgH = height ? height : image.data.attributes.height

  const loader = () => {
    return getStrapiMedia(image)
  }

  if (layout === "fill") {
    return (
      <NextImage
        loader={loader}
        layout="fill"
        objectFit="cover"
        src={getStrapiMedia(image)}
        alt={alternativeText || ""}
      />
    )
  }

  return (
    <NextImage
      loader={loader}
      layout={layout || "responsive"}
      width={imgW}
      height={imgH}
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default ImageStrapi
