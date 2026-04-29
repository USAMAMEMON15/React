const Card = ({Name = "Shayan" , Img = "https://images.pexels.com/photos/35715483/pexels-photo-35715483.jpeg" }) =>{
    return(
        <>
            <div className="Card">
                     <img src={Img} width="300px "height="400px" alt="" />
                     <h1>{Name}</h1>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, laudantium corrupti, exercitationem est necessitatibus repellendus commodi veniam maxime accusamus quam voluptas tenetur quod, error id. Expedita fugit iure aliquam a.</p>
                     </div>
            </>
    )

}

export default Card;

