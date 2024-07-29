interface StrengthIndicatorProps {
    strength: string;
}

export default function StrengthIndicator({ strength }: StrengthIndicatorProps) {
    return (
        <div className="mb-4">
            <span>Strength: {strength}</span>
            <div className="w-full bg-gray-700 h-2 mt-2">
                <div
                    className={`h-full ${strength === 'Weak' ? 'w-1/3 bg-red-500' :
                        strength === 'Medium' ? 'w-2/3 bg-yellow-500' :
                            'w-full bg-green-500'
                        }`}
                ></div>
            </div>
        </div>
    );
};

