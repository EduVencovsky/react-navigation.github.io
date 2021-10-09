"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3089,1102],{46165:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(63366),r=a(67294),l=a(86010),i=a(33516),o=a(36742),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,p),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},44428:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(52263),l=a(46165),i=a(94884),o=a(36742),c=a(24973);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(941);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))}},94884:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),o=a(36742),c=a(44996),s=a(941),m=a(86709),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx",h=a(87682),v="image_1yU8";var p=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(p,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,v,p,E=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,c.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,C=e.metadata,P=e.truncated,T=e.isBlogPostPage,w=void 0!==T&&T,x=C.date,y=C.formattedDate,L=C.permalink,R=C.tags,I=C.readingTime,M=C.title,S=C.editUrl,A=C.authors,O=null!=(t=k.image)?t:N.image;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(p=w?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:d,itemProp:"headline"},w?M:n.createElement(o.Z,{itemProp:"url",to:L},M)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:x,itemProp:"datePublished"},y),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",E(I))),n.createElement(b,{authors:A,assets:k}))),O&&n.createElement("meta",{itemProp:"image",content:_(O,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},Z)),(R.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[f]=w,a))},R.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!w})},n.createElement(h.Z,{tags:R})),w&&S&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:S})),!w&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:C.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(24973),l=a(87462),i=a(63366),o=a(86010),c="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(941);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return f}});var n=a(67294),r=a(86010),l=a(941);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},37211:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(36742),i="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},87682:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(24973),i=a(37211),o="tags_2ga9",c="tag_11ep";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}},6979:function(e,t,a){var n=a(87462),r=a(63366),l=a(67294),i=a(73935),o=a(52263),c=a(5977),s=a(44996),m=a(36742),u=a(99105),d=a(6397),g=a(57052),f=a(16747),h=a(95613),v=a(10412),p=a(24973),E=["contextualSearch"],b=null,_=["1.x","2.x","3.x","4.x","5.x"];function Z(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function N(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function k(e){var t,m,d,v,k=e.contextualSearch,C=(0,r.Z)(e,E),P=(0,o.Z)().siteMetadata,T=(0,h.Z)(),w=null!=(t=null==(m=C.searchParameters)?void 0:m.facetFilters)?t:[],x=k?[].concat(T,w):w,y=(d=window.location.href,(v=_.findIndex((function(e){return d.includes(e)})))>=0?_[v]:"6.x");x=[].concat(x,["version:"+y]);var L=Object.assign({},C.searchParameters,{facetFilters:x}),R=(0,s.C)().withBaseUrl,I=(0,c.k6)(),M=(0,l.useRef)(null),S=(0,l.useRef)(null),A=(0,l.useState)(!1),O=A[0],U=A[1],B=(0,l.useState)(null),F=B[0],D=B[1],H=(0,l.useCallback)((function(){return b?Promise.resolve():Promise.all([a.e(4300).then(a.bind(a,44300)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;b=t}))}),[]),q=(0,l.useCallback)((function(){H().then((function(){M.current=document.createElement("div"),document.body.insertBefore(M.current,document.body.firstChild),U(!0)}))}),[H,U]),z=(0,l.useCallback)((function(){U(!1),M.current.remove()}),[U]),j=(0,l.useCallback)((function(e){H().then((function(){U(!0),D(e.key)}))}),[H,U,D]),V=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;I.push(t)}}).current,Y=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:R(""+t.pathname+t.hash)})}))})).current,G=(0,l.useMemo)((function(){return function(e){return l.createElement(N,(0,n.Z)({},e,{onClose:z}))}}),[z]),Q=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",P.docusaurusVersion),e}),[P.docusaurusVersion]);(0,g.D)({isOpen:O,onOpen:q,onClose:z,onInput:j,searchButtonRef:S});var W=(0,p.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+C.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(f.a,{onTouchStart:H,onFocus:H,onMouseOver:H,onClick:q,ref:S,translations:{buttonText:W,buttonAriaLabel:W}}),O&&(0,i.createPortal)(l.createElement(b,(0,n.Z)({onClose:z,initialScrollY:window.scrollY,initialQuery:F,navigator:V,transformItems:Y,hitComponent:Z,resultsFooterComponent:G,transformSearchClient:Q},C,{searchParameters:L})),M.current))}t.Z=function(){if(!v.Z.canUseDOM)return null;var e=(0,o.Z)().siteConfig;return l.createElement(k,e.themeConfig.algolia)}}}]);