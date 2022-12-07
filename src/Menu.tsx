import update from 'immutability-helper'
import type { CSSProperties, FC } from 'react'
import { useCallback } from 'react'
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
  menuboxes: {
    [key: string]: {
      top: number
      left: number
      picture: string
      title: string
      type: string
    }
  }
  setmenuBoxes: (menuboxes: any) => void
}

export interface MenuState {
  boxes: { [key: string]: { top: number; left: number; picture: string, title: string } }
}

export const  Menu: FC<MenuProps> = ({ hideSourceOnDrag, menuboxes, setmenuBoxes}) => {

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
        const { left, top, picture } = menuboxes[key] as {
          top: number
          left: number
          title: string
          picture: string
        }
        return (
          <FBox
            key={key}
            id={key}
            left={left}
            top={top}
            picture={picture}
            //hideSourceOnDrag={hideSourceOnDrag}
          >
            
          </FBox>
        )
      })}
    </div>
  )
}
