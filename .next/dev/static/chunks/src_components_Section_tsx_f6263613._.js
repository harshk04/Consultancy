(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Section({ children, className, id, surface = "default", reveal = true, sectionRef, ...props }) {
    _s();
    const surfaceClass = surface === "hero" ? "hero-surface" : surface === "muted" ? "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,white)]" : surface === "gold" ? "section-noise [background-image:var(--gradient-gold-soft)]" : "bg-[color:var(--bg)]";
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!reveal);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Section.useEffect": ()=>{
            if (!reveal) return;
            const el = ref.current;
            if (!el) return;
            const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
            if (reduce) return;
            const observer = new IntersectionObserver({
                "Section.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            setVisible(true);
                            observer.disconnect();
                            break;
                        }
                    }
                }
            }["Section.useEffect"], {
                threshold: 0.12,
                rootMargin: "0px 0px -10% 0px"
            });
            observer.observe(el);
            return ({
                "Section.useEffect": ()=>observer.disconnect()
            })["Section.useEffect"];
        }
    }["Section.useEffect"], [
        reveal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ...props,
        ref: sectionRef,
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(surfaceClass, "relative py-16 sm:py-20", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-6xl px-6", reveal && "reveal", visible && "is-visible"),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Section.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Section.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Section, "+zgzMbwluNVIeOovgf1o8BUbYuE=");
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_Section_tsx_f6263613._.js.map