/* eslint-disable @typescript-eslint/no-unused-vars */
import { isCommaListExpression } from "typescript";

export {};
const furniture = ["Chairs", "Couches", "Tables", "Beds", "Dressers"];

export interface Furniture {
    type: string;
    size: string;
    pattern: string;
    color: string[];
    isComfy: boolean;
    picture: string;
}

export interface BoxMove {
    top: number;
    left: number;
    furnitureItem: Furniture;
}

export const chair1 = {
    type: "Dining Room",
    size: "Small",
    pattern: "Solid",
    color: ["white"],
    isComfy: false,
    picture: "./Furniture/chair1.jpg" //chair1.picture the picture will show up
};
//export default chair1;

const chair2 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Stripes",
    color: ["brown", "black", "white"],
    isComfy: true,
    picture: "./Furniture/chair2.jpg"
};

const chair3 = {
    type: "Living Room",
    size: "Small",
    pattern: "Zig-Zag",
    color: ["white", "green"],
    isComfy: true,
    picture: "./Furniture/chair3.jpg"
};

const chair4 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Solid",
    color: ["blue"],
    isComfy: true,
    picture: "./Furniture/chair4.jpg"
};

const chair5 = {
    type: "Bedroom",
    size: "Medium",
    pattern: "Stripes",
    color: ["pink", "white", "light blue"],
    isComfy: true,
    picture: "./Furniture/chair5.jpg"
};

const chair6 = {
    type: "Bedroom",
    size: "Large",
    pattern: "Zig-Zag",
    color: ["Brown", "cream"],
    isComfy: true,
    picture: "./Furniture/chair6.jpg"
};
interface Couch {
    type: string;
    size: string;
    isComfy: boolean;
    picture: string;
}
const couch1 = {
    type: "Living Room",
    size: "small",
    isComfy: true,
    picture: "./Furniture/couch1.jpg"
};
const couch2 = {
    type: "Living Room",
    size: "large",
    isComfy: true,
    picture: "./Furniture/couch2.jpg"
};
const couch3 = {
    type: "Living Room",
    size: "medium",
    isComfy: true,
    picture: "./Furniture/couch3.jpg"
};
const couch4 = {
    type: "Living Room",
    size: "large",
    isComfy: true,
    picture: "./Furniture/couch4.jpg"
};
const couch5 = {
    type: "Bedroom",
    size: "small",
    isComfy: true,
    picture: "./Furniture/couch5.jpg"
};
const couch6 = {
    type: "Living Room",
    size: "medium",
    isComfy: true,
    picture: "./Furniture/couch6.jpg"
};

interface Bed {
    type: string;
    size: string;
    picture: string;
}
const bed1 = {
    type: "Kids Room",
    size: "Twin",
    picture: "./Furniture/bed1.jpg"
};
const bed2 = {
    type: "Kids Room",
    size: "Twin",
    picture: "./Furniture/bed2.jpg"
};
const bed3 = {
    type: "Adult Room",
    size: "Double",
    picture: "./Furniture/bed3.jpg"
};
const bed4 = {
    type: "Adult Room",
    size: "Queen",
    picture: "./Furniture/bed4.jpg"
};