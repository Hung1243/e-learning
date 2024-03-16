import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const UserReducer = createSlice({
    name: "account",
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload;
            console.log(123);
            return state;
        },
        logout: () => {
            return initialState;
        },
    },
});
export const { login, logout } = UserReducer.actions;
export default UserReducer.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// import http, { TOKEN, USER_LOGIN } from "../../config/axios";
// import { history } from "../../index";

// const userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN)) || {
//     taiKhoan: "",
//     accessToken: "",
// };

// const initialState = {
//     userProfile: {},
//     userLogin: userLoginDefault,
// };

// export const logoutAction = () => {
//     return (dispatch) => {
//         localStorage.removeItem(TOKEN);
//         localStorage.removeItem(USER_LOGIN);
//         dispatch(logoutSuccess());
//         history.push("/login");
//     };
// };

// const UserReducer = createSlice({
//     name: "userReducer",
//     initialState,
//     reducers: {
//         loginAction: (state, action) => {
//             state.userLogin = action.payload;
//         },
//         getProfileAction: (state, action) => {
//             state.userProfile = action.payload;
//         },
//         logoutSuccess: (state) => {
//             state.userProfile = {};
//             state.userLogin = { taiKhoan: "", accessToken: "" };
//         },
//     },
// });

// export const { loginAction, logoutSuccess, getProfileAction } = UserReducer.actions;

// export default UserReducer.reducer;

// //-------------------action thunk-------------------
// export const loginApiAction = (userLogin) => {
//     return async (dispatch) => {
//         try {

//             const res = await http.post("/QuanLyNguoiDung/DangNhap", userLogin);
//             localStorage.setItem(TOKEN, res.data.accessToken);
//             localStorage.setItem(USER_LOGIN, JSON.stringify(res.data));
//             dispatch(loginAction(res.data));
//         } catch (err) {
//             history.push("/login");
//             alert("Invalid username or password!");
//         }
//     };
// };


// // getprofileapi

// export const getProfileApiAction = () => {
//     return async (dispatch) => {
//         try {
//             const res = await http.post("/QuanLyNguoiDung/ThongTinTaiKhoan");


//             const action = getProfileAction(res.data.content);
//             dispatch(action);
//         } catch (err) { }
//     };
// };
