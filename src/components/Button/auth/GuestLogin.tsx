import api from "../../../services/axios";
import { Button } from "@adobe/react-spectrum";

export const GuestLoginButton = () => {

    return(
        <Button onPress={
            async () => {
                try {
                    const user = await api.post("/auth/guest-login");
                    console.log(user);
                } catch (err) {
                    console.log(err);
                }
            }
        }  variant="primary">Continue as Guest</Button>
    )
}