import update from 'immutability-helper'
import type { CSSProperties, FC } from 'react'
import { useCallback, useState } from 'react'
//import type { XYCoord } from 'react-dnd'
//import { useDrop } from 'react-dnd'

import { FBox } from './BoxFurniture'
//import type { DragItem } from './interfaces'
//import { ItemTypes } from './ItemTypes'

const styles: CSSProperties = {
  width: 1000,
  height: 100,
  position: 'relative',
}

export interface MenuProps {
  hideSourceOnDrag: boolean
}

export interface MenuState {
  boxes: { [key: string]: { top: number; left: number; pic: string, title: string } }
}

export const  Menu: FC<MenuProps> = ({ hideSourceOnDrag }) => {
  const [menuboxes, setmenuBoxes] = useState<{
    [key: string]: {
      top: number
      left: number
      pic: string
      title: string
      type: string
    }
  }>({
    bed1: { top: 10, left: 110, pic: "./Furniture/bed1.jpg", title: 'bed1', type: 'fbox' },
    bed2: { top: 5, left: 200, pic: "./Furniture/bed2.jpg", title: 'bed2', type: 'fbox' },
    bed3: { top: 5, left: 300, pic: "./Furniture/bed3.jpg", title: 'bed3', type: 'fbox' },
    bed4: { top: 5, left: 400, pic:  "./Furniture/bed4.jpg", title: 'bed4', type: 'fbox'},
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setmenuBoxes(
        update(menuboxes, {
          [id]: {
            $merge: { left, top, },
          },
        }),
      )
    },
    [menuboxes, setmenuBoxes],
  )

  // const [, drop] = useDrop(
  //   () => ({
  //     accept: ItemTypes.BOX,
  //     drop(item: DragItem, monitor) {
  //       const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
  //       const left = Math.round(item.left + delta.x)
  //       const top = Math.round(item.top + delta.y)
  //       moveBox(item.id, left, top)
  //       return undefined
  //     },
  //   }),
  //   [moveBox],
  // )

  return (
    <div style={styles}>
      {Object.keys(menuboxes).map((key) => {
        const { left, top, pic } = menuboxes[key] as {
          top: number
          left: number
          title: string
          pic: string
        }
        return (
          <FBox
            key={key}
            id={key}
            left={left}
            top={top}
            pic={pic}
            //hideSourceOnDrag={hideSourceOnDrag}
          >
            
          </FBox>
        )
      })}
    </div>
  )
}
