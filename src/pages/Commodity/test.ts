export interface X {
    t: {
        x: number
    }
    y: {
        j: string
    }
}

function t<T extends keyof X>(a: T, b: Record<string, string | number>) {
    if (a === "t") {
        console.log(b.x)
    }
}
t("t", { x: 1 })
