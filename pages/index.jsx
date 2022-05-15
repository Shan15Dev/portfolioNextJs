import Head from "next/head";
import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="text-white text-center">
      <h1 className="mt-5 font-bold text-4xl">Hello, I am Shan</h1>
      <p className="mt-2 mx-5">
        I am a first year apprentice in Software Engineering. I am a full stack
        developer. For frontend I use NextJS or ReactJS and for the backend I
        use C# or Java
      </p>
      <a className="twitter-timeline" href="https://twitter.com/Shan15dev?ref_src=twsrc%5Etfw">Tweets by Shan15dev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  );
}
