import React from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
    position: "absolute",
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    cursor: "move"
};

export interface BoxProps {
    id: string;
    left: number;
    top: number;
    hideSourceOnDrag?: boolean;
    children?: ReactNode;
}

export const Box: FC<BoxProps> = (props: BoxProps) => {
    const { id, left, top, hideSourceOnDrag, children } = props;
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { id, left, top },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [id, left, top]
    );

    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />;
    }
    return (
        <div
            className="box"
            ref={drag}
            style={{ ...style, left, top }}
            data-testid="box"
        >
            {children}
        </div>
    );
};

export default Box;
