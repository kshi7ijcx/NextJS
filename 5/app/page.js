import Image from "next/image";
import LeafImage from "@/public/leaves.jpg";

import { Roboto } from "next/font/google";

const roboto = Roboto({subsets: ['latin'],weight:'500'})

const Home = () => {
  return (
    <div>
      Home
      <Image src={LeafImage} alt="Leaf Image" width={500} height={250}/>
      <Image src='https://images.unsplash.com/photo-1707343844436-37580f155ed2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="moutain" width={500} height={500} />

      <h1 className={`${roboto.className} text-4xl`}>
        This is how to use fonts in Next
      </h1>
    
    </div>
  );
};
export default Home;
