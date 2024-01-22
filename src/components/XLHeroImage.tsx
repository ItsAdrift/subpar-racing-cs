// HeroImage component
import Image from "next/image";
import img from '@/media/HeroHalf.png'

export default function XLHeroImage() {
    return (
        <div style={{ paddingTop: '112.5%' /* 9 / 8 * 100% */ }}>
            <Image
                src={img}
                alt="Image of the Subpar Car Livery. It's Awesome... trust me."
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}
