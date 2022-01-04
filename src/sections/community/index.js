import Title from "../../components/title";
import { FaTelegramPlane } from "react-icons/fa";
const Community = () => {
  return (
    <div className="py-20 bg-dark-500 ">
      <div className="container">
        <Title title="Baby Shinja Community" backtext="COMMUNITY" />

        <div className="grid md:grid-cols-2 gap-y-10 mt-28 items-end">
          <h4 className="text-4xl font-bold text-white">
            Join the <span className="text-primary-500">Baby Shinja</span>{" "}
            community and let's ride together to the Inuverse!
          </h4>
          <div className="">
            <button className="bg-gray items-center py-4  text-primary-500 flex justify-center rounded-lg w-full text-center text-xl font-medium">
              <span>
                <FaTelegramPlane />
              </span>
              <span className="inline-block ml-2">Join Telegram</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
