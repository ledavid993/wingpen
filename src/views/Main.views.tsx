import React, { useState } from 'react'
import { filter } from 'ramda'
import {
  Box,
  ThemeProvider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import SVG from 'react-inlinesvg'

import { MenuBar } from '../components'
import DocumentView from './Document'
import Projects from './Projects'
import FirstSideBar from './FirstSideBar'
import MiddleSideBar from './MiddleSideBar'
import HomeView from './Home'
import SubTasks from './SubTasks'
import Tasks from './Tasks'
import theme from '../theme'

import styles from './Main.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView } = mainActions

interface ContentView {
  [contentView: string]: JSX.Element
}

const Main = () => {
  const [breadCrumb, setBreadCrumb] = useState()
  const {
    selectedView,
    projects,
    selectedItems,
    selectedProject,
  } = useSelector(({ main }: any) => main)
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
    tasks: <Tasks project={selectedProject} />,
    subTasks: <SubTasks project={selectedItems} />,
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
        <div className={styles.cView}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <MenuBar />
          {CONTENT_VIEW[selectedView]}
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default Main
