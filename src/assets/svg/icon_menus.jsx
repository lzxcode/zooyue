import React, { memo } from 'react'
import parseStyles from "./utils/"

const icon_menus = memo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={parseStyles("fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;")}><g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg>
    )
})

export default icon_menus