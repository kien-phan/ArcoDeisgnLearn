function WhiteContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-STANDARDMARGINANDPADDING bg-[color:var(--color-bg-1)] rounded-sm overflow-hidden">
            {children}
        </div>
    );
}

export default WhiteContainer;
