

const ImageBlock = (props) => {
  return (
    <div className="image-block">
      <img src={props.imgUrl} alt="pic" width="300" height="400"></img>
    </div>
  );
}

export default ImageBlock;
