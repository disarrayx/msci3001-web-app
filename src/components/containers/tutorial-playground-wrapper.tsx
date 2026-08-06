import type { Equations } from "../modelling/main-equations";
import PlaygroundContainer from "./playground-container";

interface TPWrapperProps {
    header: React.ReactNode;
    headerSubtitle: React.ReactNode;
    dxdtEquation: React.ReactNode;
    dxdtDescription: React.ReactNode;
    dydtEquation: React.ReactNode;
    dydtDescription: React.ReactNode;
    equations: Equations
}

export default function TutorialPlaygroundWrapper({
    header, headerSubtitle, dxdtEquation, dxdtDescription, 
    dydtEquation, dydtDescription, equations
}:TPWrapperProps) {
    return(
        <>
        <div className="flex flex-col items-center gap-2 px-24">
            {header}
            {headerSubtitle}
        </div>
        <div className="px-16 p-8">
            <PlaygroundContainer 
            content={
            <>
                <div className="flex flex-col items-center gap-2 px-4">
                    <h3><b>Differential Equations</b></h3>
                    {dxdtEquation}
                    {dxdtDescription}
                    {dydtEquation}
                    {dydtDescription}
                </div>
            </>
            }
            equations={equations}
            /> 
        </div>
        </>
    )
}


