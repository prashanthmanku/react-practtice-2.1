const Button = (props) => {
  //  Write your code here.
  const { content, cssClass } = props;
  return <button className={cssClass}>{content}</button>;
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 className="bHeading">Social Buttons</h1>
    <div className="buttonsContainer">
      <Button content="Like" cssClass="likeButton" />
      <Button content="Comment" cssClass="commentButton" />
      <Button content="Share" cssClass="shareButton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
