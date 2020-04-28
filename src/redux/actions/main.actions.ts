import { createActions } from 'redux-actions'

import {
  CHANGE_MAIN_VIEW,
  SET_TASK_ITEMS,
  SET_PROJECT,
} from '@redux/constants/main.constants'

export default createActions({
  [CHANGE_MAIN_VIEW]: (selectedView: string) => ({ selectedView }),
  [SET_TASK_ITEMS]: (selectedItems: any) => ({ selectedItems }),
  [SET_PROJECT]: (selectedProject: any) => ({ selectedProject }),
})
