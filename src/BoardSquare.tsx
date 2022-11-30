import React from "react";
import update from "immutability-helper";
import type { CSSProperties, FC } from "react";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";

import { Box } from "./Box";
import type { DragItem } from "./interfaces";
import { ItemTypes } from "./ItemTypes";
import Bed1 from "./Furniture/bed 1.jpg";

const styles: CSSProperties = {
    width: 300,
    height: 300,
    border: "1px solid black",
    position: "relative"
};

export interface ContainerProps {
    hideSourceOnDrag: boolean;
}

export interface ContainerState {
    boxes: { [key: string]: { top: number; left: number; title: string; img: Object} };
}

export const BoardSquare: FC<ContainerProps> = ({ hideSourceOnDrag }) => {
    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
            img: Object;
        };
    }>({
        a: { top: 20, left: 80, title: "Drag me around", img: Bed1},
        b: { top: 180, left: 20, title: "Drag me too", img: Bed1 },
        c: { top: 200, left: 40, title: "new", img: Bed1 }
    });

    const moveBox = useCallback(
        (id: string, left: number, top: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top }
                    }
                })
            );
        },
        [boxes, setBoxes]
    );

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveBox(item.id, left, top);
                return undefined;
            }
        }),
        [moveBox]
    );

    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map((key) => {
                const { left, top, title } = boxes[key] as {
                    top: number;
                    left: number;
                    title: string;
                };
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                    >
                        {title}
                    </Box>
                );
            })}
        </div>
    );
};

// import React from "react";
// import { useDrop } from "react-dnd";
// import { ItemTypes } from "./constants";
// import { canMovePic, movePic } from "./game";
// import Overlay from "./Overlay";
// import Square from "./Square";
// import DropDown from "./dropDown";

// type BoardSquareProps = {
//     x: number;
//     y: number;
// };

// const BoardSquare: React.FC<BoardSquareProps> = (props) => {
//     const { x, y, children } = props;
//     const black = false; /*(x + y) % 2 === 1;*/
//     const [{ isOver, canDrop }, drop] = useDrop({
//         accept: ItemTypes.PIC,
//         canDrop: () => canMovePic(x, y),
//         drop: () => movePic(x, y),
//         collect: (monitor) => ({
//             isOver: !!monitor.isOver(),
//             canDrop: !!monitor.canDrop()
//         })
//     });

//     return (
//         <>
//             <DropDown black={black}></DropDown>
//             <div
//                 ref={drop}
//                 style={{ position: "relative", width: "100%", height: "100%" }}
//             >
//                 <Square black={black}>{children}</Square>
//                 {isOver && !canDrop && <Overlay color="red" />}
//                 {!isOver && canDrop && <Overlay color="yellow" />}
//                 {isOver && canDrop && <Overlay color="green" />}
//                 <header>Meghana Yarlagadda megyar@udel.edu</header>
//                 <header> Grace OLeary goleary22</header>
//                 <header> Kristina Balta kbalta </header>
//             </div>
//         </>
//     );
// };

// export default BoardSquare;
