function MiniImg({click, img}) {
  return (
    <img
      onClick={() => {
        click(img);
      }}
      className="img-mini"
      src={img}
    />
  );
}

export default MiniImg;
