import "./ArticlePopular.css";
import ArticlePargraph from "../ArticlePargraph/ArticlePargraph";
import Img1 from "./image/image1.png";
import Img2 from "./image/image2.png";

export const ArticlePopular = () => {
  return (
    <div>
      <div className="RO-ArtPopular">
        <ArticlePargraph
          text1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
          text2="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          widthdiv="78%"
        />

        <div className="d-flex justify-content-between" id="RO-poulargap">
          <div className="d-flex ">
            <img src={Img1} alt="photo" />
            <img src={Img2} alt="photo" />
          </div>

          <ArticlePargraph
            title="Popular styles in 2022"
            text1="Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you. Nostrum exercitationem ullam corporis suscipit. ui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
          />
        </div>

        <ArticlePargraph
          title="Which styles are no longer relevant"
          text1="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Uae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          text2="Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          widthdiv="78%"
        />
      </div>
    </div>
  );
};
