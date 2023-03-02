(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6e3],{35205:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/seo/introduction-to-seo/webcrawlers",function(){return __webpack_require__(28599)}])},33741:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458);__webpack_require__(52983);var next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82041),next_image__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__),_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20975),_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.Z=function(props){let{caption,margin=40,captionSpacing=null,shadow=!1,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure",{className:_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3___default().figure,style:{margin:`${margin}px 0`},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2___default(),{...rest,alt:"",className:`${_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3___default().img} ${shadow?_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3___default().shadow:""}`}),caption?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption",{className:_image_figure_module_css__WEBPACK_IMPORTED_MODULE_3___default().figcaption,style:captionSpacing?{marginTop:captionSpacing}:{},children:caption}):null]})}},95933:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return answer_box}});var jsx_runtime=__webpack_require__(97458),style=__webpack_require__(27546),style_default=__webpack_require__.n(style);__webpack_require__(52983);var cross=function(param){let{color}=param;return(0,jsx_runtime.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,jsx_runtime.jsx)("g",{fill:color||"#111111",children:(0,jsx_runtime.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:color||"#111111"})})})},check=__webpack_require__(42752),records=__webpack_require__(53192),learn_button=__webpack_require__(92856);function Area(props){return(0,jsx_runtime.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[props.children,(0,jsx_runtime.jsx)(style_default(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function Answer(param){let{value,onChange,selected,readOnly,children}=param;return(0,jsx_runtime.jsxs)("label",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])+" "+`f5${readOnly?" disabled":""}`,children:[(0,jsx_runtime.jsx)("input",{defaultChecked:selected,disabled:readOnly,name:"answer",onChange:onChange,type:"radio",value:value,className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])}),(0,jsx_runtime.jsx)("span",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]]),children:children}),(0,jsx_runtime.jsx)(style_default(),{id:"eb16188a399713d6",dynamic:[readOnly?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${readOnly?"":"cursor: pointer;"}
        }label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function Symbol(param){let{correct,selected}=param;return correct||selected?(0,jsx_runtime.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[correct?(0,jsx_runtime.jsx)(check.Z,{color:"#0070f3"}):(0,jsx_runtime.jsx)(cross,{color:"#e00"}),(0,jsx_runtime.jsx)(style_default(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function AnswerResultMessage(param){let{answer,correctAnswer}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[void 0!==answer&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:!0})," "]}),void 0===answer?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The correct answer is: ",(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:correctAnswer})]}):answer===correctAnswer?(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,jsx_runtime.jsx)(style_default(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var answer_box=function(param){let{meta,answers,correctAnswer,children}=param,[record,dispatchRecord]=(0,records.a)(meta);return(0,jsx_runtime.jsxs)(Area,{children:[children,answers.map(answer=>(0,jsx_runtime.jsxs)(Answer,{onChange:e=>dispatchRecord({type:"answer",answer:e.target.value}),readOnly:record.submitted,selected:answer===record.answer,value:answer,children:[answer," ",record.submitted?(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:answer===record.answer}):null]},answer)),(0,jsx_runtime.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[record.submitted?(0,jsx_runtime.jsx)(AnswerResultMessage,{answer:record.answer,correctAnswer:correctAnswer}):(0,jsx_runtime.jsx)(learn_button.Z,{color:"#252525",invert:!0,onClick(){dispatchRecord({type:"submit"}),record.answer===correctAnswer&&dispatchRecord({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,jsx_runtime.jsx)(style_default(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},60350:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H3:function(){return H3},H4:function(){return H4},H5:function(){return H5}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);function H3(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"jsx-f28bd670423c9152",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"f28bd670423c9152",children:"h3.jsx-f28bd670423c9152{font-weight:bold;font-size:18px}h3.jsx-f28bd670423c9152 code{margin-left:6px;margin-right:6px}"})]})}function H4(param){let{children,isCommand}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4",{className:"jsx-78840f56e29ac759 "+((isCommand?"command":"")||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"78840f56e29ac759",children:"h4.jsx-78840f56e29ac759{font-weight:bold;font-size:16px}.command.jsx-78840f56e29ac759{color:#bd10e0;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;font-size:.9em}h4.jsx-78840f56e29ac759 code{margin-left:6px;margin-right:6px}"})]})}function H5(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5",{className:"jsx-ed7f7d0730484ac7",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"ed7f7d0730484ac7",children:"h5.jsx-ed7f7d0730484ac7{font-weight:bold;font-size:15px}h5.jsx-ed7f7d0730484ac7 code{margin-left:6px;margin-right:6px}"})]})}},10251:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{h$:function(){return InternalLink},mj:function(){return GenericLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14517),_components_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2530),_link_module_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44709),_link_module_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_link_module_css__WEBPACK_IMPORTED_MODULE_4__);function GenericLink(props){return!props.href.startsWith("/")||props.href.startsWith("/docs")||props.href.startsWith("/api")?props.href.includes("@")||props.href.startsWith("#")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnchorLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExternalLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InternalLink,{...props})}function InternalLink(param){let{href,as="",children,error=!1,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_link__WEBPACK_IMPORTED_MODULE_2__.r,{as:as,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().link,{[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().error]:error,[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().hoverUnderline]:underlineOnHover}),href:href,children:children})}function AnchorLink(param){let{href,onClick,children,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,onClick:onClick,className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["9da93be90d00fb56",[underlineOnHover?"underline":"none"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"9da93be90d00fb56",dynamic:[underlineOnHover?"underline":"none"],children:`a.__jsx-style-dynamic-selector{text-decoration:none;color:#0070f3;font-size:inherit;cursor:pointer}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:${underlineOnHover?"underline":"none"};-moz-text-decoration:${underlineOnHover?"underline":"none"};text-decoration:${underlineOnHover?"underline":"none"}}`})]})}function ExternalLink(param){let{href,children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,rel:"noopener noreferrer",target:"_blank",className:"jsx-3da361ed9bbc2b1",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"3da361ed9bbc2b1",children:"a.jsx-3da361ed9bbc2b1{text-decoration:none;color:#0070f3;font-size:inherit}a.jsx-3da361ed9bbc2b1:hover{text-decoration:underline}"})]})}},38658:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{LI:function(){return LI},OL:function(){return OL},UL:function(){return UL}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function UL(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"jsx-571896de3ffb79ac",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"571896de3ffb79ac",children:'ul.jsx-571896de3ffb79ac{padding:0;list-style-type:none;margin-left:15px}ul.jsx-571896de3ffb79ac>li::before{content:"-";display:inline-block;color:#999;position:absolute;margin-left:-15px}'})]})}function OL(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol",{className:"jsx-fb2728ad24ced75e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"fb2728ad24ced75e",children:"ol.jsx-fb2728ad24ced75e{padding:0;margin-left:15px}"})]})}function LI(param){let{children,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["d489cf15d2c12258",[fontSize||"14px"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"d489cf15d2c12258",dynamic:[fontSize||"14px"],children:`li.__jsx-style-dynamic-selector{${fontSize||"14px"};line-height:24px;margin-bottom:10px}`})]})}UL.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},OL.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},LI.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}},9476:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:function(){return P}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function P(param){let{className="",children,large,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["250a25f4b2912b42",[fontSize||(large?"18px":"14px")]]])+" "+(className||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"250a25f4b2912b42",dynamic:[fontSize||(large?"18px":"14px")],children:`p.__jsx-style-dynamic-selector{font-weight:400;font-size:${fontSize||(large?"18px":"14px")};line-height:24px}`})]})}function B(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"jsx-4a4877b22e18241e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"4a4877b22e18241e",children:"span.jsx-4a4877b22e18241e{font-weight:600}"})]})}P.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),B.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),P.B=B},28599:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023),_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95933),_components_text_list__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38658),_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9476),_components_text_heading__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(60350),_components_text_link__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10251),_components_image_figure__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(33741);let meta={title:"Introduction to SEO",courseId:"seo",lessonId:"introduction-to-seo",stepId:"webcrawlers",subtitle:"What are Web Crawlers?"},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"In order for your website to appear in search results, Google (as well as other search engines such as Bing, Yandex, Baidu, Naver, Yahoo or DuckDuckGo) use web crawlers to navigate the website to discover websites and its web pages."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:["Different search engines have different"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://gs.statcounter.com/search-engine-market-share",children:"market shares"})," ","in each country."," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:["In this guide we cover Google, which is the biggest search engine in most countries. That being said, you might want to check other search engines and their guidelines, especially if your target customers are in"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://gs.statcounter.com/search-engine-market-share/all/china",children:"China"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://gs.statcounter.com/search-engine-market-share/all/russian-federation",children:"Russia"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://gs.statcounter.com/search-engine-market-share/all/japan",children:"Japan"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://gs.statcounter.com/search-engine-market-share/all/south-korea",children:"South Korea"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"While there are some differences when it comes to Ranking and Rendering, most search engines work in a very similar way when it comes to Crawling and Indexing."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:["Web crawlers are a type of bot that emulate users and navigate through links found on the websites to index the pages. Web crawlers identify themselves using custom"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",children:"user-agents"}),". Google ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers",children:"has several web crawlers"}),", but the ones that are used more often are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Googlebot Desktop"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Googlebot Smartphone"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_heading__WEBPACK_IMPORTED_MODULE_7__.H3,{children:"How Does Googlebot Work?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_image_figure__WEBPACK_IMPORTED_MODULE_9__.Z,{alt:"Googlebot Flow Chart",oversize:!1,src:"/static/images/learn/seo/googlebot.png",width:1440,height:960,caption:"The journey the Googlebot makes to index webpages"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"A general overview of the process can be the following:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.OL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Find URLs"}),":  Google sources URLs from many places, including ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://search.google.com/search-console",children:"Google Search Console"}),", links between websites, or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://developers.google.com/search/docs/advanced/sitemaps/overview",children:"XML sitemaps"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Add to Crawl Queue"}),": These URLs are added to the Crawl Queue for the Googlebot to process. URLs in the Crawl Queue usually last seconds there, but it can be up to a few days depending on the case, especially if the pages need to be rendered, indexed, or – if the URL is already indexed – refreshed. The pages will then enter the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"/learn/seo/rendering-and-ranking",children:"Render Queue"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"HTTP Request"}),": The crawler makes an HTTP request to get the headers and acts according to the returned status code:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.UL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:"200"})," - it crawls and parses the HTML."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:"30X"})," - it follows the redirects."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:"40X"})," - it will note the error and not load the HTML"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:"50X"})," - it may come back later to check if the status code has changed."]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Render Queue"}),": The different services and components of the search system process the HTML and parse the content. If the page has some JavaScript client-side based content, the URLs might be added to a Render Queue. Render Queue is more costly for Google as it needs to use more resources to render JavaScript and therefore URLs rendered are a smaller percentage over the total pages out there on the internet. Some other search engines might not have the same rendering capacity as Google, and this is where Next.js can help with your rendering strategy."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Ready to be indexed"}),": If all criteria are met, the pages may be eligible to be indexed and shown in search results."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:["In the next few sections, we will take a deep dive into each of the main components of a search system's processes:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"/learn/seo/crawling-and-indexing",children:"crawling and indexing"}),", and"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"/learn/seo/rendering-and-ranking",children:"rendering and ranking"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__.Z,{meta:meta,answers:["Via their IP address.","Via their device type","Via their interaction with the page.","Via their User-Agent."],correctAnswer:"Via their User-Agent.",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_heading__WEBPACK_IMPORTED_MODULE_7__.H3,{children:"Quick Review"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"How can you identify if a user on your site is a web crawler?"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{width:"100%",padding:"30px 20px",borderRadius:"10px",background:"#F3F3F3"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_heading__WEBPACK_IMPORTED_MODULE_7__.H3,{style:{fontWeight:"bold"},children:"Further Reading"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.UL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Google:  "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://developers.google.com/search/docs/beginner/seo-starter-guide",children:"SEO Starter Guide"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"MDN:  "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://developer.mozilla.org/es/docs/Web/HTTP/Headers/User-Agent",children:"MDN:  User-Agents"})]})]})]})]})}}MDXContent.isMDXComponent=!0},20975:function(module){module.exports={figure:"image-figure_figure__DUggx",shadow:"image-figure_shadow___1DHG",figcaption:"image-figure_figcaption__LVySW",img:"image-figure_img__fnPt1"}},44709:function(module){module.exports={link:"link_link__8vjBa",error:"link_error__nW_2H",hoverUnderline:"link_hoverUnderline___vgMl"}}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,2041,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=35205)}),_N_E=__webpack_require__.O()}]);