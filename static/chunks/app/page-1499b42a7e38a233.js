(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8114:function(e,t,r){Promise.resolve().then(r.bind(r,8620)),Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.bind(r,9838)),Promise.resolve().then(r.bind(r,636)),Promise.resolve().then(r.bind(r,8201)),Promise.resolve().then(r.bind(r,1593))},94:function(e,t,r){"use strict";var s=r(7437);r(2265);var l=r(8201),n=r(2768),a=r(2381),i=r(4295),o=r(3448);t.Z=e=>{let{blurChild:t,isAction:r=!1,isDate:c=!1,data:u,className:d}=e;return(0,s.jsxs)("div",{className:(0,o.cn)(["relative bg-white flex flex-col items-start aspect-auto border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden",d]),children:[t&&t,(0,s.jsxs)("div",{className:"w-full flex items-center justify-between mb-3 sm:mb-4",children:[(0,s.jsx)(l.default,{initialValue:u.rating,allowFraction:!0,SVGclassName:"inline-block",size:23,readonly:!0}),r&&(0,s.jsx)(a.z,{variant:"ghost",size:"icon",children:(0,s.jsx)(n.Ppk,{className:"text-black/40 text-2xl"})})]}),(0,s.jsxs)("div",{className:"flex items-center mb-2 sm:mb-3",children:[(0,s.jsx)("strong",{className:"text-black sm:text-xl mr-1",children:u.user}),(0,s.jsx)(i.be3,{className:"text-[#01AB31] text-xl sm:text-2xl"})]}),(0,s.jsx)("p",{className:"text-sm sm:text-base text-black/60",children:u.content}),c&&(0,s.jsxs)("p",{className:"text-black/60 text-sm font-medium mt-4 sm:mt-6",children:["Posted on ",u.date]})]})}},9838:function(e,t,r){"use strict";var s=r(7437),l=r(2265),n=r(9092),a=r(3448),i=r(2849),o=r.n(i),c=r(636),u=r(1273),d=r(2694),x=r(94);t.default=e=>{let{data:t}=e,[r,i]=l.useState(),[m,f]=l.useState(0),[h,p]=l.useState(0),v=(0,d.ac)("(min-width: 1024px)"),b=(0,d.O_)();return(l.useEffect(()=>{r&&(p(r.scrollSnapList().length),f(r.selectedScrollSnap()+1),r.on("select",()=>{f(r.selectedScrollSnap()+1)}))},[r]),b)?(0,s.jsx)("section",{className:"overflow-hidden",children:(0,s.jsx)(n.yK,{initial:{x:"100px",opacity:0},whileInView:{x:"0",opacity:1},viewport:{once:!0},transition:{duration:.6},children:(0,s.jsxs)(c.Carousel,{setApi:i,opts:{align:"center",loop:!0},className:"relative w-full mb-6 md:mb-9",children:[(0,s.jsxs)("div",{className:"relative flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0",children:[(0,s.jsx)(n.L6,{initial:{y:"100px",opacity:0},whileInView:{y:"0",opacity:1},viewport:{once:!0},transition:{delay:.6,duration:.6},className:(0,a.cn)([o().className,"text-[32px] leading-[36px] md:text-5xl capitalize mr-auto"]),children:"OUR HAPPY CUSTOMERS"}),(0,s.jsxs)("div",{className:"flex items-center space-x-1 ml-2",children:[(0,s.jsx)(c.a,{variant:"ghost",className:"text-2xl",children:(0,s.jsx)(u.x_l,{})}),(0,s.jsx)(c.P,{variant:"ghost",className:"text-2xl",children:(0,s.jsx)(u.Z1Y,{})})]})]}),(0,s.jsx)(c.CarouselContent,{children:t.map((e,r)=>(0,s.jsx)(c.CarouselItem,{className:"w-full max-w-[358px] sm:max-w-[400px] pl-5",children:(0,s.jsx)(x.Z,{className:"h-full",data:e,blurChild:t.length>=6&&(0,s.jsx)("div",{className:(0,a.cn)([v?(m+1===h?0:m+1>h?1:m+1)===r&&"backdrop-blur-[2px]":(m===h?0:m)===r&&"backdrop-blur-[2px]",v?(1===m?h-2:2===m?h-1:m-3)===r&&"backdrop-blur-[2px]":(1===m?h-1:2===m?0:m-2)===r&&"backdrop-blur-[2px]","absolute bg-white/10 right-0 top-0 h-full w-full z-10"])})})},e.id))})]})})}):null}},8201:function(e,t,r){"use strict";r.r(t);var s=r(7437);r(2265);var l=r(7082);t.default=e=>(0,s.jsx)(l.i,{...e})},2381:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var s=r(7437),l=r(2265),n=r(7495),a=r(7712),i=r(3448);let o=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,t)=>{let{className:r,variant:l,size:a,asChild:c=!1,...u}=e,d=c?n.g7:"button";return(0,s.jsx)(d,{className:(0,i.cn)(o({variant:l,size:a,className:r})),ref:t,...u})});c.displayName="Button"},636:function(e,t,r){"use strict";r.d(t,{Carousel:function(){return d},CarouselContent:function(){return x},CarouselItem:function(){return m},P:function(){return h},a:function(){return f}});var s=r(7437),l=r(2265),n=r(653),a=r(9467),i=r(3448),o=r(2381);let c=l.createContext(null);function u(){let e=l.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let d=l.forwardRef((e,t)=>{let{orientation:r="horizontal",opts:n,setApi:o,plugins:u,className:d,children:x,...m}=e,[f,h]=(0,a.Z)({...n,axis:"horizontal"===r?"x":"y"},u),[p,v]=l.useState(!1),[b,w]=l.useState(!1),N=l.useCallback(e=>{e&&(v(e.canScrollPrev()),w(e.canScrollNext()))},[]),g=l.useCallback(()=>{null==h||h.scrollPrev()},[h]),j=l.useCallback(()=>{null==h||h.scrollNext()},[h]),y=l.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),g()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[g,j]);return l.useEffect(()=>{h&&o&&o(h)},[h,o]),l.useEffect(()=>{if(h)return N(h),h.on("reInit",N),h.on("select",N),()=>{null==h||h.off("select",N)}},[h,N]),(0,s.jsx)(c.Provider,{value:{carouselRef:f,api:h,opts:n,orientation:r||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:g,scrollNext:j,canScrollPrev:p,canScrollNext:b},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:y,className:(0,i.cn)("relative",d),role:"region","aria-roledescription":"carousel",...m,children:x})})});d.displayName="Carousel";let x=l.forwardRef((e,t)=>{let{className:r,...l}=e,{carouselRef:n,orientation:a}=u();return(0,s.jsx)("div",{ref:n,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex","horizontal"===a?"-ml-4":"-mt-4 flex-col",r),...l})})});x.displayName="CarouselContent";let m=l.forwardRef((e,t)=>{let{className:r,...l}=e,{orientation:n}=u();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,i.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===n?"pl-4":"pt-4",r),...l})});m.displayName="CarouselItem";let f=l.forwardRef((e,t)=>{var r;let{className:l,variant:a="outline",size:c="icon",...d}=e,{orientation:x,scrollPrev:m,canScrollPrev:f}=u();return(0,s.jsxs)(o.z,{ref:t,variant:a,size:c,className:(0,i.cn)(l),disabled:!f,onClick:m,...d,children:[null!==(r=null==d?void 0:d.children)&&void 0!==r?r:(0,s.jsx)(n.Y4O,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});f.displayName="CarouselPrevious";let h=l.forwardRef((e,t)=>{var r;let{className:l,variant:a="outline",size:c="icon",...d}=e,{orientation:x,scrollNext:m,canScrollNext:f}=u();return(0,s.jsxs)(o.z,{ref:t,variant:a,size:c,className:(0,i.cn)(l),disabled:!f,onClick:m,...d,children:[null!==(r=null==d?void 0:d.children)&&void 0!==r?r:(0,s.jsx)(n.LZ3,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});h.displayName="CarouselNext"},1593:function(e,t,r){"use strict";r.d(t,{Separator:function(){return i}});var s=r(7437),l=r(2265),n=r(5156),a=r(3448);let i=l.forwardRef((e,t)=>{let{className:r,orientation:l="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(n.f,{ref:t,decorative:i,orientation:l,className:(0,a.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",r),...o})});i.displayName=n.f.displayName},3448:function(e,t,r){"use strict";r.d(t,{R:function(){return a},cn:function(){return n}});var s=r(1994),l=r(3335);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,s.W)(t))}let a=(e,t)=>e.toString()===t.toString()}},function(e){e.O(0,[470,310,240,706,452,537,241,971,117,744],function(){return e(e.s=8114)}),_N_E=e.O()}]);