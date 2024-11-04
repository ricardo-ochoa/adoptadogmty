import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Accordion({ children }: { children: React.ReactNode }) {
    return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg animate__animated animate__backInUp">
            <AccordionTrigger isOpen={isOpen} setIsOpen={setIsOpen}>{title}</AccordionTrigger>
            {isOpen && <AccordionContent>{children}</AccordionContent>}
        </div>
    );
}

export function AccordionTrigger({ isOpen, setIsOpen, children }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; children: React.ReactNode }) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left p-4 bg-teal-50 hover:bg-teal-100 rounded"
        >
            <span className='font-bold'>{children}</span>
            <span className="float-right rounded">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
        </button>
    );
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
    return <div className="p-4 border-t bg-white rounded">{children}</div>;
}
