import Image from "next/image";
import logo from '@/media/Logo.svg'

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo(props: LogoProps) {
    const { width, height } = props;

    return (
        <div style={{ width: `${width}px`, height: `${height}px` }} className={`bg-gradient-to-br from-accent from-50% to-primary rounded-[18px] flex`}>
          <Image src={logo} alt="Logo" className="p-2"/>
        </div>
    )
}