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
        <Menu hideSourceOnDrag={hideSourceOnDrag} />
      </DndProvider>
    </div>
      </div></>
  )
}
export default Example;
