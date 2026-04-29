import Image from "next/image";

type StatsCardProps = {
  imageUrl: string;
  altText: string;
  value: string;
  title: string;
  type: 'taken' | 'active' | 'done';
}

export default function StatsCard({ imageUrl, altText, value, title, type }: StatsCardProps) {
  const bgColor = {
    taken: "bg-orange-100",
    active: "bg-blue-100",
    done: "bg-green-100",
  }

  return (
    <div className={`flex-1 flex gap-8 p-4 rounded ${bgColor[type]}`}>
      <div>
        <Image src={imageUrl} alt={altText} width={50} height={50} loading="eager" />
      </div>
      <div>
        <h2 className="text-xl2 font-semibold">{value}</h2>
        <p className="text-slate-600">{title}</p>
      </div>
    </div>
  )
} 