(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Components/AmenitiesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmenitiesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Components/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const amenityImages = Array.from({
    length: 13
}, (_, index)=>({
        id: index + 1,
        src: `/Image/AmenitiesPage/Amenities${index + 1}.webp`
    }));
const carouselImages = [
    ...amenityImages,
    ...amenityImages.slice(0, 4)
];
function AmenitiesSection() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skipNextScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const interactionTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmenitiesSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) {
                return;
            }
            const observer = new IntersectionObserver({
                "AmenitiesSection.useEffect": ([entry])=>{
                    setIsInView(entry.isIntersecting);
                }
            }["AmenitiesSection.useEffect"]);
            observer.observe(section);
            return ({
                "AmenitiesSection.useEffect": ()=>observer.disconnect()
            })["AmenitiesSection.useEffect"];
        }
    }["AmenitiesSection.useEffect"], []);
    function pauseAutoplay() {
        setIsInView(false);
        if (interactionTimeout.current !== null) {
            window.clearTimeout(interactionTimeout.current);
        }
        interactionTimeout.current = window.setTimeout(()=>{
            setIsInView(true);
        }, 4000);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmenitiesSection.useEffect": ()=>{
            const carousel = carouselRef.current;
            const activeCard = carousel?.children[activeIndex];
            if (!isInView || !carousel || !activeCard) {
                return;
            }
            if (skipNextScroll.current) {
                skipNextScroll.current = false;
                return;
            }
            carousel.scrollTo({
                left: activeCard.offsetLeft,
                behavior: "smooth"
            });
            if (activeIndex !== amenityImages.length) {
                return;
            }
            const resetLoop = window.setTimeout({
                "AmenitiesSection.useEffect.resetLoop": ()=>{
                    const firstCard = carousel.children[0];
                    carousel.style.scrollBehavior = "auto";
                    carousel.scrollLeft = firstCard.offsetLeft;
                    carousel.style.scrollBehavior = "";
                    skipNextScroll.current = true;
                    setActiveIndex(0);
                }
            }["AmenitiesSection.useEffect.resetLoop"], 1000);
            return ({
                "AmenitiesSection.useEffect": ()=>window.clearTimeout(resetLoop)
            })["AmenitiesSection.useEffect"];
        }
    }["AmenitiesSection.useEffect"], [
        activeIndex,
        isInView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmenitiesSection.useEffect": ()=>{
            return ({
                "AmenitiesSection.useEffect": ()=>{
                    if (interactionTimeout.current !== null) {
                        window.clearTimeout(interactionTimeout.current);
                    }
                }
            })["AmenitiesSection.useEffect"];
        }
    }["AmenitiesSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmenitiesSection.useEffect": ()=>{
            if (!isInView) {
                return;
            }
            const interval = window.setInterval({
                "AmenitiesSection.useEffect.interval": ()=>{
                    setActiveIndex({
                        "AmenitiesSection.useEffect.interval": (index)=>index + 1
                    }["AmenitiesSection.useEffect.interval"]);
                }
            }["AmenitiesSection.useEffect.interval"], 2000);
            return ({
                "AmenitiesSection.useEffect": ()=>window.clearInterval(interval)
            })["AmenitiesSection.useEffect"];
        }
    }["AmenitiesSection.useEffect"], [
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "mx-auto w-full container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl uppercase tracking-[0.16em] text-[#3A4235]/90 font-semibold",
                        children: "Amenities"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/AmenitiesSection.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: carouselRef,
                        onPointerDown: pauseAutoplay,
                        onTouchStart: pauseAutoplay,
                        onWheel: pauseAutoplay,
                        className: "mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-sm pb-4 scrollbar-none",
                        children: carouselImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[0.78] w-full shrink-0 snap-start overflow-hidden rounded-sm sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image.src,
                                    alt: `Casa Solaz amenity ${image.id}`,
                                    fill: true,
                                    sizes: "(min-width: 1024px) 33vw, 80vw",
                                    className: "rounded-lg object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/AmenitiesSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 33
                                }, this)
                            }, `${image.id}-${index}`, false, {
                                fileName: "[project]/app/Components/AmenitiesSection.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/AmenitiesSection.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/AmenitiesSection.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/AmenitiesSection.tsx",
            lineNumber: 107,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/AmenitiesSection.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s(AmenitiesSection, "+uv4nWZ/G/rPiP7KY4v1Jq8jnlw=");
_c = AmenitiesSection;
var _c;
__turbopack_context__.k.register(_c, "AmenitiesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Logo(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "3.75 10.75 232 100",
        fill: "currentColor",
        role: "img",
        "aria-label": "Casa Solaz",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M28.77 49.54c-12.3 0-20.17-6.85-20.17-18.52 0-11.4 8.83-19.85 21.4-19.85 4.6 0 9.95 1.34 12.04 2.68l.21 6.37-.53.1c-2.09-4.87-7.17-8.13-13.54-8.13-8.5 0-15.08 5.67-15.08 16.59-.06 10.05 6.04 19.69 17.17 19.69 5.78 0 10.27-3.05 12.36-8.83l.59.05-.86 6.96c-2.51 1.39-7.6 2.88-13.59 2.88M67.9 49c-1.07 0-1.6-.59-1.6-1.6v-9.64c-1.66 6.59-6.15 11.77-11.45 11.77-3.96 0-7.5-2.4-7.5-7 0-5.57 5.63-7.65 12-9.42l6.95-1.87c-.27-5.2-2.94-7.6-7.5-7.6-3.2 0-6.3 1.5-8.98 4.76l-.48-.43c3.05-3.8 6.95-6.1 11.6-6.1 6.48 0 9.48 3.59 9.48 9.63v10.7c0 4.4.48 5.62 2.14 6.1v.7zm-16.53-7.97c0 3.48 2.4 5.35 5.46 5.35 5.72 0 9.42-7.22 9.47-12.84v-1.6l-6.74 1.81c-3.96 1.13-8.24 2.9-8.19 7.28m35.05 8.45c-4.28 0-7.97-1.28-9.74-2.46l-.48-6.47.48-.11c2.25 5.08 6.05 8.13 10.92 8.19 3.31 0 5.77-1.98 5.77-4.98 0-3.85-3.74-5.08-7.86-6.42-5.08-1.6-8.72-3-8.72-7.87 0-4.22 3.53-7.49 9.74-7.49 3.47 0 6.63.75 8.29 1.45l.21 5.46-.53.1c-1.71-3.85-5.14-6.31-8.94-6.31-3.63 0-5.99 1.77-5.99 4.5 0 3.36 3.43 4.76 7.65 6.15 4.07 1.33 9 2.56 9 7.91 0 4.5-3.38 8.3-9.8 8.35m34.15-.48c-1.07 0-1.6-.59-1.6-1.6v-9.64c-1.66 6.59-6.16 11.77-11.45 11.77-3.96 0-7.5-2.4-7.5-7 0-5.57 5.62-7.65 12-9.42l6.95-1.87c-.27-5.2-2.95-7.6-7.5-7.6-3.2 0-6.3 1.5-8.98 4.76l-.48-.43c3.05-3.8 6.95-6.1 11.6-6.1 6.48 0 9.48 3.59 9.48 9.63v10.7c0 4.4.48 5.62 2.14 6.1v.7zm-16.53-7.97c0 3.48 2.4 5.35 5.46 5.35 5.72 0 9.41-7.22 9.47-12.84v-1.6l-6.74 1.81c-3.96 1.13-8.25 2.9-8.2 7.28m-87.72 69.3c-6.16 0-12.31-1.83-12.26-3.43.06-1.18 2.2-3.05 4.12-3.05 1.77 0 7.44 2.46 13.86 4.92 5.78-1.02 12.2-4.7 12.2-10.86 0-4.87-6-7.12-10.27-8.83-4.18-1.66-9.63-3.85-9.63-8.88 0-7.38 10.91-13.43 23.06-13.43 6.84 0 9.04 1.4 9.04 2.89 0 1.76-2.41 4.12-6.42 7.17l-.38-.59C42 74.47 43 73.46 43 72.54c0-1.86-4.81-3.3-10.7-3.3-8.5 0-14.82 3.3-14.82 8.34 0 4.01 3.86 5.94 10.11 8.4 4.5 1.82 9.96 4.28 9.96 9.25 0 7.81-9.74 15.1-21.24 15.1m30.32.1c-3.48 0-6.1-2.36-6.1-6.53 0-8.72 11.08-21.08 19.31-21.08 4.28 0 5.62 3.37 5.62 6.15 0 10.28-11.82 21.46-18.83 21.46m-1.66-8.46c0 3.59 1.34 6.26 5.03 6.26 6.74 0 11.13-11.77 11.13-17.5 0-3.79-1.82-5.66-4.87-5.66-6.74 0-11.29 10.64-11.29 16.9m23.04 8.46c-2.14 0-2.95-1.82-2.95-3.37 0-1.87.97-4.98 3.37-9.26l7.6-13.59c5.14-9.36 14.77-17.39 26.65-17.39 2.62 0 4.38.32 4.38 1.18 0 1.18-1.92 3.48-4.5 3.48-1.97 0-4.49-.75-9.4-2.09-4.56 1.6-7.4 4.5-11.3 11.77l-9.15 16.86c-1.87 3.42-3.05 6.52-3.05 7.91 0 1.02.6 1.55 1.61 1.55q1.6 0 4.98-3.04l.42.53c-3.9 3.53-7.06 5.46-8.66 5.46m34.52-.43c-1.06 0-1.6-.59-1.6-1.6v-9.64c-1.66 6.58-6.15 11.77-11.45 11.77-3.96 0-7.49-2.4-7.49-7 0-5.57 5.62-7.65 11.98-9.42l6.96-1.87c-.27-5.2-2.94-7.6-7.49-7.6-3.21 0-6.31 1.5-8.99 4.76l-.48-.43c3.05-3.8 6.96-6.1 11.61-6.1 6.47 0 9.47 3.59 9.47 9.63v10.7c0 4.4.48 5.62 2.14 6.1v.7zM86 102.03c0 3.48 2.41 5.35 5.46 5.35 5.73 0 9.42-7.22 9.47-12.84v-1.6l-6.74 1.81c-3.96 1.13-8.24 2.9-8.19 7.28m23.93 7.97v-.59l14.98-25.36h-7c-3.43 0-5.25 1.45-7.01 6l-.48-.11.96-6.7h18.19v.6L114.7 109.2h7.8c3.64 0 6.37-1.93 7.07-7.12h.48l-.16 7.92zm80.23-4.19c-.17-.57-.13-6.33.04-7.79l.21-1.81a16 16 0 0 1 .35-1.96 27 27 0 0 1 1.34-4.7 17.3 17.3 0 0 1 7.38-8.55c1.49-.9 2.35-1.3 5.92-2.74 2.1-.85 3.1-1.4 5.7-3.11 3.91-2.58 4.72-3 7.04-3.6 2.24-.59 5.69-.45 8.43.34 2.77.79 6.29 2.7 7.82 4.23.36.35.65.69.65.74 0 .15-.23.11-.56-.1-2.07-1.29-6.02-1.86-8.31-1.18-2.37.7-3.66 1.4-7.11 3.85-4.08 2.91-5.8 3.82-8.47 4.48-1.15.28-2.01.36-4.82.44-3.55.1-4.76.24-6.2.75-3.45 1.22-5.92 3.83-7.19 7.61a39 39 0 0 0-1.51 7.12c-.11.71-.31 3.21-.35 4.65-.06 1.71-.16 2.06-.36 1.33m-7.94-.23c-.44-.18-2.03-1.89-2.63-2.81l-.54-.84a29 29 0 0 1-1.95-3.99c-.75-1.91-.85-2.2-1.28-3.78l-.29-1.05c-.06-.23-.16-.7-.21-1.05a40 40 0 0 1-.84-5.58c-.15-1.6-.08-4.01.16-5.58.3-1.96.46-2.61.97-4.03.23-.61.99-2.08 1.55-2.98 2.23-3.56 6.43-6.77 11.66-8.9a47 47 0 0 1 4.11-1.44c2.65-.73 3.72-.96 5.71-1.24.53-.07 1.17-.18 1.42-.22.26-.05.82-.12 1.26-.16 1.87-.17 2.79-.3 4.95-.71 5.78-1.1 9.56-3.48 12.36-7.78a21 21 0 0 0 1.65-3.12l.34-.96a16 16 0 0 0 .76-2.85c.36-.91.64-5.1.51-7.67-.24-4.76-1.3-7.76-3.5-9.94a5.2 5.2 0 0 0-4.99-1.59c-2.89.55-4.93 3.15-8.07 10.24a45 45 0 0 1-2.19 4.45c-2.52 4.45-5.68 8.13-8.64 10.05a17 17 0 0 1-6.85 2.87c-.44.07-.95.17-1.13.21-.55.13-3.67.11-4.09-.03-.2-.07-.58-.14-.84-.16-2.16-.2-4.79-1.6-6.82-3.62a12 12 0 0 1-2.96-4.54 12.7 12.7 0 0 1 .33-9.4c1.25-2.54 3.38-4.55 7.12-6.72a51 51 0 0 0 3.93-2.48c1.91-1.49 3.35-3.52 3.51-4.97.07-.62.17-.79.35-.61.16.16.17 1.63.01 2.52-.3 1.68-1.34 3.78-2.92 5.93-.2.28-1.11 1.41-2.32 2.89-2.52 3.09-3.34 4.32-4.28 6.41a14 14 0 0 0-.96 3.11 14 14 0 0 0 .08 3.74c0 .82 1.02 3.1 1.76 3.93a9.4 9.4 0 0 0 4.57 2.58c.43.17 3.14.14 3.9-.04 5.87-1.39 9.16-6.37 9.99-15.12.04-.5.12-1.07.16-1.25.05-.19.09-.51.09-.71 0-.21.04-.59.08-.84.05-.26.12-.81.17-1.22.05-.42.14-1.02.21-1.35l.25-1.26c.21-1.11.38-1.91.5-2.3l.3-1.05a17 17 0 0 1 2.49-4.76 13 13 0 0 1 7.49-4.73l1.01-.22c1.22-.27 2.8-.26 4.07.01 2.27.5 2.73.65 4.08 1.34a14 14 0 0 1 5.22 5.02 19 19 0 0 1 2.19 5.82c.03.04.13.65.22 1.36.38 2.73.26 7.8-.23 9.51a31 31 0 0 1-2.07 6.96c-.39.98-1.69 3.29-2.69 4.78-1.32 1.97-3.86 4.84-5.17 5.83a38 38 0 0 1-5.47 3.67 66 66 0 0 1-4.28 2.12c-.68.32-3.56 1.6-4.89 2.17l-1.09.48a434 434 0 0 1-5.87 2.6c-4.69 2.03-8.83 4.62-11.11 6.92-3.37 3.43-4.5 7.02-4.34 13.82q.22 9.31 4.04 13.79.67.79-.02.52m-15.46-11.39c-3.36-1.12-7.51-5.14-9.94-9.64a53 53 0 0 1-2.8-5.87 33 33 0 0 0-2.3-4.91 15 15 0 0 0-2.72-3.2c-.99-.81-.65-.97 1.45-.71 1.9.25 2.46.36 3.9.82 4.28 1.35 6.77 3.24 8.3 6.32 1.08 2.18 1.47 4.12 1.68 8.39.04.88.11 1.75.16 1.93.05.19.09.52.09.74s.04.56.08.76l.22.98a9 9 0 0 0 2.02 3.71c.29.29.53.57.53.63 0 .11-.41.14-.67.05"
        }, void 0, false, {
            fileName: "[project]/app/Components/Logo.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/Logo.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Components/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Components/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NavBar({ darkText = false }) {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            const handleScroll = {
                "NavBar.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 0)
            }["NavBar.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "NavBar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], []);
    const glass = "bg-[#E8D8D8]/80 backdrop-blur-lg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed z-10 flex h-[10vh] w-full justify-center font-cormorant",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 h-[10vh] transition-[background-color,backdrop-filter] duration-200 ease-in ${isScrolled ? glass : ""}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/Components/NavBar.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `container relative z-10 flex w-full items-center justify-between sm:px-0 px-5 transition-colors duration-200 ${isScrolled || darkText ? "text-[#3A4235]" : "text-[#E8D8D8]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "sm:h-12 h-10 w-auto transition-colors duration-300 ease-in-out"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/NavBar.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "md:hidden",
                        "aria-label": isMenuOpen ? "Close navigation menu" : "Open navigation menu",
                        "aria-expanded": isMenuOpen,
                        onClick: ()=>setIsMenuOpen((isOpen)=>!isOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            icon: isMenuOpen ? "material-symbols:close" : "material-symbols:menu",
                            className: "h-7 w-7",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/NavBar.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex md:items-center md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/NavBar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/NavBar.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/AboutUs",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/NavBar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/NavBar.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/FAQs",
                                    children: "FAQs"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/NavBar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/NavBar.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/ContactUs",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/NavBar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/NavBar.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/NavBar.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `absolute left-0 top-full z-10 flex w-full flex-col gap-4 overflow-hidden px-4 py-5 text-[#3A4235] transition-[background-color,backdrop-filter,max-height,opacity] duration-300 ease-in-out md:hidden ${glass} ${isMenuOpen ? "pointer-events-auto max-h-60 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/NavBar.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/about",
                            children: "About Us"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/NavBar.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/FAQs",
                            children: "FAQs"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/NavBar.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/NavBar.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/NavBar.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/NavBar.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/NavBar.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(NavBar, "PYTXP+Ba4zUSToikH9IFTduq6jI=");
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Components/OfferSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfferSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Components/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FIELDS = [
    [
        "checkIn",
        "Check-in"
    ],
    [
        "checkOut",
        "Check-out"
    ]
];
const NIGHTLY_RATE = 1999;
const today = new Date(2026, 9, 4);
const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
});
const formatDate = (date)=>date ? dateFormat.format(date) : "-";
const monthStart = (date)=>new Date(date.getFullYear(), date.getMonth(), 1);
const reserved = new Set([
    new Date(2026, 9, 12).getTime(),
    new Date(2026, 9, 13).getTime()
]);
function OfferSection() {
    _s();
    const [checkIn, setCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checkOut, setCheckOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeField, setActiveField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [offerModal, setOfferModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleMonth, setVisibleMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(monthStart(today));
    const nights = checkIn && checkOut ? Math.round((+checkOut - +checkIn) / 86400000) : 0;
    const estimatedTotal = nights * NIGHTLY_RATE;
    const firstDay = visibleMonth.getDay();
    const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
    const calendarDays = Array.from({
        length: firstDay + daysInMonth
    }, (_, index)=>index < firstDay ? null : new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), index - firstDay + 1));
    function openPicker(field) {
        setActiveField(field);
        const date = field === "checkIn" ? checkIn : checkOut;
        if (date) setVisibleMonth(monthStart(date));
    }
    function selectDate(date) {
        if (activeField === "checkOut" && checkIn && date > checkIn) {
            setCheckOut(date);
            setActiveField(null);
            return;
        }
        setCheckIn(date);
        if (activeField === "checkOut" || checkOut && date >= checkOut) setCheckOut(null);
        setActiveField("checkOut");
    }
    function moveMonth(amount) {
        const next = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + amount, 1);
        if (next >= monthStart(today)) setVisibleMonth(next);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-[60vh] w-full items-center bg-[#E8D8D8] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto flex min-h-[30vh] w-full flex-col justify-center rounded-xl bg-[#F8F6F3] px-4 py-5 shadow-[0_14px_35px_rgba(0,0,0,0.16)] sm:px-7 sm:py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-medium sm:text-2xl",
                        children: "Select Accommodation Dates"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/OfferSection.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-2 sm:grid-cols-2",
                        children: FIELDS.map(([field, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>openPicker(field),
                                className: `flex h-14 items-center gap-3 rounded-lg border bg-[#F3F1EE] px-4 text-left transition-colors hover:border-[#3A4235] focus:outline-none focus:ring-2 focus:ring-[#3A4235]/40 ${activeField === field ? "border-[#3A4235]" : "border-[#E5E0DC]"}`,
                                "aria-label": `Choose ${label.toLowerCase()} date`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        icon: "material-symbols:calendar-month-outline",
                                        className: "h-5 w-5 shrink-0 text-[#3A4235]",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex flex-col leading-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/OfferSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1.5 text-sm",
                                                children: formatDate(field === "checkIn" ? checkIn : checkOut)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/OfferSection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, field, true, {
                                fileName: "[project]/app/Components/OfferSection.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/OfferSection.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 border-t border-[#E5E0DC] pt-3 text-sm sm:flex sm:items-end sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray text-lg",
                                        children: "Selected Dates"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-md",
                                        children: checkIn && checkOut ? `${formatDate(checkIn)} - ${formatDate(checkOut)}` : "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-gray text-lg",
                                        children: "Estimated Total (Single Pricing)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-md",
                                        children: [
                                            nights,
                                            " ",
                                            nights === 1 ? "Night" : "Nights",
                                            " • ₱",
                                            NIGHTLY_RATE,
                                            ".00 / night"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/OfferSection.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-between gap-6 sm:mt-0 sm:items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setOfferModal(true),
                                        disabled: !nights,
                                        className: "flex items-center gap-2 rounded-lg bg-[#3A4235] px-6 py-3 text-sm text-[#F8F6F3] transition hover:bg-[#53604B] disabled:cursor-not-allowed disabled:opacity-50",
                                        children: [
                                            "Reserve Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                icon: "material-symbols:arrow-forward-rounded",
                                                className: "h-5 w-5",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/OfferSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-medium",
                                        children: [
                                            "₱",
                                            estimatedTotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/OfferSection.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/OfferSection.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    offerModal && !activeField && typeof document !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40 flex items-center justify-center bg-[#1D211B]/45 p-4 backdrop-blur-sm",
                        onClick: ()=>setOfferModal(false),
                        role: "presentation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[calc(100dvh-1rem)] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#E5E0DC] bg-[#F8F6F3] p-4 text-[#3C4032] shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:max-h-[calc(100vh-2rem)] sm:p-7",
                            onClick: (event)=>event.stopPropagation(),
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": "reservation-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    id: "reservation-title",
                                                    className: "text-lg font-medium sm:text-2xl",
                                                    children: "Reserve Your Stay"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-gray sm:text-sm",
                                                    children: "Tell us how to reach you and we will confirm your reservation."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 111,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setOfferModal(false),
                                            className: "rounded-full border border-[#E5E0DC] p-2 sm:p-2.5",
                                            "aria-label": "Close reservation form",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                icon: "material-symbols:close",
                                                className: "h-5 w-5",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/OfferSection.tsx",
                                                lineNumber: 116,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "mt-4 space-y-3 sm:mt-6 sm:space-y-4",
                                    onSubmit: (event)=>event.preventDefault(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3 sm:gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mb-1.5 block",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "fullName",
                                                            required: true,
                                                            className: "h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mb-1.5 block",
                                                            children: "Contact Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            name: "contactNumber",
                                                            required: true,
                                                            className: "h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 121,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1.5 block",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    required: true,
                                                    className: "h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-1.5 text-sm",
                                                    children: "Stay Dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2",
                                                    children: FIELDS.map(([field, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openPicker(field),
                                                            className: `flex h-12 items-center gap-3 rounded-lg border bg-[#F3F1EE] px-4 text-left transition-colors hover:border-[#3A4235] focus:outline-none focus:ring-2 focus:ring-[#3A4235]/40 sm:h-14 ${activeField === field ? "border-[#3A4235]" : "border-[#E5E0DC]"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                    icon: "material-symbols:calendar-month-outline",
                                                                    className: "h-5 w-5 shrink-0 text-[#3A4235]",
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex flex-col leading-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray",
                                                                            children: label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                                            lineNumber: 149,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mt-1.5 text-sm",
                                                                            children: formatDate(field === "checkIn" ? checkIn : checkOut)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, field, true, {
                                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1.5 block",
                                                    children: "Estimated Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "estimatedPrice",
                                                    value: `₱${estimatedTotal.toFixed(2)}`,
                                                    readOnly: true,
                                                    className: "h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#EDEAE6] px-4 outline-none sm:h-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1.5 block",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "message",
                                                    rows: 4,
                                                    className: "h-24 w-full resize-y rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 py-3 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 162,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end border-t border-[#E5E0DC] pt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "flex items-center gap-2 rounded-lg bg-[#3A4235] px-6 py-3 text-sm text-[#F8F6F3] transition hover:bg-[#53604B]",
                                                children: [
                                                    "Submit Reservation",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        icon: "material-symbols:arrow-forward-rounded",
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Components/OfferSection.tsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 167,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/OfferSection.tsx",
                            lineNumber: 103,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/OfferSection.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this), document.body),
                    activeField && typeof document !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-[#1D211B]/45 p-4 backdrop-blur-sm",
                        onClick: ()=>setActiveField(null),
                        role: "presentation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex max-h-[calc(100vh-2rem)] w-full max-w-120 flex-col overflow-y-auto rounded-xl border border-[#E5E0DC] bg-[#F8F6F3] p-5 text-[#3C4032] shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:p-6",
                            onClick: (event)=>event.stopPropagation(),
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": "Choose accommodation dates",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-medium",
                                                    children: "Choose Dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray",
                                                    children: [
                                                        nights || 2,
                                                        " guests • 1 room"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 192,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveField(null),
                                            className: "rounded-full border border-[#E5E0DC] p-2.5",
                                            "aria-label": "Close date picker",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                icon: "material-symbols:close",
                                                className: "h-5 w-5",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/OfferSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 196,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid grid-cols-2 gap-2",
                                    children: FIELDS.map(([field, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>openPicker(field),
                                            className: `rounded-md border px-3 py-2.5 text-left ${activeField === field ? "border-[#3A4235]" : "border-[#E5E0DC]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-gray",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base",
                                                    children: formatDate(field === "checkIn" ? checkIn : checkOut)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, field, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 202,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg",
                                            children: visibleMonth.toLocaleDateString("en-US", {
                                                month: "long",
                                                year: "numeric"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 209,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>moveMonth(-1),
                                                    className: "rounded border border-[#E5E0DC] p-1.5",
                                                    "aria-label": "Previous month",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        icon: "material-symbols:chevron-left",
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 167
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>moveMonth(1),
                                                    className: "rounded border border-[#E5E0DC] p-1.5",
                                                    "aria-label": "Next month",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        icon: "material-symbols:chevron-right",
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/OfferSection.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 162
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 210,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid grid-cols-7 gap-1 text-center text-sm text-gray",
                                    children: dayNames.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: day
                                        }, day, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 216,
                                            columnNumber: 56
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 grid grid-cols-7 gap-1",
                                    children: calendarDays.map((date, index)=>{
                                        if (!date) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "aspect-square"
                                        }, `empty-${index}`, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 220,
                                            columnNumber: 55
                                        }, this);
                                        const time = date.getTime();
                                        const isReserved = reserved.has(time);
                                        const disabled = date < today || isReserved;
                                        const isSelected = time === checkIn?.getTime() || time === checkOut?.getTime();
                                        const isBetween = checkIn && checkOut && date > checkIn && date < checkOut;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: disabled,
                                            onClick: ()=>selectDate(date),
                                            "aria-label": `${date.toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric"
                                            })}${isReserved ? " - reserved" : ""}`,
                                            className: `aspect-square rounded-md text-base transition-colors ${isSelected ? "bg-[#3A4235] text-[#F8F6F3]" : isBetween ? "bg-[#E8E1DE]" : isReserved ? "bg-[url('/Reserved.svg')] bg-contain bg-center bg-no-repeat text-transparent" : "hover:bg-[#E8E1DE]"} ${disabled ? "cursor-not-allowed" : ""}`,
                                            children: date.getDate()
                                        }, time, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 226,
                                            columnNumber: 44
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-center justify-between border-t border-[#E5E0DC] pt-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                nights,
                                                " nights selected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 230,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveField(null),
                                            disabled: !nights,
                                            className: "rounded-md bg-[#3A4235] px-5 py-2.5 text-[#F8F6F3] disabled:opacity-50",
                                            children: "Apply Dates"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/OfferSection.tsx",
                                            lineNumber: 231,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/OfferSection.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/OfferSection.tsx",
                            lineNumber: 184,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/OfferSection.tsx",
                        lineNumber: 179,
                        columnNumber: 21
                    }, this), document.body)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/OfferSection.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/OfferSection.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/OfferSection.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_s(OfferSection, "kJbUteyyy452iWuTGzR/aOiFMIM=");
_c = OfferSection;
var _c;
__turbopack_context__.k.register(_c, "OfferSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Components/OurOfferings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurOfferingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Components/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const serviceImages = Array.from({
    length: 8
}, (_, index)=>({
        id: index + 1,
        src: `/Image/OurServicesPage/OurService${index + 1}.webp`
    }));
const carouselImages = [
    ...serviceImages,
    ...serviceImages.slice(0, 4)
];
function OurOfferingSection() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSectionVisible, setIsSectionVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skipNextScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const interactionTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurOfferingSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) {
                return;
            }
            const observer = new IntersectionObserver({
                "OurOfferingSection.useEffect": ([entry])=>setIsSectionVisible(entry.isIntersecting)
            }["OurOfferingSection.useEffect"], {
                threshold: 0.1
            });
            observer.observe(section);
            return ({
                "OurOfferingSection.useEffect": ()=>observer.disconnect()
            })["OurOfferingSection.useEffect"];
        }
    }["OurOfferingSection.useEffect"], []);
    function pauseAutoplay() {
        setIsSectionVisible(false);
        if (interactionTimeout.current !== null) {
            window.clearTimeout(interactionTimeout.current);
        }
        interactionTimeout.current = window.setTimeout(()=>{
            setIsSectionVisible(true);
        }, 4000);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurOfferingSection.useEffect": ()=>{
            const carousel = carouselRef.current;
            const activeCard = carousel?.children[activeIndex];
            if (!isSectionVisible || !carousel || !activeCard) {
                return;
            }
            if (skipNextScroll.current) {
                skipNextScroll.current = false;
                return;
            }
            carousel.scrollTo({
                left: activeCard.offsetLeft,
                behavior: "smooth"
            });
            if (activeIndex !== serviceImages.length) {
                return;
            }
            const resetLoop = window.setTimeout({
                "OurOfferingSection.useEffect.resetLoop": ()=>{
                    const firstCard = carousel.children[0];
                    carousel.style.scrollBehavior = "auto";
                    carousel.scrollLeft = firstCard.offsetLeft;
                    carousel.style.scrollBehavior = "";
                    skipNextScroll.current = true;
                    setActiveIndex(0);
                }
            }["OurOfferingSection.useEffect.resetLoop"], 1000);
            return ({
                "OurOfferingSection.useEffect": ()=>window.clearTimeout(resetLoop)
            })["OurOfferingSection.useEffect"];
        }
    }["OurOfferingSection.useEffect"], [
        activeIndex,
        isSectionVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurOfferingSection.useEffect": ()=>{
            return ({
                "OurOfferingSection.useEffect": ()=>{
                    if (interactionTimeout.current !== null) {
                        window.clearTimeout(interactionTimeout.current);
                    }
                }
            })["OurOfferingSection.useEffect"];
        }
    }["OurOfferingSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurOfferingSection.useEffect": ()=>{
            if (!isSectionVisible) {
                return;
            }
            const interval = window.setInterval({
                "OurOfferingSection.useEffect.interval": ()=>{
                    setActiveIndex({
                        "OurOfferingSection.useEffect.interval": (index)=>index + 1
                    }["OurOfferingSection.useEffect.interval"]);
                }
            }["OurOfferingSection.useEffect.interval"], 2000);
            return ({
                "OurOfferingSection.useEffect": ()=>window.clearInterval(interval)
            })["OurOfferingSection.useEffect"];
        }
    }["OurOfferingSection.useEffect"], [
        isSectionVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "mx-auto w-full container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl uppercase tracking-[0.16em] text-[#3A4235]/90 font-semibold",
                        children: "What we Offer"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/OurOfferings.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: carouselRef,
                        onPointerDown: pauseAutoplay,
                        onTouchStart: pauseAutoplay,
                        onWheel: pauseAutoplay,
                        className: "mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-sm pb-4 scrollbar-none",
                        children: carouselImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[0.78] w-full shrink-0 snap-start overflow-hidden rounded-sm sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image.src,
                                    alt: `Casa Solaz service ${image.id}`,
                                    fill: true,
                                    sizes: "(min-width: 1024px) 33vw, 80vw",
                                    className: "rounded-lg object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/OurOfferings.tsx",
                                    lineNumber: 120,
                                    columnNumber: 33
                                }, this)
                            }, `${image.id}-${index}`, false, {
                                fileName: "[project]/app/Components/OurOfferings.tsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/OurOfferings.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/OurOfferings.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/OurOfferings.tsx",
            lineNumber: 108,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/OurOfferings.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_s(OurOfferingSection, "u/EmPJaohQ183pIB/EpzAOq7r60=");
_c = OurOfferingSection;
var _c;
__turbopack_context__.k.register(_c, "OurOfferingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Components/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollReveal({ children, className = "" }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const revealRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const element = revealRef.current;
            if (!element) {
                return;
            }
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.15,
                rootMargin: "0px 0px -8% 0px"
            });
            observer.observe(element);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: revealRef,
        className: `scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/Components/ScrollReveal.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(ScrollReveal, "1uUoqv2b+epxrKSqmzwGcKiJmYY=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Components/TestimonialSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Components/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const testimonials = [
    {
        category: "Romantic",
        quote: "An absolute paradise! From the warm welcome at check-in to the breathtaking ocean view from our room, every detail was thought out. The evening view from the rooftop was the highlight of our stay.",
        author: "Sarah & Mark T."
    },
    {
        category: "Best for Travel",
        quote: "As someone who travels constantly for work, finding a hotel with reliable Wi-Fi, comfortable workspaces, and quiet rooms is crucial. This place exceeded my expectations.",
        author: "David L."
    },
    {
        category: "Family Vacation",
        quote: "Traveling with two young kids isn't always easy, but the hotel staff made us feel so welcome. The kids loved the heated pool, and the concierge gave us the best local recommendations.",
        author: "Elena R. & Family"
    },
    {
        category: "A Perfect Escape",
        quote: "Casa Solaz gave us exactly the quiet weekend we needed. The space was beautiful, the bed was incredibly comfortable, and every little detail felt considered.",
        author: "Nina & Paolo C."
    },
    {
        category: "Worth Coming Back To",
        quote: "A beautiful stay with thoughtful service from start to finish. We enjoyed every morning, every meal, and the peaceful atmosphere that made leaving surprisingly difficult.",
        author: "Miguel A."
    }
];
const carouselTestimonials = [
    ...testimonials,
    ...testimonials
];
function TestimonialSection() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skipNextScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) {
                return;
            }
            const observer = new IntersectionObserver({
                "TestimonialSection.useEffect": ([entry])=>{
                    setIsInView(entry.isIntersecting);
                }
            }["TestimonialSection.useEffect"]);
            observer.observe(section);
            return ({
                "TestimonialSection.useEffect": ()=>observer.disconnect()
            })["TestimonialSection.useEffect"];
        }
    }["TestimonialSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialSection.useEffect": ()=>{
            const carousel = carouselRef.current;
            const activeCard = carousel?.children[activeIndex];
            if (!isInView || !carousel || !activeCard) {
                return;
            }
            if (skipNextScroll.current) {
                skipNextScroll.current = false;
                return;
            }
            carousel.scrollTo({
                left: activeCard.offsetLeft,
                behavior: "smooth"
            });
            if (activeIndex !== testimonials.length) {
                return;
            }
            const resetLoop = window.setTimeout({
                "TestimonialSection.useEffect.resetLoop": ()=>{
                    const firstCard = carousel.children[0];
                    carousel.style.scrollBehavior = "auto";
                    carousel.scrollLeft = firstCard.offsetLeft;
                    carousel.style.scrollBehavior = "";
                    skipNextScroll.current = true;
                    setActiveIndex(0);
                }
            }["TestimonialSection.useEffect.resetLoop"], 1000);
            return ({
                "TestimonialSection.useEffect": ()=>window.clearTimeout(resetLoop)
            })["TestimonialSection.useEffect"];
        }
    }["TestimonialSection.useEffect"], [
        activeIndex,
        isInView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialSection.useEffect": ()=>{
            if (!isInView) {
                return;
            }
            const interval = window.setInterval({
                "TestimonialSection.useEffect.interval": ()=>{
                    setActiveIndex({
                        "TestimonialSection.useEffect.interval": (index)=>index + 1
                    }["TestimonialSection.useEffect.interval"]);
                }
            }["TestimonialSection.useEffect.interval"], 3000);
            return ({
                "TestimonialSection.useEffect": ()=>window.clearInterval(interval)
            })["TestimonialSection.useEffect"];
        }
    }["TestimonialSection.useEffect"], [
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-[90vh] w-full items-center bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "mx-auto flex w-full container flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl uppercase tracking-[0.16em] text-[#3A4235]/90 font-semibold",
                        children: "Testimonials"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/TestimonialSection.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: carouselRef,
                        className: "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none sm:mt-10",
                        children: carouselTestimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "relative flex h-[clamp(18rem,38vw,19rem)] w-full max-h-76 shrink-0 snap-start flex-col items-center rounded-lg bg-[#EADBD8] px-7 py-6 text-center sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 text-[#E8BD22]",
                                        "aria-label": "5 out of 5 stars",
                                        children: Array.from({
                                            length: 5
                                        }, (_, starIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                icon: "material-symbols:star",
                                                className: "h-6 w-6",
                                                "aria-hidden": "true"
                                            }, starIndex, false, {
                                                fileName: "[project]/app/Components/TestimonialSection.tsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/TestimonialSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-4 text-xl font-semibold uppercase leading-none",
                                        children: testimonial.category
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/TestimonialSection.tsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-sm text-lg leading-[1.2] text-[#3C4032]/90",
                                        children: [
                                            '"',
                                            testimonial.quote,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/TestimonialSection.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-auto text-sm",
                                        children: testimonial.author
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/TestimonialSection.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, `${testimonial.category}-${index}`, true, {
                                fileName: "[project]/app/Components/TestimonialSection.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/TestimonialSection.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/TestimonialSection.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/TestimonialSection.tsx",
            lineNumber: 109,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/TestimonialSection.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}
_s(TestimonialSection, "FEyBnwVxIwjIbe/bjwAg9JJmvEU=");
_c = TestimonialSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_Components_1liov14._.js.map