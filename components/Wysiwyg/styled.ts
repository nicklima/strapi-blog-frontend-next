import styled from "styled-components"
import ReactMarkdown from "react-markdown"

import { theme } from "styles/theme"

export const Wysiwyg = styled(ReactMarkdown)`
  color: ${theme.text};

  p {
    margin-bottom: 15px;
  }
`
