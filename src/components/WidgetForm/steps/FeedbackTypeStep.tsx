import { FeedbackOption } from "../FeedbackOption"
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
    return (
        <>
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                    <FeedbackOption 
                        key={key} 
                        {...value}
                        eventChoice={() => onFeedbackTypeChanged(key as FeedbackType)}
                    />
                    )
                }) }
           </>
    )
}