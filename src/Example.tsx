import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Container } from './Container'
import { Menu } from './Menu'

export const Example: FC = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag],
  )

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <h1> Design Your Room!</h1>
        <Container hideSourceOnDrag={hideSourceOnDrag} />
        <Menu hideSourceOnDrag={hideSourceOnDrag} />
      </DndProvider>
    </div>
  )
}
export default Example;
