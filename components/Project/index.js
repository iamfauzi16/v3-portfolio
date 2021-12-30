import PropTypes from "prop-types"



const Project = ({title, image, desc}) => {
  return(
    <div>
      <h1>{title}</h1>
      <img src={image} alt="image"/>
      <p>{desc}</p>
    </div>
  )
}



Project.propTypes = {
  title : PropTypes.string,
  image : PropTypes.string,
  desc : PropTypes.string,
}