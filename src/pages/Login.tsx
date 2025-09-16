import { Button, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { getAuthToken } from "../api/loginApi";
import type { User } from "../type";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";



export default function Login()
{
          const navigate = useNavigate();

          const { login } = useAuthStore();

          const [toastOpen, setToastOpen] = useState(false);

          const [user, setUser] = useState<User>({
                    username: '',
                    password: ''
          });

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    setUser({...user, [e.target.name]: e.target.value});
          };

          const handleLogin = () => {
                    getAuthToken(user)
                    .then((token) => {
                          if(token != null)
                          {
                              sessionStorage.setItem("jwt", token);
                              // alert(sessionStorage.getItem("jwt"));
                              login();
                              navigate("/");
                          }
                    })
                    .catch((err) => {
                              console.log(err);
                              setToastOpen(true);
                    });
          };

          return (
                <>
                <Stack spacing={2} mt={2} alignItems="center">
                    <TextField 
                          label = "ID"
                          name = "username"
                          onChange = {handleChange}
                    />
                    <TextField 
                          label = "PW"
                          name = "password"
                          onChange = {handleChange}
                    />
                    <Button color = "primary" onClick = {handleLogin}> 로그인 </Button>
                    <Snackbar 
                         open = {toastOpen}
                         autoHideDuration = {3000}
                         onClose = {() => setToastOpen(false)}
                         message = '로그인을 하지 못하였습니다~~~븅~신'
                    />
                </Stack>
                </>
          )
}