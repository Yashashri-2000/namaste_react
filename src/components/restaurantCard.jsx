import { res_img } from "../constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    slaString,
    costForTwo,
  } = resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="maghana foods"
        src={res_img + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{slaString} </h4>
    </div>
  );
};

export default RestaurantCard;
