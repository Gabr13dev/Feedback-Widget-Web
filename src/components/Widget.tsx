import { ChatTeardropDots} from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget(){

    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel className="bg-slate-900 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 text-white  text-center">
                <h3 className="py-1">Deixe seu feedback</h3>
                <div className="relative grid gap-2 p-7 grid-cols-3">
                    <a className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-slate-600 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-50">
                        Problema
                    </a>
                    <a className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-slate-600 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-50">
                        Ideia
                    </a>
                    <a className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-slate-600 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-50">
                        Outro
                    </a>
                </div>
            </Popover.Panel>
            <Popover.Button className="rounded-full bg-brand-500 px-3 h-12 text-white flex items-center group"> 
                <ChatTeardropDots  
                    className="w-6 h-6"
                />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}