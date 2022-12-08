/* eslint-disable @typescript-eslint/no-unused-vars */
import { isCommaListExpression } from "typescript";

export {};
const furniture = ["Chairs", "Couches", "Tables", "Beds", "Dressers", "Presets"];

export interface Furniture {
    top: number;
    left: number;
    type: string;
    size: string;
    pattern: string;
    color: string[];
    isComfy: boolean;
    picture: string;
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

export const chair2 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Stripes",
    color: ["brown", "black", "white"],
    isComfy: true,
    picture: "./Furniture/chair2.jpg"
};

export const chair3 = {
    type: "Living Room",
    size: "Small",
    pattern: "Zig-Zag",
    color: ["white", "green"],
    isComfy: true,
    picture: "./Furniture/chair3.jpg"
};

export const chair4 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Solid",
    color: ["blue"],
    isComfy: true,
    picture: "./Furniture/chair4.jpg"
};

export const chair5  = {
    type: "Bedroom",
    size: "Medium",
    pattern: "Stripes",
    color: ["pink", "white", "light blue"],
    isComfy: true,
    picture: "./Furniture/chair5.jpg"
};

export const chair6 = {
    type: "Bedroom",
    size: "Large",
    pattern: "Zig-Zag",
    color: ["Brown", "cream"],
    isComfy: true,
    picture: "./Furniture/chair6.jpg"
};

export const couch1 = {
    type: "Living Room",
    size: "small",
    pattern: "Solid",
    color: ["Cream"],
    isComfy: true,
    picture: "./Furniture/couch1.jpg"
};
export const couch2 = {
    type: "Living Room",
    size: "large",
    pattern: "Stripes",
    color: ["White", "Green"],
    isComfy: true,
    picture: "./Furniture/couch2.jpg"
};
export const couch3 = {
    type: "Living Room",
    size: "medium",
    pattern: "Solid",
    color: ["Brown"],
    isComfy: true,
    picture: "./Furniture/couch3.jpg"
};
export const couch4 = {
    type: "Living Room",
    size: "large",
    pattern: "Zig-Zag",
    color: ["Blue", "White"],
    isComfy: true,
    picture: "./Furniture/couch4.jpg"
};
export const couch5 = {
    type: "Bedroom",
    size: "small",
    pattern: "Solid",
    color: ["Black"],
    isComfy: true,
    picture: "./Furniture/couch5.jpg"
};
export const couch6 = {
    type: "Living Room",
    size: "medium",
    pattern: "Stripes",
    color: ["Black", "White"],
    isComfy: true,
    picture: "./Furniture/couch6.jpg"
};


export const bed1 = {
    type: "Kids Room",
    size: "Twin",
    pattern: "Solid",
    color: ["White"],
    isComfy: true,
    picture: "./Furniture/bed1.jpg"
};
export const bed2 = {
    type: "Kids Room",
    size: "Twin",
    pattern: "Stripes",
    color: ["Blue", "Pink"],
    isComfy: false,
    picture: "./Furniture/bed2.jpg"
};
export const bed3 = {
    type: "Adult Room",
    size: "Double",
    pattern: "Solid",
    color: ["Black"],
    isComfy: true,
    picture: "./Furniture/bed3.jpg"
};
export const bed4 = {
    type: "Adult Room",
    size: "Queen",
    pattern: "Solid",
    color: ["Brown"],
    isComfy: true,
    picture: "./Furniture/bed4.jpg"
};
export const preset1 = {
    type: "Living Room",
    size: "Large",
    pattern: "Solid",
    color: ["white", "brown"],
    isComfy: true,
    picture: "./Furniture/preset1.jpg" 
};
export const preset2 = {
    type: "Dining Room",
    size: "Small",
    pattern: "Solid",
    color: ["white"],
    isComfy: false,
    picture: "./Furniture/preset2.jpg" 
};
export const preset3 = {
    type: "Dining Room",
    size: "Large",
    pattern: "Solid",
    color: ["black", "grey"],
    isComfy: false,
    picture: "./Furniture/preset3.jpg" 
};
export const preset4 = {
    type: "Dining Room",
    size: "Mini",
    pattern: "Stipes",
    color: ["white", "grey"],
    isComfy: false,
    picture: "./Furniture/preset4.jpg" 
};export const preset5 = {
    type: "Dining Room",
    size: "Small",
    pattern: "Solid",
    color: ["blue"],
    isComfy: true,
    picture: "./Furniture/preset5.jpg" 
};export const preset6 = {
    type: "Living Room",
    size: "Large",
    pattern: "Plaid",
    color: ["white", "black"],
    isComfy: true,
    picture: "./Furniture/preset6.jpg" 
};export const preset7 = {
    type: "Office",
    size: "Extra Large",
    pattern: "Solid",
    color: ["Wood"],
    isComfy: false,
    picture: "./Furniture/preset7.jpg" 
};
export const table1 = {
    type: "Bedroom",
    size: "Mini",
    pattern: "Solid",
    color: ["White"],
    isComfy: false,
    picture: "./Furniture/table1.jpg" 
};
export const table2 = {
    type: "Office",
    size: "Small",
    pattern: "Solid",
    color: ["Brown", "White"],
    isComfy: false,
    picture: "./Furniture/table2.jpg" 
};
export const table3 = {
    type: "Dining Room",
    size: "Large",
    pattern: "Spackled",
    color: ["Black", "White"],
    isComfy: false,
    picture: "./Furniture/table3.jpg" 
};
export const table4 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Bordered",
    color: ["White", "Grey"],
    isComfy: false,
    picture: "./Furniture/table4.jpg" 
};
export const table5 = {
    type: "Living Room",
    size: "Large",
    pattern: "Wood",
    color: ["Oak"],
    isComfy: false,
    picture: "./Furniture/table5.jpg" 
};
export const toilet1 = {
    type: "Bathroom",
    size: "Small",
    pattern: "Solid",
    color: ["White"],
    isComfy: true,
    picture: "./Furniture/toilet1.jpg" 
};
export const toilet2 = {
    type: "Bathroom",
    size: "Small",
    pattern: "Solid",
    color: ["White"],
    isComfy: true,
    picture: "./Furniture/toilet2.jpg" 
};
export const piano = {
    type: "Office",
    size: "Extra Large",
    pattern: "Marbled",
    color: ["White", "Black"],
    isComfy: false,
    picture: "./Furniture/piano.jpg" 
};