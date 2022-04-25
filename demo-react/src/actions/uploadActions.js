import { UPLOAD_IMAGE } from "./types";
import axios from "axios";

export const uploadImage = (imageData) => async dispatch => {
    const response = await axios.post("https://b0bhp2yy77.execute-api.us-east-1.amazonaws.com/v1/upload-image", imageData

    );
    dispatch({
        type: UPLOAD_IMAGE,
        payload: response.data
    });
};