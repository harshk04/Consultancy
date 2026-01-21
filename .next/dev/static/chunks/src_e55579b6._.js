(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/content/brand.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brand",
    ()=>brand
]);
const brand = {
    shortName: "ShreeGuru",
    fullName: "ShreeGuru Leadership & Learning",
    subtitle: "Leadership & Learning",
    tagline1: "Guiding Minds. Shaping Leaders.",
    tagline2: "Learn. Lead. Inspire."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headerCta",
    ()=>headerCta,
    "headerNav",
    ()=>headerNav
]);
const headerNav = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "IB World Schools",
        href: "/ib-world-schools"
    },
    {
        label: "Resources",
        href: "/resources",
        children: [
            {
                label: "Blogs",
                href: "/resources/blogs"
            },
            {
                label: "Case Studies",
                href: "/resources/case-studies"
            },
            {
                label: "Impact",
                href: "/resources/impact"
            }
        ]
    },
    {
        label: "Founder’s Message",
        href: "/founders-message"
    }
];
const headerCta = {
    label: "Begin a Conversation",
    href: "/contact"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...parts) {
    return parts.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/brand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function isActive(pathname, href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [homeActiveHref, setHomeActiveHref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (pathname !== "/") return;
            const targets = [
                {
                    id: "home-services",
                    href: "/services"
                },
                {
                    id: "home-about",
                    href: "/about"
                },
                {
                    id: "home-resources",
                    href: "/resources"
                }
            ];
            let raf = 0;
            const update = {
                "Header.useEffect.update": ()=>{
                    const headerHeightRaw = getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim();
                    const headerHeight = Number.parseFloat(headerHeightRaw) || 80;
                    const probeY = headerHeight + window.innerHeight * 0.22;
                    for (const t of targets){
                        const el = document.getElementById(t.id);
                        if (!el) continue;
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= probeY && rect.bottom >= probeY) {
                            setHomeActiveHref(t.href);
                            return;
                        }
                    }
                    setHomeActiveHref(null);
                }
            }["Header.useEffect.update"];
            const onScroll = {
                "Header.useEffect.onScroll": ()=>{
                    window.cancelAnimationFrame(raf);
                    raf = window.requestAnimationFrame(update);
                }
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "Header.useEffect": ()=>{
                    window.cancelAnimationFrame(raf);
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        pathname
    ]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Header.useMemo[items]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerNav"].map({
                "Header.useMemo[items]": (item)=>({
                        ...item,
                        active: pathname === "/" ? homeActiveHref ? item.href === homeActiveHref : isActive(pathname, item.href) : isActive(pathname, item.href),
                        children: item.children?.map({
                            "Header.useMemo[items]": (c)=>({
                                    ...c,
                                    active: pathname === "/" ? false : isActive(pathname, c.href)
                                })
                        }["Header.useMemo[items]"])
                    })
            }["Header.useMemo[items]"])
    }["Header.useMemo[items]"], [
        homeActiveHref,
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!open) return;
            const onKeyDown = {
                "Header.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") setOpen(false);
                }
            }["Header.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 8)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("site-header fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-[color:color-mix(in_oklab,var(--brand-gold)_22%,transparent)]", scrolled && "site-header--scrolled"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "group inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]",
                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].fullName,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/darkbg.jpeg",
                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].fullName} logo`,
                            width: 200,
                            height: 60,
                            priority: true,
                            className: "h-8 w-auto rounded-md object-contain sm:h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-1 lg:flex",
                        "aria-label": "Primary",
                        children: items.map((item)=>item.children?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        "aria-current": item.active ? "page" : undefined,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]", item.active && "text-white underline decoration-[color:var(--brand-gold)] underline-offset-8"),
                                        children: [
                                            item.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                className: "opacity-90",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 9l6 6 6-6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "invisible absolute left-0 top-full mt-2 w-60 translate-y-1 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-[color:color-mix(in_oklab,var(--brand-gold)_20%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)] p-2 shadow-[var(--shadow)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "px-3 pb-2 pt-2 text-xs font-semibold tracking-[0.18em] text-[color:color-mix(in_oklab,var(--brand-gold)_75%,white)]",
                                                    children: "RESOURCES"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-1",
                                                    children: item.children.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: c.href,
                                                            "aria-current": c.active ? "page" : undefined,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)]", c.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_12%,transparent)] text-white"),
                                                            children: c.label
                                                        }, c.href, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                "aria-current": item.active ? "page" : undefined,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]", item.active && "text-white underline decoration-[color:var(--brand-gold)] underline-offset-8"),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerCta"].href,
                                className: "hidden rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-blue)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-black hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:white] lg:inline-flex",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerCta"].label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:color-mix(in_oklab,var(--brand-gold)_25%,transparent)] text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)] lg:hidden",
                                "aria-label": open ? "Close menu" : "Open menu",
                                "aria-expanded": open,
                                onClick: ()=>setOpen((v)=>!v),
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 6l12 12M18 6 6 18",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 7h14M5 12h14M5 17h14",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-[color:color-mix(in_oklab,var(--brand-gold)_20%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-6xl px-6 py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "grid gap-1",
                            "aria-label": "Mobile primary",
                            children: [
                                items.map((item)=>item.children?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                "aria-current": item.active ? "page" : undefined,
                                                onClick: ()=>setOpen(false),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl px-4 py-3 text-base font-medium text-[color:var(--brand-gold)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]", item.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] text-white"),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 210,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-1 pl-3",
                                                children: item.children.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: c.href,
                                                        "aria-current": c.active ? "page" : undefined,
                                                        onClick: ()=>setOpen(false),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl px-4 py-2.5 text-sm font-medium text-[color:color-mix(in_oklab,var(--brand-gold)_86%,white)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]", c.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] text-white"),
                                                        children: c.label
                                                    }, c.href, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 221,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 209,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        "aria-current": item.active ? "page" : undefined,
                                        onClick: ()=>setOpen(false),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl px-4 py-3 text-base font-medium text-[color:var(--brand-gold)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]", item.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] text-white"),
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 239,
                                        columnNumber: 21
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerCta"].href,
                                    onClick: ()=>setOpen(false),
                                    className: "mt-2 inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)] px-5 py-3 text-base font-semibold text-[color:var(--brand-blue)] transition-colors hover:text-black hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:white]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerCta"].label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(Header, "61fFWtQ8U6pCYacG3wvmZ9tGNe4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/theme/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "applyThemeToElement",
    ()=>applyThemeToElement,
    "applyThemeToRoot",
    ()=>applyThemeToRoot,
    "defaultTheme",
    ()=>defaultTheme,
    "loadTheme",
    ()=>loadTheme,
    "saveTheme",
    ()=>saveTheme,
    "themeToCssVars",
    ()=>themeToCssVars
]);
const THEME_STORAGE_KEY = "siteThemeV1";
const defaultTheme = {
    brandBlue1: "#182063",
    brandBlue2: "#2f3cbc",
    brandGold1: "#e1ca9f",
    brandGold2: "#d2ae74",
    gradientAngle: 90,
    bg: "#ffffff",
    panel: "#ffffff",
    fg: "#0b0d13",
    muted: "#4b5563",
    border: "rgba(15, 23, 42, 0.18)",
    shadow: "0 18px 45px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.05)",
    radiusCard: 28,
    noiseEnabled: true,
    heroBlobOpacity: 0.16,
    heroBlobTintBlue: "#2f3cbc",
    heroBlobTintGold: "#e1ca9f",
    heroNoiseEnabled: true,
    heroVignetteStrength: 0.14,
    heroSpecksEnabled: true,
    heroSpecksOpacity: 0.1,
    heroBlobCount: 5,
    heroMotionStrength: 1,
    heroTypewriterEnabled: true,
    heroTypewriterTypeSpeedMs: 58,
    heroTypewriterDeleteSpeedMs: 34,
    heroTypewriterPauseMs: 1050,
    heroTypewriterPhrasesOverride: ""
};
function themeToCssVars(theme) {
    const amp = Math.round(theme.heroMotionStrength * 26);
    const ampSm = Math.round(theme.heroMotionStrength * 16);
    return {
        "--brand-blue-1": theme.brandBlue1,
        "--brand-blue-2": theme.brandBlue2,
        "--brand-blue": theme.brandBlue1,
        "--brand-gold-1": theme.brandGold1,
        "--brand-gold-2": theme.brandGold2,
        "--brand-gold": theme.brandGold1,
        "--gradient-angle": `${theme.gradientAngle}deg`,
        "--gradient-blue": "linear-gradient(var(--gradient-angle), var(--brand-blue-1), var(--brand-blue-2))",
        "--gradient-gold": "linear-gradient(var(--gradient-angle), var(--brand-gold-1), var(--brand-gold-2))",
        "--gradient-gold-soft": "linear-gradient(120deg, color-mix(in oklab, var(--brand-gold-1) 55%, white), color-mix(in oklab, var(--brand-gold-2) 24%, white), white)",
        "--bg": theme.bg,
        "--panel": theme.panel,
        "--fg": theme.fg,
        "--muted": theme.muted,
        "--border": theme.border,
        "--shadow": theme.shadow,
        "--radius-card": `${theme.radiusCard}px`,
        "--radius-pill": "999px",
        "--noise-opacity": theme.noiseEnabled ? "0.055" : "0",
        "--hero-blob-opacity": `${theme.heroBlobOpacity}`,
        "--hero-blob-tint-blue": theme.heroBlobTintBlue,
        "--hero-blob-tint-gold": theme.heroBlobTintGold,
        "--hero-noise-opacity": theme.heroNoiseEnabled ? "0.055" : "0",
        "--hero-vignette-strength": `${theme.heroVignetteStrength}`,
        "--hero-specks-opacity": theme.heroSpecksEnabled ? `${theme.heroSpecksOpacity}` : "0",
        "--hero-motion-strength": `${theme.heroMotionStrength}`,
        "--hero-motion-amp": `${amp}px`,
        "--hero-motion-amp-neg": `${-amp}px`,
        "--hero-motion-amp-sm": `${ampSm}px`,
        "--hero-motion-amp-sm-neg": `${-ampSm}px`
    };
}
function applyThemeToElement(theme, el) {
    const vars = themeToCssVars(theme);
    for (const [key, value] of Object.entries(vars)){
        el.style.setProperty(key, value);
    }
}
function applyThemeToRoot(theme) {
    if (typeof document === "undefined") return;
    applyThemeToElement(theme, document.documentElement);
}
function safeParseTheme(json) {
    if (!json) return null;
    try {
        return JSON.parse(json);
    } catch  {
        return null;
    }
}
function loadTheme() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const parsed = safeParseTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
    if (!parsed) return defaultTheme;
    return {
        ...defaultTheme,
        ...parsed
    };
}
function saveTheme(theme) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/theme/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ThemeProvider({ children }) {
    _s();
    const [persistedTheme, setPersistedThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThemeProvider.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadTheme"])()
    }["ThemeProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyThemeToRoot"])(persistedTheme);
        }
    }["ThemeProvider.useEffect"], [
        persistedTheme
    ]);
    const setPersistedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[setPersistedTheme]": (next)=>{
            setPersistedThemeState(next);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveTheme"])(next);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyThemeToRoot"])(next);
        }
    }["ThemeProvider.useCallback[setPersistedTheme]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[value]": ()=>({
                persistedTheme,
                setPersistedTheme
            })
    }["ThemeProvider.useMemo[value]"], [
        persistedTheme,
        setPersistedTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/theme/ThemeProvider.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
_s(ThemeProvider, "OOMfby1+0J1L4QTgHcGcLdn//pA=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
_s1(useTheme, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e55579b6._.js.map