import { Section } from "../../layout/Section";
import tanitv from "../../../assets/tanitv.webp";
import Video from "../Vidio/Vidio";
import YoutubeChannelCard from "./YoutubeChannelCard";
import { Container } from "../../layout/Container";

const videoData = {
  src: "Cara Membuat Eco-Enzyme di Rumah.mp4",
  poster: "/about-image.jpg",
  controls: true,
  loop: true,
  muted: true,
};
const VidioWrapper: React.FC = () => {
  return (
    <Section>
      <Container className="flex flex-col justify-center items-center">
        <div className="flex w-full justify-center">
          <figure className="w-full xl:max-w-[90%] rounded-xl">
            <Video
              videoSrc={videoData.src}
              posterSrc={videoData.poster}
              controls={videoData.controls}
              loop={videoData.loop}
              muted={videoData.muted}
            />
          </figure>
        </div>

        <aside>
          <div className="mt-4 ml-4">
            <YoutubeChannelCard
              channelName="TV Tani"
              subText="Kementerian Pertanian Indonesia"
              logoSrc={tanitv}
              href="https://youtu.be/3zAoGn2T4WY?si=MbgJHFKZF7oCKPBq"
            />
          </div>
        </aside>
      </Container>
    </Section>
  );
};
export default VidioWrapper;
