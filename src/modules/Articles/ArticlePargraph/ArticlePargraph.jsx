import React from 'react'
import "./ArticlePargraph.css"

function ArticlePargraph(props) {
    const { title, text1, text2 ,widthdiv} = props
    return (
        <div>
            <div className='RO-ArtPargraphE' style={{width:widthdiv}}>
                {/* title */}
                <h2>{title}</h2>

                {/* text */}
                <p>{text1}</p>
                <p>{text2}</p>


            </div>
        </div>
    )
}

export default ArticlePargraph