import React from 'react'
import Image1 from 'Images/Image1.png';
import Button from 'MUI_Material/Button';
import { MdOutlineDarkMode } from "Web_React_Icons/md";

export default function () {
    return (
        <div>Abecedario
            <img src={Image1} alt="" />
            <Button variant="contained">Hello world</Button>;
            <MdOutlineDarkMode />
        </div>
    )
}