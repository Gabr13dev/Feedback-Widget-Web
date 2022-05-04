import { useState } from "react"

import { CloseButton } from "./CloseButton"

import bugImageUrl from "../assets/svg/bug.svg"
import ideaImageUrl from "../assets/svg/idea.svg"
import thoughtImageUrl from "../assets/svg/thought.svg"
import { FeedbackOption } from "./FeedbackOption"

const feedbackTypes = {
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
        description: "Este é uma ideia que você deseja que seja implementado no site.",
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
            alt: "Iamgemd e um balão de pensamento"
        },
    },
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <form className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           <header>
               <h3 className="text-xl leading-6">Deixe seu Feedback</h3>
                <CloseButton />
           </header>
           {!feedbackType ? (
           <main className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                    <FeedbackOption 
                        key={key} 
                        {...value}
                        eventChoice={() => setFeedbackType(key as FeedbackType)}
                    />
                    )
                }) }
           </main> 
           ) : (
                <h3>Tipo selecionado</h3>
           ) }
           <footer className="text-xs text-neutral-400">
                Feito com <span className="text-brand-500">❤</span> por <a className="text-blue-700 underline underline-offset-2" target="_blank" href="https://www.linkedin.com/in/gabriel-de-almeida-5bb7a614a/">Gabriel</a> & <a href="https://rocketseat.com.br" target="_blank" className="text-brand-500 underline underline-offset-2">Rocketseat</a>
           </footer>
        </form>
    )
}