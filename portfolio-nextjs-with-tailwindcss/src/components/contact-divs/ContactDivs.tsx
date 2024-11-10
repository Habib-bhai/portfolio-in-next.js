import Image from "next/image"

export default function ContactDivs({src, heading, details, height, width}: {src:string, heading:string, details:string, height: number, width: number}) {
  return (
    <div className="flex justify-center items-center">
    <p className="w-[1px] h-20 bg-[#5271ff] mr-10"></p>
    <Image src={src} alt="smartphone" height={height} width={width}/>
      <div className="ml-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-jost font-semibold">{heading}</h1>
            <p className="font-jost ">{details}</p>
      </div>
  </div>
  )
}
