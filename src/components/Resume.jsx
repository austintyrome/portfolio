import  React, { useEffect, useState } from 'react';

function Resume() {
    return (
        <div className='card'>
            <h2>
                Resume
                <a
                    href= "../../public/Austin-Resume"
                    download
                    className='resume-link'
                >
                    ⬇️ (download)
                </a>
            </h2>
            <p>
                I am proficent in back end work flows like Node.js, SQL, and Python. 
            </p>
        </div>
    );
}

export default Resume;