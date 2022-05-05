import { FormEvent, useState } from "react"

import bugImageUrl from "../../assets/svg/bug.svg"
import ideaImageUrl from "../../assets/svg/idea.svg"
import thoughtImageUrl from "../../assets/svg/thought.svg"
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./steps/FeedbackContentStep"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { FeedbackResponseStep } from "./steps/FeedbackResponseStep"

export const feedbackTypes = {
    bug:{
        title: "Problema",
        description: "Ocorreu um problema no site, como um erro ou um bug.",
        icon: {
            src: bugImageUrl,
            alt: "Imagem de um inseto"
        },
    },
    idea:{
        title: "Ideia",
        description: "Esta é uma ideia que você deseja que seja implementado no site.",
        icon: {
            src: ideaImageUrl,
            alt: "Imagem de uma lâmpada"
        },
    },
    other:{
        title: "Outro",
        description: "Qualquer outro tipo de feedback.",
        icon: {
            src: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento"
        },
    },
}

export interface FeedbackForm {
    typeFeedback: FeedbackType,
    imageScreenshoot: string,
    comment: string,
    url: string,
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [formFeedback, setFormFeedback] = useState<FeedbackForm | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleFeedbackRestart(){
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    async function onHandleSubmit(e: FormEvent){
        e.preventDefault();
        console.log(formFeedback);
        setFeedbackSent(true);
        setFormFeedback(null);
    }

    return (
        <form onSubmit={(e) => onHandleSubmit(e)} className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           <Header 
                feedBackSent={feedbackSent} 
                feedbackType={feedbackType} 
                feedbackRestart={handleFeedbackRestart}
            />
           <div className="flex py-8 gap-2 w-full">
           {feedbackSent ? (
                <FeedbackResponseStep 
                    backFunction={handleFeedbackRestart}
                />
           ) : (
                <>
                {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ) : (
                    <FeedbackContentStep 
                        formFeedbackState={setFormFeedback} 
                        feedbackType={feedbackType} 
                    />
                )}
                </> )}
           </div>
           <Footer />
        </form>
    )
}