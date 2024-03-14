import { createSlice } from "@reduxjs/toolkit";
import http, { TOKEN, USER_LOGIN } from "../../config/axios";
import { history } from "../../index";

const userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN)) || {
    taiKhoan: "",
    accessToken: "",
};

const initialState = {
    userProfile: {},
    userLogin: userLoginDefault,
};

export const logoutAction = () => {
    return (dispatch) => {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USER_LOGIN);
        dispatch(logoutSuccess());
        history.push("/login");
    };
};

const UserReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload;
        },
        getProfileAction: (state, action) => {
            state.userProfile = action.payload;
        },
        logoutSuccess: (state) => {
            state.userProfile = {};
            state.userLogin = { taiKhoan: "", accessToken: "" };
        },
    },
});

export const { loginAction, logoutSuccess } = UserReducer.actions;

export default UserReducer.reducer;

//-------------------action thunk-------------------
export const loginApiAction = (userLogin) => {
    return async (dispatch) => {
        try {
            // Call the sign-in API endpoint
            const res = await http.post("/QuanLyNguoiDung/DangNhap", userLogin);
            // Assuming the response contains the necessary user data and token
            localStorage.setItem(TOKEN, res.data.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data));
            dispatch(loginAction(res.data)); // Pass the entire response
        } catch (err) {
            history.push("/login");
            alert("Invalid username or password!");
        }
    };
};


// getprofileapi

// export const getProfileApiAction = () => {
//   return async (dispatch) => {
//     try {
//       const res = await http.post("/Users/getProfile");

//       // Thêm dispatch cho fetchOrderHistorySuccess để lưu lịch sử đơn hàng vào Redux store
//       dispatch(fetchOrderHistorySuccess(res.data.content.ordersHistory));

//       // Thay đổi để lưu thông tin người dùng vào Redux store
//       const action = getProfileAction(res.data.content);
//       dispatch(action);
//     } catch (err) {}
//   };
// };
