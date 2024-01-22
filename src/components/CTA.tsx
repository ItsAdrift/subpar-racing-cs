export const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}

export default function CTA() {

    const handleClick = () => {
        openInNewTab("https://www.tradingpaints.com/profile/937950/Joshua-King14");
    }

    return (
        <div className="">
            <button className="bg-gradient-to-br from-accent to-primary rounded-[10px] px-4 xl:px-8 py-3 relative" onClick={handleClick}>
                <div className="text-white font-extrabold font-montserrat relative z-10 text-[24px] xl:text-[32px]">
                    Race Our Paints
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-[10px] filter blur-[10px] "></div>
            </button>
        </div>
    );
}
