import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Container } from './Container'
import { Menu } from './Menu'
import  DropDown  from './Dropdown'
import './Example.css'


export const Example: FC = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectFurniture, setSelectFurniture] = useState<string>("");
  const furniture = () => {
    return ["Beds", "Couches", "Chairs"];
  };
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };
  const furnitureSelection = (furniture: string): void => {
    setSelectFurniture(furniture);
    console.log(furniture);
  };

  const [menuboxes, setmenuBoxes] = useState<{
    [key: string]: {
      top: number
      left: number
      picture: string
      title: string
      type: string
    }
  }>({
    bed1: { top: 10, left: 110, picture: "./Furniture/bed1.jpg", title: 'bed1', type: 'fbox' },
    bed2: { top: 5, left: 200, picture: "./Furniture/bed2.jpg", title: 'bed2', type: 'fbox' },
    bed3: { top: 5, left: 300, picture: "./Furniture/bed3.jpg", title: 'bed3', type: 'fbox' },
    bed4: { top: 5, left: 400, picture:  "./Furniture/bed4.jpg", title: 'bed4', type: 'fbox'},
  })

  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag],
  )

  return (
    <>
        <h1> Design Your Room!</h1>
      {selectFurniture
      ? 'You are currently looking at '+ selectFurniture 
      : "Select furniture type"}
    <div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
         <div>{selectFurniture ? "Select: " + selectFurniture : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            furniture={furniture()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            furnitureSelection={furnitureSelection}
          />
        )}
      </button>
      <div>
  
      <DndProvider backend={HTML5Backend}>
        
        <Container hideSourceOnDrag={hideSourceOnDrag} />
        <Menu hideSourceOnDrag={hideSourceOnDrag} menuboxes={menuboxes} setmenuBoxes={setmenuBoxes}/>
      </DndProvider>
    </div>
      </div></>
  )
}
export default Example;
