import React, { useEffect, useState } from 'react';

type DropDownProps = {
  furniture: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  furnitureSelection: Function;
};

const Dropdown: React.FC<DropDownProps> = ({
  furniture,
  furnitureSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

const onClickHandler = (furniture: string): void => {
    furnitureSelection(furniture);
    console.log(furniture);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {furniture.map(
          (f: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(f);
                }}
              >
                {f}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default Dropdown;
