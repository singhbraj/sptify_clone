export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // Remove after finished developing....
    token:"BQCGIyzxgpOk_ppHhx3RFL0EAncBn7n97gpL0JFtQ9Zynw5r8LhfKTZOY7AeWrCPugMgs3oo_oGFPzzdRurDgVKLcWuVHqmccTahv-7Ykm8v1zRS4E8l6JX30UnmeemMW4XuNQsL755G7uEVg0YWRn4UuiTZ-5xZzZEtWacngdMnLpi7"
};

const reducer = (state,action) => {
console.log(action);
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        };
    case 'SET_TOKEN':
        return{
            ...state,
          token:action.token
        };
        case "SET_PLAYLISTS":
            return {
              ...state,
              playlists: action.playlists,
            };
            case "SET_DISCOVER_WEEKLY":
                return {
                  ...state,
                  discover_weekly: action.discover_weekly,
                };
    default:
        return state;
}
}

export default reducer;