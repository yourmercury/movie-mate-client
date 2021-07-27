import React, {useState} from 'react';
import { css } from '@emotion/css';


function avatar({size, src}) {

    let sizes = ['2vw', '3vw']
    size = sizes[size]

    let container = css`
        height: ${size};
        width: ${size};
        background: var(--theme-2);
        border-radius: 50%;
        position: relative
    `
    let img = css`
        border-radius: 50%;
        height: 100%;
        width: 100%;
        object-fit: cover;
    `

    return (
        <div className={container}>
            <img src={src} alt=""/>
        </div>
    )
}

export default avatar
