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

/*solution provided




*/
// const Button = (props) => {
//   const { className, buttonText } = props;

//   return <button className={`button ${className}`}>{buttonText}</button>;
// };
// console.log(Button);

// const element = (
//   <div className="social-buttons-container">
//     <div className="content-container">
//       <h1 className="heading">Social Buttons</h1>
//       <div className="buttons-container">
//         <Button buttonText="Like" className="like-button" />
//         <Button buttonText="Comment" className="comment-button" />
//         <Button buttonText="Share" className="share-button" />
//       </div>
//     </div>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));
