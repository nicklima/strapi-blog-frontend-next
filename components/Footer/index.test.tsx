import { render, screen } from ".jest/utils"

import Footer from "."

describe("Components - <Footer />", () => {
  it("should render Footer", () => {
    render(<Footer />)

    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })

  it("should render the Footer with four links", () => {
    const { container } = render(<Footer />)
    expect(container.querySelectorAll("a")).toHaveLength(4)
  })
})
