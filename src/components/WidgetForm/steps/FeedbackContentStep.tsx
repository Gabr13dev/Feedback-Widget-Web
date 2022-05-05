import { useState } from "react";
import { ScreenshootButton } from "../ScreenshootButton";
import { FeedbackType, feedbackTypes, FeedbackForm } from "../WidgetForm"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    formFeedbackState: (form: FeedbackForm) => void;
}

export function FeedbackContentStep({ feedbackType, formFeedbackState }: FeedbackContentStepProps) {
    const [screenshootImage, setScreenshootImage] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const feedbackTypeData = feedbackTypes[feedbackType];

    function prepareFormToSend() {
        formFeedbackState({
            typeFeedback: feedbackType,
            imageScreenshoot: screenshootImage!,
            comment: comment,
            url: window.location.href
        });
    }

    return (
        <div className="my-4 w-full">
            <textarea 
                className="min-w-[304px] min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-[0.1rem] focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder={feedbackTypeData.description}
                onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex gap-2 mt-2">
                <ScreenshootButton 
                    screenShoot={screenshootImage}
                    onScreenshootTaken={setScreenshootImage}
                />
                <button
                    type="submit"
                    className="p-2 bg-brand-500 rounded-smd border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!comment}
                    onClick={prepareFormToSend}
                >
                    Enviar feedback
                </button>
            </div>
        </div>
    )
}