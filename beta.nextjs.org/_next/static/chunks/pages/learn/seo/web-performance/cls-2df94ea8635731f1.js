(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5826],{17200:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/seo/web-performance/cls",function(){return __webpack_require__(73900)}])},87472:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{n:function(){return Video}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52983),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14517),_intersection_observer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37800);function ImageContent(props){let{videoSrc,video,renderImage,src,alt}=props;return src?videoSrc||video?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:src}):renderImage?renderImage(props):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{alt:alt,src:src||null}):null}class Image extends react__WEBPACK_IMPORTED_MODULE_2__.Component{static defaultProps={lazy:!0};state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src};handleIntersect=entry=>{entry.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})};render(){let{caption,width,height,margin=40,video=!1,videoSrc,captionSpacing=null,renderImage,oversize=!0,float,lazy,shadow,style,...rest}=this.props,aspectRatio=`${String(height/width*100)}%`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.Z,{disabled:!lazy,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]])+" "+((0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)({oversize:width>650&&oversize,float:float&&width<520})||""),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]])+" container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{paddingBottom:aspectRatio,...style},className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageContent,{alt:rest.alt,height:height,renderImage:renderImage,video:video,videoSrc:videoSrc,width:width,...rest,src:this.state.src})}),caption?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption",{style:captionSpacing?{marginTop:captionSpacing}:{},className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]]),children:caption}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"95f21c269387503e",dynamic:[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${margin}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${width?`width: ${width}px;`:""}
                max-width: 100%;}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}
              }figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${width}px;margin:${margin}px 0 ${margin}px -webkit-calc(((${width}px - 650px) / 2) * -1);margin:${margin}px 0 ${margin}px -moz-calc(((${width}px - 650px) / 2) * -1);margin:${margin}px 0 ${margin}px calc(((${width}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${float};margin:${margin}px;margin-${float}:-150px}}`})]})})}}function Video(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{...props,alt:"",video:!0})}__webpack_exports__.Z=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{...props,alt:""})}},37800:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Observer}});var react=__webpack_require__(52983),react_dom=__webpack_require__(63730);function hasEqualOptions(observer,options){return equalPair(options.root,observer.root)&&equalPair(options.rootMargin,observer.rootMargin)&&equalPair(options.threshold,observer.thresholds)}function validateRootMargin(margin){if(!/^-?\d*\.?\d+(?:px|%)$/.test(margin))throw Error("rootMargin must be specified as a CSS margin property")}function equalPair(optionA,optionB){return Array.isArray(optionA)&&Array.isArray(optionB)&&optionA.length===optionB.length?optionA.every((element,idx)=>equalPair(optionA[idx],optionB[idx])):optionA===optionB}__webpack_require__(81324);let manager=function(){let observers=new Map;function getObserverTargets(observer){return observers.has(observer)?observers.get(observer):observers.set(observer,new Map).get(observer)}function intersectionCallback(entries,observer){for(let entry of entries){let handlers=getObserverTargets(observer),handler=handlers.get(entry.target);handler&&handler(entry)}}return{getObserver:function(options){return function(){let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},parsedOptions=function(){var threshold;let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:options.root||null,rootMargin:function(rootMargin){let margins=(rootMargin||"0px").trim().split(/\s+/);return margins.forEach(validateRootMargin),margins[1]=margins[1]||margins[0],margins[2]=margins[2]||margins[0],margins[3]=margins[3]||margins[1],margins.join(" ")}(options.rootMargin),threshold:Array.isArray(threshold=options.threshold)?threshold:[void 0!==threshold?threshold:0]}}(options);for(let observer of observers.keys())if(hasEqualOptions(observer,parsedOptions))return observer;return null}(options)||new IntersectionObserver(intersectionCallback,options)},observeTarget:function(observer,target,handler){let targets=getObserverTargets(observer);targets.set(target,handler),observer.observe(target)},unobserveTarget:function(observer,target){let handlers=getObserverTargets(observer);handlers.delete(target),observer.unobserve(target)}}}(),{getObserver}=manager,{observeTarget}=manager,{unobserveTarget}=manager;class Observer extends react.Component{static defaultProps={disabled:!1,once:!1};shouldReobserve=!1;componentDidMount(){this.observer=getObserver(getOptions(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(nextProps){let nextOptions=getOptions(nextProps);hasEqualOptions(this.observer,nextOptions)||(this.unobserve(),this.observer=getObserver(nextOptions),this.shouldReobserve=!0),this.props.disabled&&!nextProps.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&nextProps.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}handleTarget=node=>{let element=node&&Object.prototype.hasOwnProperty.call(node,"getBoundingClientRect")?node:(0,react_dom.findDOMNode)(node);this.target&&this.target!==element&&(this.unobserve(),this.shouldReobserve=!0),this.target=element};observe(){this.props.disabled||observeTarget(this.observer,this.target,this.handleIntersect)}unobserve(){unobserveTarget(this.observer,this.target)}handleIntersect=entry=>{this.props.onIntersect(entry,this.props.value),this.props.once&&entry.isIntersecting&&this.unobserve()};render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,react.cloneElement)(react.Children.only(this.props.children),{ref:this.handleTarget})}}let getOptions=props=>({root:props.root,rootMargin:props.rootMargin,threshold:props.threshold})},95933:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return answer_box}});var jsx_runtime=__webpack_require__(97458),style=__webpack_require__(27546),style_default=__webpack_require__.n(style);__webpack_require__(52983);var cross=function(param){let{color}=param;return(0,jsx_runtime.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,jsx_runtime.jsx)("g",{fill:color||"#111111",children:(0,jsx_runtime.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:color||"#111111"})})})},check=__webpack_require__(42752),records=__webpack_require__(53192),learn_button=__webpack_require__(92856);function Area(props){return(0,jsx_runtime.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[props.children,(0,jsx_runtime.jsx)(style_default(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function Answer(param){let{value,onChange,selected,readOnly,children}=param;return(0,jsx_runtime.jsxs)("label",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])+" "+`f5${readOnly?" disabled":""}`,children:[(0,jsx_runtime.jsx)("input",{defaultChecked:selected,disabled:readOnly,name:"answer",onChange:onChange,type:"radio",value:value,className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])}),(0,jsx_runtime.jsx)("span",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]]),children:children}),(0,jsx_runtime.jsx)(style_default(),{id:"eb16188a399713d6",dynamic:[readOnly?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${readOnly?"":"cursor: pointer;"}
        }label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function Symbol(param){let{correct,selected}=param;return correct||selected?(0,jsx_runtime.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[correct?(0,jsx_runtime.jsx)(check.Z,{color:"#0070f3"}):(0,jsx_runtime.jsx)(cross,{color:"#e00"}),(0,jsx_runtime.jsx)(style_default(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function AnswerResultMessage(param){let{answer,correctAnswer}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[void 0!==answer&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:!0})," "]}),void 0===answer?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The correct answer is: ",(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:correctAnswer})]}):answer===correctAnswer?(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,jsx_runtime.jsx)(style_default(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var answer_box=function(param){let{meta,answers,correctAnswer,children}=param,[record,dispatchRecord]=(0,records.a)(meta);return(0,jsx_runtime.jsxs)(Area,{children:[children,answers.map(answer=>(0,jsx_runtime.jsxs)(Answer,{onChange:e=>dispatchRecord({type:"answer",answer:e.target.value}),readOnly:record.submitted,selected:answer===record.answer,value:answer,children:[answer," ",record.submitted?(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:answer===record.answer}):null]},answer)),(0,jsx_runtime.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[record.submitted?(0,jsx_runtime.jsx)(AnswerResultMessage,{answer:record.answer,correctAnswer:correctAnswer}):(0,jsx_runtime.jsx)(learn_button.Z,{color:"#252525",invert:!0,onClick(){dispatchRecord({type:"submit"}),record.answer===correctAnswer&&dispatchRecord({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,jsx_runtime.jsx)(style_default(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},60350:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H3:function(){return H3},H4:function(){return H4},H5:function(){return H5}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);function H3(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"jsx-f28bd670423c9152",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"f28bd670423c9152",children:"h3.jsx-f28bd670423c9152{font-weight:bold;font-size:18px}h3.jsx-f28bd670423c9152 code{margin-left:6px;margin-right:6px}"})]})}function H4(param){let{children,isCommand}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4",{className:"jsx-78840f56e29ac759 "+((isCommand?"command":"")||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"78840f56e29ac759",children:"h4.jsx-78840f56e29ac759{font-weight:bold;font-size:16px}.command.jsx-78840f56e29ac759{color:#bd10e0;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;font-size:.9em}h4.jsx-78840f56e29ac759 code{margin-left:6px;margin-right:6px}"})]})}function H5(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5",{className:"jsx-ed7f7d0730484ac7",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"ed7f7d0730484ac7",children:"h5.jsx-ed7f7d0730484ac7{font-weight:bold;font-size:15px}h5.jsx-ed7f7d0730484ac7 code{margin-left:6px;margin-right:6px}"})]})}},10251:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{h$:function(){return InternalLink},mj:function(){return GenericLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14517),_components_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2530),_link_module_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44709),_link_module_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_link_module_css__WEBPACK_IMPORTED_MODULE_4__);function GenericLink(props){return!props.href.startsWith("/")||props.href.startsWith("/docs")||props.href.startsWith("/api")?props.href.includes("@")||props.href.startsWith("#")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnchorLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExternalLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InternalLink,{...props})}function InternalLink(param){let{href,as="",children,error=!1,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_link__WEBPACK_IMPORTED_MODULE_2__.r,{as:as,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().link,{[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().error]:error,[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().hoverUnderline]:underlineOnHover}),href:href,children:children})}function AnchorLink(param){let{href,onClick,children,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,onClick:onClick,className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["9da93be90d00fb56",[underlineOnHover?"underline":"none"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"9da93be90d00fb56",dynamic:[underlineOnHover?"underline":"none"],children:`a.__jsx-style-dynamic-selector{text-decoration:none;color:#0070f3;font-size:inherit;cursor:pointer}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:${underlineOnHover?"underline":"none"};-moz-text-decoration:${underlineOnHover?"underline":"none"};text-decoration:${underlineOnHover?"underline":"none"}}`})]})}function ExternalLink(param){let{href,children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,rel:"noopener noreferrer",target:"_blank",className:"jsx-3da361ed9bbc2b1",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"3da361ed9bbc2b1",children:"a.jsx-3da361ed9bbc2b1{text-decoration:none;color:#0070f3;font-size:inherit}a.jsx-3da361ed9bbc2b1:hover{text-decoration:underline}"})]})}},38658:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{LI:function(){return LI},OL:function(){return OL},UL:function(){return UL}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function UL(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"jsx-571896de3ffb79ac",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"571896de3ffb79ac",children:'ul.jsx-571896de3ffb79ac{padding:0;list-style-type:none;margin-left:15px}ul.jsx-571896de3ffb79ac>li::before{content:"-";display:inline-block;color:#999;position:absolute;margin-left:-15px}'})]})}function OL(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol",{className:"jsx-fb2728ad24ced75e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"fb2728ad24ced75e",children:"ol.jsx-fb2728ad24ced75e{padding:0;margin-left:15px}"})]})}function LI(param){let{children,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["d489cf15d2c12258",[fontSize||"14px"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"d489cf15d2c12258",dynamic:[fontSize||"14px"],children:`li.__jsx-style-dynamic-selector{${fontSize||"14px"};line-height:24px;margin-bottom:10px}`})]})}UL.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},OL.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},LI.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}},9476:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:function(){return P}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function P(param){let{className="",children,large,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["250a25f4b2912b42",[fontSize||(large?"18px":"14px")]]])+" "+(className||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"250a25f4b2912b42",dynamic:[fontSize||(large?"18px":"14px")],children:`p.__jsx-style-dynamic-selector{font-weight:400;font-size:${fontSize||(large?"18px":"14px")};line-height:24px}`})]})}function B(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"jsx-4a4877b22e18241e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"4a4877b22e18241e",children:"span.jsx-4a4877b22e18241e{font-weight:600}"})]})}P.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),B.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),P.B=B},73900:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023),_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95933),_components_text_list__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38658),_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9476),_components_text_heading__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(60350),_components_text_link__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10251),_components_image__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(87472);let meta={title:"Core Web Vitals",courseId:"seo",lessonId:"web-performance",stepId:"cls",subtitle:"Cumulative Layout Shift (CLS)"},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_image__WEBPACK_IMPORTED_MODULE_9__.Z,{alt:"Cumulative Layout Shift",oversize:!1,src:"/static/images/learn/seo/cls.png",width:720,height:480}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Cumulative Layout Shift (CLS)"})," metric is a measure of your site’s overall layout stability. A site that unexpectedly shifts layout as the page loads can lead to accidental user error and distraction."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"Cumulative Layout Shift (CLS) occurs when elements have been shifted after initially being rendered by the DOM. Here, a button was rendered to the screen after the text block, causing the block to shift downward. A combination of impact and distance is considered when calculating CLS."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_image__WEBPACK_IMPORTED_MODULE_9__.Z,{alt:"Cumulative Layout Shift Example",oversize:!1,src:"/static/images/learn/seo/cls-example.png",width:1031,height:480,caption:"Elements that shift position when new elements render to screen affect CLS."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"Each element’s individual layout shift score is only counted toward CLS if unexpected movement occurs. If a new element is added to the DOM or an existing element changes size, it doesn’t count toward layout shift if the loaded elements maintain their position."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__.Z,{meta:meta,answers:["FID, CLS, TBT","LCP, FID, CLS","CLS, FID, TBT"],correctAnswer:"LCP, FID, CLS",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_heading__WEBPACK_IMPORTED_MODULE_7__.H3,{children:"Quick Review"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"What are the three Core Web Vitals metrics?"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{width:"100%",padding:"30px 20px",borderRadius:"10px",background:"#F3F3F3"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_heading__WEBPACK_IMPORTED_MODULE_7__.H3,{style:{fontWeight:"bold"},children:"Further Reading"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.UL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Google:  "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://web.dev/cls/",children:"Cumulative Layout Shift Documentation"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_5__.LI,{fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Vercel:  "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_link__WEBPACK_IMPORTED_MODULE_8__.mj,{href:"https://vercel.com/blog/core-web-vitals#cumulative-layout-shift",children:"Blog:  Core Web Vitals - Cumulative Layout Shift"})]})]})]})]})}}MDXContent.isMDXComponent=!0},44709:function(module){module.exports={link:"link_link__8vjBa",error:"link_error__nW_2H",hoverUnderline:"link_hoverUnderline___vgMl"}}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,1324,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=17200)}),_N_E=__webpack_require__.O()}]);