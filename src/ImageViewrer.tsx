export function ImageViewer({imageName}: {imageName: string}){
    try {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img src={require(""+imageName)}></img>
    } catch {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img src={require("./Furniture/bed1.jpg")}></img>
    }
}