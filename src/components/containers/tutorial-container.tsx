import { useEffect, useState } from "react";
// import type { ReactNode } from "react";
import { Button } from '@/components/ui/button'
import { Arrow } from '@/assets/svg'
import type { TutorialContent } from "@/pages/Tutorial";
import { useNavigate } from "react-router";
import { useCallback } from 'react';

interface TutorialContainerProps {
    content: TutorialContent;
}

function TutorialContainer({ content }: TutorialContainerProps) {
    const [progress, setProgress] = useState<number>(0);
    let navigate = useNavigate();

    const increaseProgress = useCallback(() => {
        setProgress(prev => prev + 1);
    }, []);

    const decreaseProgress = useCallback(() => {
        setProgress(prev => Math.max(0, prev - 1));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    if (progress !== 0) {
                        decreaseProgress();
                        // navigate('/');
                    } 
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (progress !== content.length - 1) {
                        increaseProgress();
                        // navigate('/playground');
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
}, [progress, content.length, increaseProgress, decreaseProgress, navigate]);

    // button logic
    const normalBackButton = 
        <Button variant="outline" onClick={decreaseProgress}>
            <Arrow className="z-1 size-8 rotate-180" />
            <p className="z-1">Back</p>
        </Button>

    const homeBackButton = 
        <div></div>
    
    let backButton = <></>
    progress == 0 ? backButton = homeBackButton : backButton = normalBackButton

    const normalNextButton = 
        <Button variant="outline" onClick={increaseProgress}>
            <Arrow className="z-1 size-8" />
            <p className="z-1">Next</p>
        </Button>
    
    const playgroundNextButton = 
        <div></div>

    let nextButton = <></>
    progress == content.length - 1 ? nextButton = playgroundNextButton : nextButton = normalNextButton

    // page
    return (
        <div className="flex grow flex-col min-h-full min-w-full items-center p-10 gap-x-8">
            <div className="grow min-h-full min-w-full flex flex-col">
                {content[progress]}
            </div>
            <div className="flex justify-between min-w-full mt-8">
                {backButton}
                {nextButton}
            </div>
        </div>
    );
}

export default TutorialContainer