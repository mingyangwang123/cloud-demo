import axios from "axios";
class userActions {
    getUser(user) {
        return axios.post("https://b0bhp2yy77.execute-api.us-east-1.amazonaws.com/v1/post-json", user)
    }

    login(LoginRequest, username, history) {
        axios.post("https://b0bhp2yy77.execute-api.us-east-1.amazonaws.com/v1/login", LoginRequest)
        history.push({
            pathname: `/dashboard/${username}`,
        });

    }
    register(newUser, history) {
        axios.post("https://b0bhp2yy77.execute-api.us-east-1.amazonaws.com/v1/post-json", newUser)
        history.push("/login");

    }

} export default new userActions();
