
interface feedbackOptionProps {
        title: string;
        description: string;
        icon: {
            src: string;
            alt: string;
        },
        eventChoice(): void;
}

export function FeedbackOption(props: feedbackOptionProps) {
    return (
        <button 
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            type="button"
            onClick={props.eventChoice}
        >
            <img src={props.icon.src} alt={props.icon.alt} className="m-auto" />
            <span>{props.title}</span>
        </button>
    )
}