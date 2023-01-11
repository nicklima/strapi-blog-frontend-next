import { render, screen } from ".jest/utils"

import Layout from "."
import { imageSeo } from "./__mock__/image"

const seo = {
  metaTitle: "test of layout component",
  metaImage: imageSeo,
}

describe("Components - <Layout />", () => {
  it("should render Layout", () => {
    const children = <p>This is Layout component</p>
    render(<Layout seo={seo}>{children}</Layout>)
    expect(screen.getByText("This is Layout component")).toBeInTheDocument()
  })
})
