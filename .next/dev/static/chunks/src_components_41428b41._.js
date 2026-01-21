(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Accordion({ items, className }) {
    _s();
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const defaultIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Accordion.useMemo[defaultIndex]": ()=>items.findIndex({
                "Accordion.useMemo[defaultIndex]": (i)=>i.defaultOpen
            }["Accordion.useMemo[defaultIndex]"])
    }["Accordion.useMemo[defaultIndex]"], [
        items
    ]);
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultIndex >= 0 ? defaultIndex : -1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-5", className),
        children: items.map((item, idx)=>{
            const open = idx === openIndex;
            const buttonId = `${baseId}-btn-${idx}`;
            const panelId = `${baseId}-panel-${idx}`;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[var(--radius-card)] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[var(--shadow)] transition-transform duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:shadow-[var(--shadow-hover)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: buttonId,
                        type: "button",
                        className: "flex w-full items-center justify-between gap-6 px-7 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-blue)]",
                        "aria-expanded": open,
                        "aria-controls": panelId,
                        onClick: ()=>setOpenIndex((v)=>v === idx ? -1 : idx),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-semibold text-[color:var(--fg)]",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/Accordion.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid h-10 w-10 place-items-center rounded-xl border border-[color:var(--border)] text-[color:var(--fg)] transition-transform", open && "rotate-180"),
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 9l6 6 6-6",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Accordion.tsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Accordion.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Accordion.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Accordion.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: panelId,
                        role: "region",
                        "aria-labelledby": buttonId,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid overflow-hidden px-7", open ? "pb-7" : "pb-0"),
                        style: {
                            gridTemplateRows: open ? "1fr" : "0fr",
                            transition: "grid-template-rows 220ms ease, padding 220ms ease"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-0", open ? "opacity-100" : "opacity-0"),
                            style: {
                                transition: "opacity 200ms ease"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pb-1 text-base leading-relaxed text-[color:var(--muted)]",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/src/components/Accordion.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Accordion.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Accordion.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this)
                ]
            }, item.question, true, {
                fileName: "[project]/src/components/Accordion.tsx",
                lineNumber: 25,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Accordion.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Accordion, "B6oJz329mSAjm8fwH4ctYtJqT98=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Accordion;
var _c;
__turbopack_context__.k.register(_c, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] border px-5 py-2.5 text-sm font-medium shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(15,23,42,0.12)] active:translate-y-0 motion-reduce:hover:translate-y-0 motion-reduce:transition-none";
const variants = {
    primary: "border-[color:color-mix(in_oklab,var(--brand-blue)_18%,transparent)] [background-image:var(--gradient-gold)] text-[color:var(--brand-blue)] hover:text-black hover:brightness-95",
    outline: "border-[color:var(--border)] bg-transparent text-[color:var(--fg)] hover:bg-[color:color-mix(in_oklab,var(--brand-blue)_5%,transparent)]",
    ghost: "border-transparent bg-transparent text-[color:var(--fg)] hover:bg-[color:color-mix(in_oklab,var(--brand-blue)_6%,transparent)]",
    headerLink: "border-transparent bg-transparent px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] hover:text-white"
};
function Button({ children, className, variant = "outline", href, ...props }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Button.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
function Icon({ name, className }) {
    const common = "h-5 w-5";
    switch(name){
        case "book":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(common, className),
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7 4h11a2 2 0 0 1 2 2v13.5c-2.2-1.2-4.8-1.2-7 0-2.2-1.2-4.8-1.2-7 0V6a2 2 0 0 1 1.8-2Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7 4v15.5",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Icon.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this);
        case "compass":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(common, className),
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Icon.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this);
        case "users":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(common, className),
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 11a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 8 11Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20 21v-1.2a5 5 0 0 0-5-5h-2",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11 21v-1.3a4.5 4.5 0 0 0-4.5-4.5H4",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Icon.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this);
        case "building":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(common, className),
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 21h16",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2",
                        stroke: "currentColor",
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Icon.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Icon.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this);
    }
}
_c = Icon;
var _c;
__turbopack_context__.k.register(_c, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PinnedServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinnedServices",
    ()=>PinnedServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PinnedServices({ title, description, label, panelSubtitle, panelCta, categories }) {
    _s();
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoryButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [renderIndex, setRenderIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [desktop, setDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [listHeight, setListHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bulletYs, setBulletYs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const steps = categories.length;
    const displayedIndex = reduceMotion ? activeIndex : renderIndex;
    const rendered = categories[displayedIndex] ?? categories[0];
    const safeSteps = Math.max(1, steps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedServices.useEffect": ()=>{
            const mqDesktop = window.matchMedia("(min-width: 1024px)");
            const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
            const sync = {
                "PinnedServices.useEffect.sync": ()=>setDesktop(mqDesktop.matches)
            }["PinnedServices.useEffect.sync"];
            const syncReduce = {
                "PinnedServices.useEffect.syncReduce": ()=>setReduceMotion(mqReduce.matches)
            }["PinnedServices.useEffect.syncReduce"];
            sync();
            syncReduce();
            mqDesktop.addEventListener("change", sync);
            mqReduce.addEventListener("change", syncReduce);
            return ({
                "PinnedServices.useEffect": ()=>{
                    mqDesktop.removeEventListener("change", sync);
                    mqReduce.removeEventListener("change", syncReduce);
                }
            })["PinnedServices.useEffect"];
        }
    }["PinnedServices.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedServices.useEffect": ()=>{
            if (!desktop) return;
            const container = listRef.current;
            if (!container) return;
            const measure = {
                "PinnedServices.useEffect.measure": ()=>{
                    const listRect = container.getBoundingClientRect();
                    const nextHeight = Math.max(1, Math.round(listRect.height));
                    setListHeight(nextHeight);
                    const nextBulletYs = [];
                    for(let i = 0; i < safeSteps; i += 1){
                        const btn = categoryButtonRefs.current[i];
                        if (!btn) continue;
                        const btnRect = btn.getBoundingClientRect();
                        const y = btnRect.top - listRect.top + btnRect.height / 2;
                        nextBulletYs.push(y);
                    }
                    if (nextBulletYs.length === safeSteps) {
                        setBulletYs(nextBulletYs);
                    }
                }
            }["PinnedServices.useEffect.measure"];
            measure();
            const ro = typeof ResizeObserver === "undefined" ? null : new ResizeObserver({
                "PinnedServices.useEffect": ()=>measure()
            }["PinnedServices.useEffect"]);
            ro?.observe(container);
            const onResize = {
                "PinnedServices.useEffect.onResize": ()=>measure()
            }["PinnedServices.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "PinnedServices.useEffect": ()=>{
                    window.removeEventListener("resize", onResize);
                    ro?.disconnect();
                }
            })["PinnedServices.useEffect"];
        }
    }["PinnedServices.useEffect"], [
        desktop,
        safeSteps,
        categories
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedServices.useEffect": ()=>{
            if (reduceMotion) return;
            if (activeIndex === renderIndex) return;
            let canceled = false;
            const raf = window.requestAnimationFrame({
                "PinnedServices.useEffect.raf": ()=>{
                    if (canceled) return;
                    setPhase("out");
                }
            }["PinnedServices.useEffect.raf"]);
            const t = window.setTimeout({
                "PinnedServices.useEffect.t": ()=>{
                    if (canceled) return;
                    setRenderIndex(activeIndex);
                    setPhase("in");
                    window.setTimeout({
                        "PinnedServices.useEffect.t": ()=>{
                            if (canceled) return;
                            setPhase("idle");
                        }
                    }["PinnedServices.useEffect.t"], 200);
                }
            }["PinnedServices.useEffect.t"], 160);
            return ({
                "PinnedServices.useEffect": ()=>{
                    canceled = true;
                    window.cancelAnimationFrame(raf);
                    window.clearTimeout(t);
                }
            })["PinnedServices.useEffect"];
        }
    }["PinnedServices.useEffect"], [
        activeIndex,
        renderIndex,
        reduceMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedServices.useEffect": ()=>{
            if (!desktop) return;
            const el = sceneRef.current;
            if (!el) return;
            let raf = 0;
            const recalcAndUpdate = {
                "PinnedServices.useEffect.recalcAndUpdate": ()=>{
                    const top = window.scrollY + el.getBoundingClientRect().top;
                    const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
                    const y = window.scrollY;
                    const progress = (y - top) / scrollable;
                    const clamped = Math.min(0.9999, Math.max(0, progress));
                    const nextIndex = Math.min(steps - 1, Math.floor(clamped * steps));
                    setScrollProgress(clamped);
                    setActiveIndex(nextIndex);
                }
            }["PinnedServices.useEffect.recalcAndUpdate"];
            const onScroll = {
                "PinnedServices.useEffect.onScroll": ()=>{
                    window.cancelAnimationFrame(raf);
                    raf = window.requestAnimationFrame(recalcAndUpdate);
                }
            }["PinnedServices.useEffect.onScroll"];
            const onResize = {
                "PinnedServices.useEffect.onResize": ()=>onScroll()
            }["PinnedServices.useEffect.onResize"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onResize);
            return ({
                "PinnedServices.useEffect": ()=>{
                    window.cancelAnimationFrame(raf);
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onResize);
                }
            })["PinnedServices.useEffect"];
        }
    }["PinnedServices.useEffect"], [
        desktop,
        steps
    ]);
    const jumpTo = (index)=>{
        setActiveIndex(index);
        if (!desktop) return;
        if (!sceneRef.current) return;
        const el = sceneRef.current;
        const top = window.scrollY + el.getBoundingClientRect().top;
        const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
        const segmentStart = index / steps;
        setScrollProgress(Math.min(0.9999, Math.max(0, segmentStart)));
        const y = top + scrollable * segmentStart + 1;
        window.scrollTo({
            top: y,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    };
    const { trackTop, trackBottom, fillBottom, bulletPoints, measuredHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PinnedServices.useMemo": ()=>{
            const fallbackHeight = listHeight ?? 320;
            const padding = 10;
            const fallbackYs = safeSteps <= 1 ? [
                fallbackHeight / 2
            ] : Array.from({
                length: safeSteps
            }, {
                "PinnedServices.useMemo": (_, idx)=>padding + (fallbackHeight - padding * 2) * (idx / (safeSteps - 1))
            }["PinnedServices.useMemo"]);
            const points = bulletYs.length === safeSteps ? bulletYs : fallbackYs;
            const top = points[0] ?? 0;
            const bottom = points[safeSteps - 1] ?? top;
            const clamped = Math.min(0.9999, Math.max(0, scrollProgress));
            const segmentIndex = Math.min(safeSteps - 1, Math.floor(clamped * safeSteps));
            const segmentStart = segmentIndex / safeSteps;
            const segmentEnd = (segmentIndex + 1) / safeSteps;
            const segmentT = (clamped - segmentStart) / Math.max(1e-6, segmentEnd - segmentStart);
            const startY = points[segmentIndex] ?? top;
            const endY = points[Math.min(segmentIndex + 1, safeSteps - 1)] ?? bottom;
            const fillY = startY + (endY - startY) * segmentT;
            return {
                trackTop: top,
                trackBottom: bottom,
                fillBottom: fillY,
                bulletPoints: points,
                measuredHeight: fallbackHeight
            };
        }
    }["PinnedServices.useMemo"], [
        bulletYs,
        listHeight,
        safeSteps,
        scrollProgress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/PinnedServices.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/PinnedServices.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/PinnedServices.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PinnedServices.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sceneRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-12", desktop ? "relative" : ""),
                style: desktop ? {
                    height: `${Math.max(4, steps) * 110}vh`
                } : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(desktop ? "sticky top-[calc(var(--header-height)+28px)]" : ""),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-8 lg:grid-cols-12", desktop && "items-stretch"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5",
                                children: [
                                    !desktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5 rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_22%,transparent)] bg-white px-4 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-[color:color-mix(in_oklab,var(--border)_80%,transparent)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-3 top-1/2 h-[2px] -translate-y-1/2 bg-[image:var(--gradient-gold)] transition-[width] duration-200 ease-out motion-reduce:transition-none",
                                                    style: {
                                                        width: steps <= 1 ? "0%" : `${activeIndex / (steps - 1) * 100}%`
                                                    },
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this),
                                                categories.map((c, idx)=>{
                                                    const isActive = idx === activeIndex;
                                                    const isCompleted = idx < activeIndex;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>jumpTo(idx),
                                                        "aria-current": isActive ? "step" : undefined,
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 grid h-8 w-8 place-items-center rounded-full border bg-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]", isCompleted ? "border-[color:color-mix(in_oklab,var(--brand-gold)_40%,var(--border))] bg-[color:color-mix(in_oklab,var(--brand-gold)_18%,white)]" : "border-[color:var(--border)]", isActive && "h-9 w-9 border-[color:color-mix(in_oklab,var(--brand-gold)_45%,transparent)] bg-[image:var(--gradient-gold)] shadow-[0_10px_20px_rgba(15,23,42,0.18)]"),
                                                        title: c.title,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-semibold", isActive ? "text-[color:var(--brand-blue)]" : "text-[color:var(--fg)]"),
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, c.id, false, {
                                                        fileName: "[project]/src/components/PinnedServices.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PinnedServices.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: listRef,
                                        className: "grid gap-4",
                                        children: categories.map((c, idx)=>{
                                            const isActive = idx === activeIndex;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>jumpTo(idx),
                                                ref: (node)=>{
                                                    categoryButtonRefs.current[idx] = node;
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex w-full items-center gap-4 rounded-[calc(var(--radius-card)-6px)] border bg-white px-5 py-4 text-left shadow-[var(--shadow)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)] hover:shadow-[var(--shadow-hover)]", "hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0", isActive ? "border-[color:var(--border-gold)] bg-[image:var(--gradient-gold-soft)]" : "border-[color:var(--border)]"),
                                                "aria-current": isActive ? "true" : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid h-11 w-11 shrink-0 place-items-center rounded-xl border bg-white text-[color:var(--fg)] transition-colors", isActive ? "border-[color:var(--border-gold)] bg-[color:color-mix(in_oklab,white_75%,var(--brand-gold)_25%)]" : "border-[color:var(--border)]"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: c.icon,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isActive ? "text-[color:var(--brand-blue)]" : "text-[color:var(--fg)]")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PinnedServices.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold leading-snug text-[color:var(--fg)]", isActive && "text-[color:var(--brand-blue)]"),
                                                                children: c.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PinnedServices.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-sm leading-relaxed text-[color:var(--muted)]", isActive && "text-[color:color-mix(in_oklab,var(--brand-blue)_48%,var(--muted))]"),
                                                                children: c.blurb
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PinnedServices.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PinnedServices.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/src/components/PinnedServices.tsx",
                                                lineNumber: 279,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PinnedServices.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this),
                                    desktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-xs text-[color:var(--muted)]",
                                        children: "Scroll to reveal each category, or click to jump."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PinnedServices.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PinnedServices.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:col-span-1 lg:flex lg:justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-12",
                                    style: {
                                        height: measuredHeight
                                    },
                                    "aria-label": "Services progress",
                                    role: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 w-px -translate-x-1/2 bg-[color:color-mix(in_oklab,var(--border)_85%,transparent)]",
                                            style: {
                                                top: trackTop,
                                                height: Math.max(1, trackBottom - trackTop)
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 w-[2px] -translate-x-1/2 bg-[image:var(--gradient-gold)] transition-[height] duration-150 ease-out motion-reduce:transition-none",
                                            style: {
                                                top: trackTop,
                                                height: Math.max(0, fillBottom - trackTop)
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        categories.map((c, idx)=>{
                                            const isActive = idx === activeIndex;
                                            const isCompleted = idx < activeIndex;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>jumpTo(idx),
                                                "aria-current": isActive ? "step" : undefined,
                                                title: c.title,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]", "h-4 w-4", isCompleted ? "border-[color:color-mix(in_oklab,var(--brand-gold)_45%,var(--border))] bg-[color:color-mix(in_oklab,var(--brand-gold)_16%,white)]" : "border-[color:var(--border)]", isActive && "h-5 w-5 border-[color:color-mix(in_oklab,var(--brand-gold)_55%,transparent)] bg-[image:var(--gradient-gold)] shadow-[0_12px_28px_rgba(15,23,42,0.22)]", "hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)]"),
                                                style: {
                                                    top: bulletPoints[idx] ?? 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: c.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 23
                                                }, this)
                                            }, c.id, false, {
                                                fileName: "[project]/src/components/PinnedServices.tsx",
                                                lineNumber: 352,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PinnedServices.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 lg:pl-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-[var(--radius-card)] border bg-[color:var(--panel)] p-8 shadow-[var(--shadow)]", "transition-shadow duration-200", "border-[color:var(--border)]"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-300", reduceMotion ? "" : phase === "out" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]",
                                                    children: "SERVICES"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-4 font-display text-4xl leading-[1.02] text-[color:var(--fg)] sm:text-5xl",
                                                    children: rendered.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-5 text-base leading-relaxed text-[color:var(--muted)]",
                                                    children: rendered.blurb
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-10 text-sm font-semibold text-[color:var(--fg)]",
                                                    children: panelSubtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-3 sm:grid-cols-2",
                                                    children: rendered.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-medium text-[color:var(--fg)]",
                                                            children: item
                                                        }, item, false, {
                                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "primary",
                                                href: panelCta.href,
                                                className: "px-7 py-3 text-base",
                                                children: panelCta.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PinnedServices.tsx",
                                                lineNumber: 411,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-6 flex items-center gap-6 text-xs text-[color:var(--muted)]", desktop ? "justify-between" : "justify-end"),
                                            children: [
                                                desktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Step ",
                                                        activeIndex + 1,
                                                        " / ",
                                                        steps
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services",
                                                    className: "rounded-md font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4 hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
                                                    children: "Explore all services →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PinnedServices.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PinnedServices.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PinnedServices.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PinnedServices.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PinnedServices.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PinnedServices.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PinnedServices.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(PinnedServices, "hpnRB/QEs7zquYU0nqZQKKFVyJQ=");
_c = PinnedServices;
var _c;
__turbopack_context__.k.register(_c, "PinnedServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
function Section({ children, className, id, surface = "default", reveal = true }) {
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
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(surfaceClass, "relative py-16 sm:py-20", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-6xl px-6", reveal && "reveal", visible && "is-visible"),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Section.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Section.tsx",
        lineNumber: 56,
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

//# sourceMappingURL=src_components_41428b41._.js.map