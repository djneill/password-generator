interface GenerateButtonProps {
    onClick: () => void;
}

export default function GenerateButton({ onClick }: GenerateButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition-colors"
        >
            Generate
        </button>
    )
}