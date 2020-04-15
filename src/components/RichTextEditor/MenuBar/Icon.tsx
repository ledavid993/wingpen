import React, { ReactComponentElement, PureComponent } from 'react'
import { FaBold, FaItalic, FaParagraph, FaHeading } from 'react-icons/fa'

import styles from '../RichTextEditor.module.css'

interface Props {
  name: string
  text?: string | null
}

type MenuDict = {
  [name: string]: JSX.Element
}

const Icon: React.FC<Props> = ({ name, text }) => {
  const MENU_ICON: MenuDict = {
    strong: <FaBold />,
    em: <FaItalic />,
    paragraph: <FaParagraph />,
    heading: <FaHeading />,
  }

  return (
    <span className={styles.icon}>
      {MENU_ICON[name]}
      <span>{text}</span>
    </span>
  )
}

export default Icon
