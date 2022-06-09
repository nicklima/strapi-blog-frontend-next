import NextImage from "next/image"
import { IStrapiImage, IImageLoader } from "interfaces"
import { getStrapiMedia } from "lib/media"

const ImageStrapi = ({ image, layout, width, height }: IStrapiImage) => {
  const { alternativeText } = image.data.attributes

  const imgSrc = getStrapiMedia(image)
  const imgW = width ? width : image.data.attributes.width
  const imgH = height ? height : image.data.attributes.height

  const loader = ({ src, width, quality, format }: IImageLoader) => {
    return `${src}?w=${width}&q=${quality || 75}&f=${format || "webp"}`
  }

  if (layout === "fill") {
    return (
      <NextImage
        alt={alternativeText || ""}
        blurDataURL={imgSrc}
        layout="fill"
        loader={loader}
        objectFit="cover"
        placeholder="blur"
        src={imgSrc}
      />
    )
  }

  return (
    <NextImage
      alt={alternativeText || ""}
      blurDataURL={imgSrc}
      height={imgH}
      layout={layout || "responsive"}
      loader={loader}
      objectFit="cover"
      placeholder="blur"
      src={imgSrc}
      width={imgW}
    />
  )
}

export default ImageStrapi
