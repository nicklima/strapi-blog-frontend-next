import Image from "next/image"
import { buildUrl } from "cloudinary-build-url"
import { IStrapiImage } from "interfaces"

const ImageStrapi = ({ image, layout, width, height }: IStrapiImage) => {
  // Cloudinary cloud name
  const cloudName = process.env.cloudname

  // Image data
  const { alternativeText } = image.data.attributes
  const imageId = image.data.attributes.provider_metadata.public_id

  // Image sizes
  const imgW = width ? width : image.data.attributes.width
  const imgH = height ? height : image.data.attributes.height

  // Image urls
  const url = buildUrl(imageId, { cloud: { cloudName } })
  const blurImg = buildUrl(imageId, {
    cloud: { cloudName },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  })

  if (layout === "fill") {
    return (
      <Image
        alt={alternativeText || ""}
        blurDataURL={blurImg}
        layout="fill"
        loading="lazy"
        objectFit="cover"
        placeholder="blur"
        src={url}
      />
    )
  }

  return (
    <Image
      alt={alternativeText || ""}
      blurDataURL={blurImg}
      height={imgH}
      layout={layout || "responsive"}
      loading="lazy"
      objectFit="cover"
      placeholder="blur"
      src={url}
      width={imgW}
    />
  )
}

export default ImageStrapi
