import html2canvas from "html2canvas";
import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshootButtonProps {
    onScreenshootTaken: (screenshoot: string | null) => void;
    screenShoot: string | null;
}

export function ScreenshootButton(
    {   screenShoot, 
        onScreenshootTaken,
    }: ScreenshootButtonProps) {
    const [isTakingScrrenshoot, setIsTakingScrrenshoot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScrrenshoot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL("image/png");
        onScreenshootTaken(base64image);
        setIsTakingScrrenshoot(false);
    }

    if(screenShoot) {
        return (
            <button
                type="button"
                className="padding-1 w-10 h-10 roudend-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenShoot})`,
                    backgroundPosition: "right bottom",
                    backgroundSize: 180,
                }}
                onClick={() => onScreenshootTaken(null)}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isTakingScrrenshoot ? 
                <Loading  /> : <Camera className="h-6 w-6 text-zinc-100" />
            }
        </button>
    )
}