import { TextField, Form, Button ,Link,ButtonGroup ,Divider,Text } from "@adobe/react-spectrum";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Email = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleEmailLoginSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log('asdas')
        e.preventDefault();

        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email is required";
        }

        if (!password) {
            passwordError = "Password is required";
        }

        setErrors({ email: emailError, password: passwordError });
        

      
        if (!emailError && !passwordError) {
            dispatch({type:"auth/emailLogin",payload:{email,password}});
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Form validationBehavior="aria" onSubmit={handleEmailLoginSubmit}>
                <TextField
                    type="email"
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    validationState={errors.email ? "invalid" : undefined}
                    errorMessage={errors.email}
                ></TextField>
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    validationState={errors.password ? "invalid" : undefined}
                    errorMessage={errors.password}
                ></TextField>
             
                <Button onPress={()=>handleEmailLoginSubmit} marginTop={"size-250"} type="submit" variant="primary">
                    Submit
                </Button>
             
                <div className="flex justify-center space-x-2 mt-0">
                <Text>Don't have an account yet?</Text><Link>Sign up</Link>
                </div>

           
               
                
            </Form>
        </div>
    );
};

export default Email;
