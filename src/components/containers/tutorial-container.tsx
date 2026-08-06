import { useEffect, useState } from "react";
// import type { ReactNode } from "react";
import { Button } from '@/components/ui/button'
import { Arrow } from '@/assets/svg'
import type { TutorialContent } from "@/pages/Tutorial";
import { Link } from "react-router";
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
                    if (progress === 0) {
                        navigate('/');
                    } else {
                        decreaseProgress();
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (progress === content.length - 1) {
                        navigate('/playground');
                    } else {
                        increaseProgress();
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
            <Arrow className="stroke-black dark:stroke-white stroke-2 size-8 rotate-180" />
            <p>Back</p>
        </Button>

    const homeBackButton = 
        <Button variant="outline">
            <Link to="/" className="inline-flex items-center gap-1.5">
                <Arrow className="stroke-black dark:stroke-white stroke-2 size-8 rotate-180" />
                <p>Back</p>
            </Link>
        </Button>
    
    let backButton = <></>
    progress == 0 ? backButton = homeBackButton : backButton = normalBackButton

    const normalNextButton = 
        <Button variant="outline" onClick={increaseProgress}>
            <Arrow className="stroke-black dark:stroke-white stroke-2 size-8" />
            <p>Next</p>
        </Button>
    
    const playgroundNextButton = 
        <Button variant="outline" onClick={increaseProgress}>
            <Link to="/playground" className="inline-flex items-center gap-1.5">
                <Arrow className="stroke-black dark:stroke-white stroke-2 size-8" />
                <p>Next</p>
            </Link>
        </Button>

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