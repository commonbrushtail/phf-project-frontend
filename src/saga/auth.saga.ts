import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../store/auth.slice";
import { all } from "redux-saga/effects";
import api from "../services/axios";

function* emailLoginSaga(action): Generator<any, any, any> {
    try {
        const { email, password } = action.payload;
        const response: any = yield call(api.post, "auth/email-login", { email, password });
        console.log(response)
        yield put(loginSuccess(response.data));
    } catch (error: Error) {
        console.log(error);
        yield put(loginFailure(error.message));
    }
}

function* watchEmailLogin() {
  yield takeLatest("auth/emailLogin", emailLoginSaga);
}

export default function* authSaga() {
    yield all([watchEmailLogin()]);
}
