import React from "react"
import { Link } from "gatsby"
  const Article = ({
    content: {
      title,   
      subtitle,
      slug,
      text
    }
  }) => (
    <div>
      <h2>{title}</h2>    
      <p>{subtitle}</p>  
      <div dangerouslySetInnerHTML={{__html:text.childContentfulRichText.html}}></div>
      <Link to={slug}>{title}</Link>
    </div>
  )

  export default Article