export function ImageViewer({imageName}: {imageName: string}){
    try {
        return <img src={require(""+imageName)}></img>
    } catch {
        return <img src={require("./Furniture/bed1.jpg")}></img>
    }
}