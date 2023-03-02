(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1091],{80821:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/seo/rendering-and-ranking/amp",function(){return __webpack_require__(88865)}])},95933:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return answer_box}});var jsx_runtime=__webpack_require__(97458),style=__webpack_require__(27546),style_default=__webpack_require__.n(style);__webpack_require__(52983);var cross=function(param){let{color}=param;return(0,jsx_runtime.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,jsx_runtime.jsx)("g",{fill:color||"#111111",children:(0,jsx_runtime.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:color||"#111111"})})})},check=__webpack_require__(42752),records=__webpack_require__(53192),learn_button=__webpack_require__(92856);function Area(props){return(0,jsx_runtime.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[props.children,(0,jsx_runtime.jsx)(style_default(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function Answer(param){let{value,onChange,selected,readOnly,children}=param;return(0,jsx_runtime.jsxs)("label",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])+" "+`f5${readOnly?" disabled":""}`,children:[(0,jsx_runtime.jsx)("input",{defaultChecked:selected,disabled:readOnly,name:"answer",onChange:onChange,type:"radio",value:value,className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])}),(0,jsx_runtime.jsx)("span",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]]),children:children}),(0,jsx_runtime.jsx)(style_default(),{id:"eb16188a399713d6",dynamic:[readOnly?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${readOnly?"":"cursor: pointer;"}
        }label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function Symbol(param){let{correct,selected}=param;return correct||selected?(0,jsx_runtime.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[correct?(0,jsx_runtime.jsx)(check.Z,{color:"#0070f3"}):(0,jsx_runtime.jsx)(cross,{color:"#e00"}),(0,jsx_runtime.jsx)(style_default(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function AnswerResultMessage(param){let{answer,correctAnswer}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[void 0!==answer&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:!0})," "]}),void 0===answer?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The correct answer is: ",(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:correctAnswer})]}):answer===correctAnswer?(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,jsx_runtime.jsx)(style_default(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var answer_box=function(param){let{meta,answers,correctAnswer,children}=param,[record,dispatchRecord]=(0,records.a)(meta);return(0,jsx_runtime.jsxs)(Area,{children:[children,answers.map(answer=>(0,jsx_runtime.jsxs)(Answer,{onChange:e=>dispatchRecord({type:"answer",answer:e.target.value}),readOnly:record.submitted,selected:answer===record.answer,value:answer,children:[answer," ",record.submitted?(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:answer===record.answer}):null]},answer)),(0,jsx_runtime.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[record.submitted?(0,jsx_runtime.jsx)(AnswerResultMessage,{answer:record.answer,correctAnswer:correctAnswer}):(0,jsx_runtime.jsx)(learn_button.Z,{color:"#252525",invert:!0,onClick(){dispatchRecord({type:"submit"}),record.answer===correctAnswer&&dispatchRecord({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,jsx_runtime.jsx)(style_default(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},10251:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{h$:function(){return InternalLink},mj:function(){return GenericLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14517),_components_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2530),_link_module_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44709),_link_module_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_link_module_css__WEBPACK_IMPORTED_MODULE_4__);function GenericLink(props){return!props.href.startsWith("/")||props.href.startsWith("/docs")||props.href.startsWith("/api")?props.href.includes("@")||props.href.startsWith("#")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnchorLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExternalLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InternalLink,{...props})}function InternalLink(param){let{href,as="",children,error=!1,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_link__WEBPACK_IMPORTED_MODULE_2__.r,{as:as,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().link,{[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().error]:error,[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().hoverUnderline]:underlineOnHover}),href:href,children:children})}function AnchorLink(param){let{href,onClick,children,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,onClick:onClick,className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["9da93be90d00fb56",[underlineOnHover?"underline":"none"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"9da93be90d00fb56",dynamic:[underlineOnHover?"underline":"none"],children:`a.__jsx-style-dynamic-selector{text-decoration:none;color:#0070f3;font-size:inherit;cursor:pointer}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:${underlineOnHover?"underline":"none"};-moz-text-decoration:${underlineOnHover?"underline":"none"};text-decoration:${underlineOnHover?"underline":"none"}}`})]})}function ExternalLink(param){let{href,children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,rel:"noopener noreferrer",target:"_blank",className:"jsx-3da361ed9bbc2b1",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"3da361ed9bbc2b1",children:"a.jsx-3da361ed9bbc2b1{text-decoration:none;color:#0070f3;font-size:inherit}a.jsx-3da361ed9bbc2b1:hover{text-decoration:underline}"})]})}},9476:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:function(){return P}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function P(param){let{className="",children,large,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["250a25f4b2912b42",[fontSize||(large?"18px":"14px")]]])+" "+(className||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"250a25f4b2912b42",dynamic:[fontSize||(large?"18px":"14px")],children:`p.__jsx-style-dynamic-selector{font-weight:400;font-size:${fontSize||(large?"18px":"14px")};line-height:24px}`})]})}function B(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"jsx-4a4877b22e18241e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"4a4877b22e18241e",children:"span.jsx-4a4877b22e18241e{font-weight:600}"})]})}P.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),B.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),P.B=B},88865:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023);__webpack_require__(95933);var _components_text_paragraph__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9476),_components_text_link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10251);let meta={title:"Rendering",courseId:"seo",lessonId:"rendering-and-ranking",stepId:"amp",subtitle:"What about AMP?"},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_5__.P,{fontSize:"16px",children:["In 2016, Google began giving"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_6__.mj,{href:"https://developers.google.com/search/docs/guides/about-amp",children:"search ranking preference"})," ","to web pages using\xa0",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_6__.mj,{href:"https://amp.dev/",children:"AMP"}),"\xa0– a technology that enables developers to create web pages that load faster on mobile devices – at the cost of building and maintaining them over time."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_5__.P,{fontSize:"16px",children:["With the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_6__.mj,{href:"https://web.dev/vitals/",children:"Core Web Vitals"})," page experience update, Google"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_6__.mj,{href:"https://developers.google.com/search/blog/2021/04/more-details-page-experience#details",children:"dropped AMP pages as a requirement"})," ","to appear in search carousels. This is one of the last main benefits that Google had for AMP in terms of SEO purposes."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_5__.P,{fontSize:"16px",children:"Since the introduction of AMP, newer technology, such as Next.js, has proven its ability to improve website experience without sacrificing Developer Experience (DX)."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_5__.P,{fontSize:"16px",children:["While Next.js offers"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_6__.mj,{href:"https://nextjs.org/docs/advanced-features/amp-support/introduction",children:"AMP support"}),", consider weighing the costs and benefits of having an AMP implementation in your website if it already has great Core Web Vitals scores."]})]})}}MDXContent.isMDXComponent=!0},44709:function(module){module.exports={link:"link_link__8vjBa",error:"link_error__nW_2H",hoverUnderline:"link_hoverUnderline___vgMl"}}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=80821)}),_N_E=__webpack_require__.O()}]);