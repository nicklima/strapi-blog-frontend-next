import { useRouter } from "next/router"
import * as Styled from "./styled"

const Pagination = ({ pagination }: any) => {
  const router = useRouter()
  const { current, limit, total } = pagination

  const qtdPages = Math.ceil(total / limit)
  const navMap = Array.from(Array(qtdPages).keys())

  return (
    <Styled.Pages>
      <Styled.PagesList>
        {navMap?.map((page: number) => {
          const pageNumber = page + 1
          const isActive = pageNumber === current
          return (
            <Styled.PagesItem
              key={`page-${page}`}
              active={isActive}
              disabled={isActive}
              onClick={() => router.push(`?page=${pageNumber}`)}
            >
              {pageNumber}
            </Styled.PagesItem>
          )
        })}
      </Styled.PagesList>
    </Styled.Pages>
  )
}

export default Pagination
