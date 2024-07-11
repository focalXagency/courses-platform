import "./ARticleHrader.css";
import imageT from "./time.svg";

function ArticleHeader() {
  return (
    <div>
      <div className="RO-ArtHead">
        <div>
          <h2>Top popular styles in illustration 2022</h2>
          <div className="d-flex gap-3 text">
            <p className="blue"># Illustration</p>
            <div className="d-flex ">
              <img src={imageT} alt="" />
              <p className="gray">7 min read</p>
            </div>
            <p className="gray">March 18, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleHeader;
