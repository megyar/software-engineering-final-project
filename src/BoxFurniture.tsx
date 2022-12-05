import type { CSSProperties, FC, ReactNode } from 'react'
import { useDrag } from 'react-dnd'
import { ImageViewer } from './ImageViewrer'

import { ItemTypes } from './ItemTypes'

const style: CSSProperties = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

export interface FurnitureBoxProps {
  id: any
  left: number
  top: number
  pic: string;
  hideSourceOnDrag?: boolean
  children?: ReactNode
}

export const FurnitureBox: FC<FurnitureBoxProps> = ({
  id,
  left,
  top,
  pic,
  hideSourceOnDrag,
  children,
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.FURNITUREBOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div
      className="furniturebox"
      ref={drag}
      style={{ ...style, left, top }}
      data-testid="furniturebox"
    >
      {children}
      
      <ImageViewer imageName={pic}></ImageViewer>
      {isDragging && 'GET PROPERTIES OF FURNITURE TO SHOW'}
    </div>
  )
}
