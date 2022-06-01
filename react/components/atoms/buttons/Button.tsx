import {Button} from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function DefaultButton(props:Props){
    return <Button variant="contained">{props.children}</Button>

}