

const ImageCard =(props) =>{

    return(
    <div>
    { <img src={
      " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+props.imageId}></img> }
</div>

    )

}


export default ImageCard