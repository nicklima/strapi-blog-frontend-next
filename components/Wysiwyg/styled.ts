import styled from "styled-components"
import ReactMarkdown from "react-markdown"

export const Wysiwyg = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.text};

  p {
    margin-bottom: 15px;
  }

  iframe[src*="youtube"] {
    width: 100%;
    margin: 30px 0;
    height: 300px;

    @media screen and (min-width: 600px) {
      height: 400px;
    }

    @media screen and (min-width: 900px) {
      height: 480px;
    }
  }
`
