interface Props {
    title: string;
    icon: React.ReactNode;
    value: number;
}

function LegendItem({ title, icon, value }: Props) {
    return (
        <div className="flex flex-col items-start justify-center gap-STANDARDMARGINANDPADDING">
            <h3 className="text-xs">{title}</h3>
            <div className="flex flex-row justify-start items-center gap-STANDARDMARGINANDPADDING">
                {icon}
                <span className="text-2xl">
                    {value.toLocaleString("en-US")}
                </span>
            </div>
        </div>
    );
}

export default LegendItem;
