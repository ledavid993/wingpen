import { handleActions } from 'redux-actions'

import {
  CHANGE_MAIN_VIEW,
  SET_TASK_ITEMS,
} from '@redux/constants/main.constants'

import mockData from '@mockData/projects'

const initialState = {
  selectedView: 'home',
  projects: mockData,
  selectedItems: [],
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
}

const reducer = handleActions(reducerMap, initialState)

export default reducer
