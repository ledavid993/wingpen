import React, { useState } from 'react'
import { filter } from 'ramda'
import { Box, ThemeProvider, CSSReset } from '@chakra-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { MiddleSideBar, FirstSideBar, TaskGrid } from '../components'
import DocumentView from './Document'
import Projects from './Projects'
import HomeView from './Home'
import Tasks from './Tasks'
import theme from '../theme'

import styles from './Main.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView } = mainActions

interface ContentView {
  [contentView: string]: JSX.Element
}

const Main = () => {
  const { selectedView, projects, selectedItems } = useSelector(
    ({ main }: any) => main,
  )
  const [whichProjectView, toggleWhichProjectView] = useState('')

  const dispatch = useDispatch()

  const onProjectClick = (project: string) => {
    toggleWhichProjectView(project)
    dispatch(changeMainView('projects'))
    if (project === whichProjectView) {
      toggleWhichProjectView('')
    }
  }

  const CONTENT_VIEW: ContentView = {
    document: <DocumentView />,
    home: <HomeView />,
    projects: <Projects projects={projects} />,
    tasks: <Tasks items={selectedItems} />,
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
            onProjectClick={onProjectClick}
          />
        </div>
        {CONTENT_VIEW[selectedView]}
      </Box>
    </ThemeProvider>
  )
}

export default Main
