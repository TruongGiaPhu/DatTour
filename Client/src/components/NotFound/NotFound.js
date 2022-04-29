import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'


function NotFound() {
    return (
        <div>
            <div id="error-page">
                <div class="content_NF">
                    <h2 class="header" data-text="404">
                        404
                    </h2>
                    <h4 data-text="Opps! Page not found">
                        Opps! Page not found
                    </h4>
                    <div class="btns">
                        <Link to='/' className='btn_rt_home'>return home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound