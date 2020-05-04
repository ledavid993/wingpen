import { handleActions } from 'redux-actions'

import {
  CHANGE_MAIN_VIEW,
  SET_TASK_ITEMS,
  SET_PROJECT,
} from '@redux/constants/main.constants'

import mockData from '@mockData/projects'

const initialState = {
  selectedView: 'home',
  projects: mockData,
  selectedItems: [],
  selectedProject: {},
}

const reducerMap = {
  [CHANGE_MAIN_VIEW]: (state: any, { payload }: any) => ({
    ...state,
    selectedView: payload?.selectedView,
  }),
  [SET_TASK_ITEMS]: (state: any, { payload }: any) => ({
    ...state,
    selectedItems: payload?.selectedItems,
  }),
  [SET_PROJECT]: (state: any, { payload }: any) => ({
    ...state,
    selectedProject: payload?.selectedProject,
  }),
}

const reducer = handleActions(reducerMap, initialState)

export default reducer
