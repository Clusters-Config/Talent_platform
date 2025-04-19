const initialState = {
    page: 1,
    totalPages: 100,
    itemsPerPage: 10,
    totalItems: 1000,
    loading: false,
    error: null,
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'nextPage':
            return {
                ...state,
                page: state.page + 1,
            };
        case 'prevPage':
            return {
                ...state,
                page: state.page - 1,
            };
        default:
            return state;
    }
}

export default pageReducer;
