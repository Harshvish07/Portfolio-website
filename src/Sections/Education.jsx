import { School } from "../components/School";
import { education } from "../components/constants";

function Education() {
  return (
    <div className="w-full">
      <School data={education} />
    </div>
  );
}
export default Education;
