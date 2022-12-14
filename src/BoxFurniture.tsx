import type { CSSProperties, FC, ReactNode } from 'react'
import { useDrag } from 'react-dnd'
import { ImageViewer } from './ImageViewrer'

import { ItemTypes } from './ItemTypes'

const style: CSSProperties = {
  position: 'absolute',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

export interface FurnitureBoxProps {
  id: any
  left: number
  top: number
  picture: string;
  hideSourceOnDrag?: boolean
  children?: ReactNode
}

export const FBox: FC<FurnitureBoxProps> = ({
  id,
  left,
  top,
  picture,
  hideSourceOnDrag,
  children,
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.FBOX,
      item: { 
        id, left, top, picture },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, picture],
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
      
      <ImageViewer imageName={picture}></ImageViewer>
      {isDragging && 'GET PROPERTIES OF FURNITURE TO SHOW'}
    </div>
  )
}
