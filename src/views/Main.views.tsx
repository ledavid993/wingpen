import React, { useState } from 'react'
import { Box, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { MiddleSideBar } from '../components'
import DocumentView from './Document'
import theme from '../theme'
import logo from '../assets/logo.png'
import data from '../mockData/projects'

import styles from './Main.module.css'

const Main = () => {
  const [whichProjectView, toggleWhichProjectView] = useState('')
  const [projects, setProjects] = useState(data)

  const onTabClick = (project: string) => {
    toggleWhichProjectView(project)
    if (project === whichProjectView) {
      toggleWhichProjectView('')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box display="grid" gridTemplateColumns="66px 30% auto" overflow="hidden">
        <div className={styles.firstSidebar}>
          <img src={logo} />
        </div>
        <Box bg="whitesmoke">
          <MiddleSideBar
            projects={projects}
            whichProjectView={whichProjectView}
            onTabClick={onTabClick}
          />
        </Box>
        <DocumentView />
      </Box>
    </ThemeProvider>
  )
}

export default Main
