import Card from 'react-bootstrap/Card';

function CategoryCard({fileName,categoryName}) {
  return (
    <Card className="bg-white text-white" style={{width:"250px",height:"250px"}}>
      <Card.Img src={`${fileName}`} alt="Card image" />
      <Card.ImgOverlay style={{background:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Card.Title >{`${categoryName}`}</Card.Title>
        
  
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryCard;