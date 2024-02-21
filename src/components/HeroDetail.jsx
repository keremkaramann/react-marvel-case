import { useParams } from "react-router-dom";
const HeroDetail = () => {
  const { id } = useParams();
  return <div>HeroDetail</div>;
};
export default HeroDetail;
