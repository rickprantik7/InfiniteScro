import React from 'react'
import {Avatar } from "@material-ui/core"
export default function Heading({img}) {
    return (
        <div className="head">
            <Avatar className="avatar" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmlld3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            <h1>XfinityScroll</h1>
        </div>
    )
}
