import { VoidFunc } from "../types"

export class ProjectWindow {
    public static Window = () => window
    private static OnLoadList:VoidFunc[] = []
    private static OnResizeList:VoidFunc[] = []
    public static OnLoad(func:VoidFunc) {
        this.OnLoadList.push(func)
    }
    public static OnResize(func:VoidFunc){
        this.OnResizeList.push(func)
    }
    public static RunOnLoad() {
        this.OnLoadList.forEach((func) => {
            func();
        })
    }
    public static RunOnResize(){
        this.OnResizeList.forEach((func) => {
            func();
        })
    }
}