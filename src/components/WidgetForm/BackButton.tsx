import { ArrowLeft } from "phosphor-react";
import { FeedbackType } from "./WidgetForm";

interface BackButtonProps {
    backFunction: () => void
}

export function BackButton({backFunction}: BackButtonProps){ 
    return (
        <button onClick={backFunction} type="button" className="top-5 left-5 absolute text-zinc text-zinc-400 hover:text-zinc-100">
            <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
    )
}