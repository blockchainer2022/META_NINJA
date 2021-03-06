import "./style.css";
import Title from "../../components/title";
import Education from "../../assets/images/education.png";
import Gaming from "../../assets/images/gaming.png";
import Blockchain from "../../assets/images/blockchain.png";
import WalletSmall from "../../assets/images/wallet_icon_small.png";

import { WhitePaper, Chart, Contracts, Report } from "./Icons";

const data = [
  {
    image: Education,
    title: "Education",
    text: "A new approach to crypto education and entertainment, offering comics including adventures of Meta Ninja, featuring crypto influencers & the latest news in the blockchain scene",
  },
  {
    image: Gaming,
    title: "Gaming",
    text: "The game will be a merging environment through PVP battle gaming and open-world exploration. It will be a crossover battle game; therefore, our goal is to partner with other successful dog projects and merge all-powerful dog entities under one pack.",
  },
  {
    image: Blockchain,
    title: "Shinari Blockchain",
    text: "The Shinari Blockchain will be a scalable EVM compatible blockchain that can process fast TX with minimal gas fees.",
  },
  {
    image: WalletSmall,
    title: "Onari Wallet",
    text: "Multichain Metaverse Wallet With NFT Intagration, Stablecoin Staking For Passive Income & 2FA Security",
  },
];

const data2 = [
  {
    icon: WhitePaper,
    title: "Litepaper",
    link: "https://drive.google.com/file/d/1_2wM_cejPCJMRgUyAsoSUlHKfJRAuNQD/view?usp=drivesdk",
    toolTip: false,
  },
  {
    icon: Contracts,
    title: "BscScan contract",
    link: "",
    toolTip: true,
  },
  {
    icon: Chart,
    title: "DEX Tools Chart",
    link: "",
    toolTip: true,
  },
  {
    icon: Report,
    title: "Audit Report",
    link: "https://drive.google.com/file/d/1v82AFqSGlnoC4YMRUn77yM_Yln0NIQOy/view?usp=drivesdk",
    toolTip: false,
  },
];

const Platforms = () => {
  return (
    <div className="platforms py-20 bg-dark-500 min-h-screen">
      <div className="container">
        <Title title="Meta Ninja’s Upcoming Platforms" backtext="PLATFORM" />
        <div className="grid grid-flow-row gap-y-10 mt-20">
          {data.map((val, i) => (
            <div
              key={i}
              className="bg-dark-600 p-8 rounded-md"
              data-aos="fade-up"
            >
              <div className="flex items-center">
                <div>
                  <img src={val.image} alt="" />
                </div>
                <h4 className="text-primary-500 font-bold ml-4 text-4xl">
                  {val.title}
                </h4>
              </div>
              <p className="text-white text-base  font-light mt-6 capitalize">
                {val.text}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {data2.map((val, i) => (
            <a
              // eslint-disable-next-line no-script-url
              href={val.link ? val.link : "javascript:void(0);"}
              key={i}
              className={`bg-dark-600 text-center rounded-xl text-white p-8 px-6 pb-10  platform-card  ${
                val.toolTip ? "cursor-default" : "cursor-pointer"
              }`}
              data-tip={val.toolTip ? "Coming Soon" : ""}
              data-aos="fade-up"
              data-aos-delay={`${200 * i}`}
            >
              <div className="flex justify-center">
                <val.icon />
              </div>
              <h6 className="text-3xl font-medium mt-6">{val.title}</h6>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
