import Image from "next/image";
import img from '@/media/Bathurst-Joshua King14-4.jpg'

export default function HeroImage() {
    return (
        <Image src={img} alt="Image of the Subpar Car Livery. It's Awesome... trust me."></Image>
    )
}