import React from "react";
import { DirectoryMenu } from "../../components/directoryMenu/directoryMenu.component";
import './homepage.component.css'

export const HomePage = () => {
    return (
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    )
}