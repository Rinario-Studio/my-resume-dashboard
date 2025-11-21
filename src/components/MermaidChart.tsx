"use client";
import React, { useEffect, useRef } from 'react';
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

    useEffect(() => {
        if (containerRef.current) {
            mermaid.run({
                nodes: [containerRef.current.querySelector('.mermaid') as HTMLElement],
            });
        }
    }, [chart]);

    // We render a div with the class 'mermaid' containing the chart definition.
    // mermaid.run() will pick it up and render the SVG.
    // However, for dynamic updates in React, it's often safer to use render() API or just re-mount.
    // A simple approach for now:
    useEffect(() => {
        const renderChart = async () => {
            if (containerRef.current) {
                try {
                    containerRef.current.innerHTML = '';
                    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                    const { svg } = await mermaid.render(id, chart);
                    containerRef.current.innerHTML = svg;
                } catch (error) {
                    console.error('Mermaid render error:', error);
                    if (containerRef.current) {
                        containerRef.current.innerHTML = '<p class="text-red-500 text-xs">Invalid Diagram</p>';
                    }
                }
            }
        };
        renderChart();
    }, [chart]);

    return <div ref={containerRef} className="w-full h-full flex justify-center items-center" />;
};

export default MermaidChart;
