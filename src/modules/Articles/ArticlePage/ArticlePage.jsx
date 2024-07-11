import WhatStyleArticle from "../WhatStyleArticle/WhatStyleArticle";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import { ArticlePopular } from "../ArticlePopular/ArticlePopular";
import Top3 from "../Top3/Top3";
import Nav2 from "../../Blogs/Nav2/Nav2";

function ArticlePage() {
  return (
    <div>
      <ArticleHeader />
      <ArticlePopular />
      <Top3 />
      <WhatStyleArticle />
    </div>
  );
}

export default ArticlePage;
