interface TTWrapperProps {
    header: React.ReactNode;
    text: React.ReactNode;
}

export default function TutorialTextWrapper({header, text}:TTWrapperProps) {
    return(
        <div className="flex flex-col px-8">
          {header}
          {text}
        </div>
    )
}

