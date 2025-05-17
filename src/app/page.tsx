import {Homepage} from "@/components/Homepage";


export default function Home() {
    const backgroundImageUrl = "/cat_leaves.png";
    return (
        <div className={"flex items-center justify-center w-full h-screen bg-cover bg-center"}
             style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <Homepage/>
        </div>
    );
}
