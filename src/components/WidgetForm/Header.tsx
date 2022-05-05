import { BackButton } from "./BackButton";
import { CloseButton } from "./CloseButton";
import { FeedbackType, feedbackTypes } from "./WidgetForm"

interface HeaderProps {
    feedbackType: FeedbackType | null,
    feedbackRestart: () => void,
    feedBackSent: boolean,
}

export function Header({ feedbackType, feedbackRestart, feedBackSent }: HeaderProps) {
    const feedbackTypeData = feedbackTypes[feedbackType!];

    return (
        <header>
            {feedbackType && (<BackButton backFunction={feedbackRestart} />) }
            <h3 className="text-xl leading-6 flex items-center gap-2">
                {!feedbackType ? (
                    <>Deixe seu Feedback</>
                ) : (
                    !feedBackSent && <> <img src={feedbackTypeData.icon.src} alt={feedbackTypeData.icon.alt} className="w-6 h-6" />  {feedbackTypeData.title} </>
                )}
            </h3>
            <CloseButton />
        </header>
    )
}