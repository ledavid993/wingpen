import React from 'react'

import TabItem from '../TabItem'

import styles from './MiddleSideBar.module.css'

interface Props {
  projects?: any
  onTabClick: (project: string) => void
  whichProjectView: string
}

interface Item {
  number?: number
  project: string
  content: string
}

const MiddleSideBar: React.FC<Props> = ({
  projects,
  onTabClick,
  whichProjectView,
}) => {
  return (
    <div>
      <div className={styles.tabHeader}>Project</div>
      {projects.map((project: any) => (
        <TabItem
          name={project.project_name}
          project={project}
          whichProjectView={whichProjectView}
          onTabClick={onTabClick}
        />
      ))}
    </div>
  )
}

export default MiddleSideBar
