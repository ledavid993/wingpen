import { Box } from '@chakra-ui/core'
import { baseKeymap } from 'prosemirror-commands'
import { history, redo, undo } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import prosemirrorDevTools from 'prosemirror-dev-tools'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'

interface Props {
  defaultValue: any
  onChange: any
}

const Prosemirror: React.FC<Props> = ({ defaultValue, onChange }) => {
  const editorViewRef = useRef(null)
  const handleChange = useCallback(onChange, [])
  const state = useMemo(() => {
    const doc = schema.nodeFromJSON(defaultValue)
    return EditorState.create({
      doc,
      plugins: [
        history(),
        keymap({
          'Mod-z': undo,
          'Mod-y': redo,
        }),
        keymap(baseKeymap),
      ],
    })
  }, [defaultValue])

  useEffect(() => {
    const editorView = editorViewRef.current
    if (editorView) {
      const view = new EditorView(editorView, {
        state,
        dispatchTransaction(tx) {
          const newState = view.state.apply(tx)
          handleChange(newState.doc.toJSON())
          view.updateState(newState)
        },
      })
      prosemirrorDevTools(view)
    }
  }, [state, handleChange])

  return (
    <Box rounded="md" borderWidth="1px" p={4}>
      <div ref={editorViewRef} />
    </Box>
  )
}

export default Prosemirror
