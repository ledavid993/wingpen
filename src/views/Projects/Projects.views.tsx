import React, { useState, useCallback } from 'react'
import {
  useDisclosure,
  Divider,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/core'
import { useDispatch } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import { ProjectGrid, MenuBar, Dialog } from '@components/index'

import styles from './Projects.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView, setProject } = mainActions

interface Props {
  projects: any
}

const Project: React.FC<Props> = ({ projects }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  const dispatch = useDispatch()

  const handleBookClick = (project: any) => {
    console.log(project)
    dispatch(setProject(project))
    dispatch(changeMainView('tasks'))
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div className={styles.container}>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <ProjectGrid
              onOpen={onOpen}
              handleBookClick={handleBookClick}
              projects={projects}
            />
          </animated.div>
        ))}
      </div>
      <Dialog isOpen={isOpen} onClose={onClose}>
        <h2>Add Project</h2>
        <Divider orientation="horizontal" />
        <FormControl isRequired>
          <FormLabel htmlFor="project">Project Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Project Name"
            style={{ boxSizing: 'border-box', border: '1px solid gray' }}
          />
        </FormControl>
        <FormLabel htmlFor="project">Sub-title</FormLabel>
        <Input
          type="text"
          placeholder="Enter Sub-title"
          style={{ boxSizing: 'border-box', border: '1px solid gray' }}
        />
        <Button mt={4} variantColor="#1acccd" type="submit">
          Submit
        </Button>
      </Dialog>
    </div>
  )
}

export default Project
