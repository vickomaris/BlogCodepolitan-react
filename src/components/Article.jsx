function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date : {props.date}, Tags : {props.tags.join(', ')}
      </small>
    </>
  );
}

export default Article;
