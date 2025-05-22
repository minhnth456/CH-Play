export interface IComments {
    id: string,
    avatar: string,
    name: string,
    rate: number,
    rateComment: string,
    useFul: number,
    date: string
}

export interface IData {
    id: string,
    name: string,
    rate: string,
    categories: string[],
    memory: number,
    banner: string,
    avatar: string,
    images: string[],
    publisher: string,
    age: number,
    totalDownload: number,
    desc: string,
    tags: string[],
    comments: IComments[]
}

export interface RefObject {
    current: {
        measure: (
            callback: (
                fx: number,
                fy: number,
                width: number,
                height: number,
                px: number,
                py: number
            ) => void
        ) => void;
    } | null;
}