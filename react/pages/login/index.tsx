import type { NextPage } from 'next'
import {Grid, Card, CardContent, Container, TextField, Box, Stack,Button,FormControlLabel} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type LoginFormData = { email: string; password: string };
const Home:NextPage = (props) => {
    const {control, handleSubmit} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = (v:LoginFormData) => {
        console.log(v);
    };
    return (
        <Container className={"h-full flex justify-center"}>
            <Card className={"mt-32"}>
                <CardContent>
                    <p className={"text-3xl text-center mt-0 mb-3"}>Training</p>
                    <form method={"POST"} onSubmit={handleSubmit(onSubmit)} encType={"application/x-www-form-urlencoded"}>
                        <Stack>
                            <Controller
                                control={control}
                                name={"email"}
                                render={({ field }) => (
                                    <TextField className={'email mb-4'} label={'Email'} size={'small'} {...field} />
                                )}
                            />
                            <Controller
                                control={control}
                                name={"password"}
                                render={({ field}) => (
                                    <TextField className={'password mb-4'} label={'Password'} type={"password"} autoComplete={"password"} size={'small'} {...field}/>
                                )}
                            />
                            <div className={"justify-center flex"}>
                                <Button type={'submit'} variant={"contained"}>Login</Button>
                            </div>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Home;