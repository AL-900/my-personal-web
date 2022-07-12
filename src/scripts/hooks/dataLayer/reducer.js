import * as actions from './actions';

const reducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case actions.BLOG__DATA:
            return {
                ...state,
                blogData: action.payload,
            };
        case actions.BLOG__LOADING:
            return {
                ...state,
                blogLoading: action.blog_loading,
            };

        case actions.NAV_ITEMS:
            return {
                ...state,
                navItems: action.payload,
            };
        case actions.FAQ__DATA:
            return {
                ...state,
                faqData: action.payload,
            };
        case actions.PROJECT__DATA:
            return {
                ...state,
                projectData: action.payload,
            };
        case actions.PROJECT__LOADING:
            return {
                ...state,
                projectLoading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
