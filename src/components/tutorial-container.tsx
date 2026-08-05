import { useState } from "react";
// import type { ReactNode } from "react";
import { Button } from '@/components/shadcn/button'
import { Arrow } from '@/assets/svg'
import type { TutorialContent } from "@/pages/Tutorial";

interface TutorialContainerProps {
    content: TutorialContent;
}

function TutorialContainer({ content }: TutorialContainerProps) {
    const [progress, setProgress] = useState<number>(0);

    function increaseProgress(): void {
        setProgress((prev) => prev + 1);
    }

    function decreaseProgress(): void {
        setProgress((prev) => Math.max(0, prev - 1));
    }

    return (
        <div className="flex grow flex-col min-h-full min-w-full items-center p-16">
            <div className="grow min-h-full flex flex-col">
                {content[progress]}
            </div>
            <div className="flex justify-between min-w-full">
                <Button variant="outline" onClick={decreaseProgress}>
                    <Arrow className="stroke-black dark:stroke-white stroke-2 size-8 rotate-180" />
                    <p>Back</p>
                </Button>
                <Button variant="outline" onClick={increaseProgress}>
                    <Arrow className="stroke-black dark:stroke-white stroke-2 size-8" />
                    <p>Next</p>
                </Button>
            </div>
        </div>
    );
}

export default TutorialContainer