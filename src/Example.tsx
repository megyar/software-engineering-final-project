import type { FC } from 'react'
import { useCallback, useState } from 'react'

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
      <h1> Design Your Room!</h1>
      <Container hideSourceOnDrag={hideSourceOnDrag} />
      <Menu hideSourceOnDrag={hideSourceOnDrag} />
    </div>
  )
}
export default Example;
