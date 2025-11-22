import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
});

interface MermaidChartProps {
    chart: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        const renderChart = async () => {
            if (!chart) return;
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvgContent(svg);
            } catch (error) {
                console.error('Mermaid render error:', error);
                setSvgContent('<p class="text-red-500 text-xs">Invalid Diagram</p>');
            }
        };
        renderChart();
    }, [chart]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full flex justify-center items-center mermaid-container"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

export default MermaidChart;
