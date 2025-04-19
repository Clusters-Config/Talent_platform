import { NEXT_PAGE, PREV_PAGE } from "./page.types"

const nextPageAction = ()=>{
    return {
        type: NEXT_PAGE,
    }
}
const prevPageAction = ()=>{
    return {
        type: PREV_PAGE,
    }
}

export {nextPageAction as nextPage, prevPageAction as prevPage}
