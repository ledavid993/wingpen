import React, { useState } from 'react'
import { Box, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { MiddleSideBar, FirstSideBar } from '../components'
import DocumentView from './Document'
import Projects from './Projects'
import HomeView from './Home'
import theme from '../theme'

import data from '../mockData/projects'

import styles from './Main.module.css'

interface ContentView {
  [contentView: string]: JSX.Element
}

const Main = () => {
  const [whichProjectView, toggleWhichProjectView] = useState('')
  const [projects, setProjects] = useState(data)
  const [contentView, setContentView] = useState('projects')

  const onTabClick = (project: string) => {
    toggleWhichProjectView(project)
    if (project === whichProjectView) {
      toggleWhichProjectView('')
    }
  }

  const CONTENT_VIEW: ContentView = {
    document: <DocumentView />,
    home: <HomeView />,
    projects: <Projects />,
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="grid"
        gridTemplateColumns="66px 20% auto"
        overflow="hidden"
        height="100vh"
      >
        <FirstSideBar />
        <div className={styles.msbWrapper}>
          <MiddleSideBar
            projects={projects}
            whichProjectView={whichProjectView}
            onTabClick={onTabClick}
          />
        </div>
        {CONTENT_VIEW[contentView]}
      </Box>
    </ThemeProvider>
  )
}

export default Main
