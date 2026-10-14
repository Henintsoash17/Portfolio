"use client";

import { useEffect, useRef } from "react";

export default function ParallaxScene() {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (reduceMotion.matches) return;

        const layers = Array.from(
            scene.querySelectorAll<HTMLElement>("[data-depth]"),
        );
        let pointerX = 0;
        let pointerY = 0;
        let frame = 0;

        const updateLayers = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                const scroll = window.scrollY;
                layers.forEach((layer) => {
                    const depth = Number(layer.dataset.depth ?? 0);
                    const x = pointerX * depth * 42;
                    const y = pointerY * depth * 28 - scroll * depth * 0.14;
                    layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                });
                frame = 0;
            });
        };

        const trackPointer = (event: PointerEvent) => {
            pointerX = event.clientX / window.innerWidth - 0.5;
            pointerY = event.clientY / window.innerHeight - 0.5;
            updateLayers();
        };

        window.addEventListener("pointermove", trackPointer, { passive: true });
        window.addEventListener("scroll", updateLayers, { passive: true });
        updateLayers();

        return () => {
            window.removeEventListener("pointermove", trackPointer);
            window.removeEventListener("scroll", updateLayers);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="parallaxScene" ref={sceneRef} aria-hidden="true">
            <div className="parallaxGrid" data-depth="0.08" />
            <div className="parallaxOrb parallaxOrb--lime" data-depth="0.8" />
            <div className="parallaxOrb parallaxOrb--coral" data-depth="-0.55" />
            <div className="parallaxOrb parallaxOrb--violet" data-depth="0.42" />
            <div className="parallaxRing parallaxRing--top" data-depth="1.15" />
            <div className="parallaxRing parallaxRing--bottom" data-depth="-0.72" />

            <div className="parallaxArt parallaxArt--code" data-depth="0.95">
                <div className="parallaxArtBar"><i /><i /><i /><span>creative.dev</span></div>
                <div className="parallaxCodeLine parallaxCodeLine--short" />
                <div className="parallaxCodeLine" />
                <div className="parallaxCodeLine parallaxCodeLine--medium" />
                <div className="parallaxCodeLine parallaxCodeLine--accent" />
                <div className="parallaxCodeLine parallaxCodeLine--short" />
            </div>

            <div className="parallaxArt parallaxArt--dashboard" data-depth="-0.9">
                <div className="parallaxDashTitle">Gestion commerciale</div>
                <div className="parallaxModules">
                    <span>Clients</span>
                    <span>Catalogue</span>
                    <span>Devis</span>
                    <span>Commandes</span>
                    <span>Factures</span>
                    <span>Paiements</span>
                </div>
                <div className="parallaxDashFoot"><span /> NEXT.JS <i /> .NET API</div>
            </div>

            <span className="parallaxIndex parallaxIndex--one" data-depth="0.35">01 — BUILD WITH PURPOSE</span>
            <span className="parallaxIndex parallaxIndex--two" data-depth="-0.42">DESIGN · CODE · ITERATE</span>
            <span className="parallaxSpark parallaxSpark--one" data-depth="1.25">✳</span>
            <span className="parallaxSpark parallaxSpark--two" data-depth="-1.1">✳</span>
        </div>
    );
}