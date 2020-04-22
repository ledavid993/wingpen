import React from 'react'

import TabItem from '../TabItem'

import styles from './MiddleSideBar.module.css'

interface Props {
  projects?: any
  onProjectClick: (project: string) => void
  whichProjectView: string
}

interface Item {
  number?: number
  project: string
  content: string
}

const MiddleSideBar: React.FC<Props> = ({
  projects,
  onProjectClick,
  whichProjectView,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>Project</div>
      {projects.map((project: any) => (
        <TabItem
          name={project.project_name}
          project={project}
          whichProjectView={whichProjectView}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  )
}

export default MiddleSideBar
