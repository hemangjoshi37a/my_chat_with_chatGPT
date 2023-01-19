(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{49529:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat/[[...chatId]]",function(){return n(1811)}])},1811:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return V},default:function(){return q}});var r=n(61706),a=n(45813),i=n(35250),s=n(91530),o=n.n(s),c=n(61432),u=n(70079),l=n(73925),d=n(62676),h="oai/apps/hasSeenReleaseAnnouncement",f="2023-01-09";function m(e){var t=e.hasSeenOnboardingDate,n=(0,u.useState)(function(){return!Boolean(d.m.getItem("".concat(h,"/").concat(f)))&&!!t&&t<new Date(f)}),r=n[0],a=n[1],s=(0,u.useState)(!1),o=s[0],c=s[1];(0,u.useEffect)(function(){c(!0)},[]);var m=(0,u.useCallback)(function(){d.m.setItem("".concat(h,"/").concat(f),!0),a(!1)},[]);return o?(0,i.jsx)(l.Z,{size:"xs",isOpen:r,onModalClose:m,type:"success",title:"",primaryButton:(0,i.jsx)(l.m,{title:"Sounds good!",color:"primary",onClick:m}),children:(0,i.jsxs)("div",{className:"mb-6 flex flex-col gap-6",children:[(0,i.jsx)("div",{className:"text-gray-800 dark:text-white",children:"Jan 9 version update"}),(0,i.jsx)("div",{className:"text-2xl",children:"Here's what's new"}),(0,i.jsx)("div",{className:"prose text-base dark:prose-invert",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"We made more improvements to the ChatGPT model! It should be generally better across a wide range of topics and has improved factuality."}),(0,i.jsx)("li",{children:"Stop generating: Based on your feedback, we're rolling out the ability to stop generating ChatGPT's response."})]})})]})}):null}var p=n(51334),v=n(44513),x=n(14806),g=n(1454),b=n(34303),y=n(12762),j=n(98943),w=n(39690),_=n(18738);function I(){var e=(0,x.Z)(["prose dark:prose-invert"]);return I=function(){return e},e}function k(){var e=(0,y.WS)(),t=(0,c.useRouter)();(0,u.useEffect)(function(){e(j.s6.rateLimitModalLoaded)},[e]);var n=(0,u.useCallback)(function(){e(j.s6.rateLimitModalActionClicked)},[e]),r=(0,_.t)(function(e){return e.setIsUiRateLimitModalVisible}),a=(0,u.useCallback)(function(){r(!1)},[r]);return(0,i.jsxs)(N,{children:[(0,i.jsxs)("div",{className:"relative mb-5",children:[(0,i.jsx)("h3",{className:"!mt-0 !mb-2 font-normal text-gray-700 dark:text-white",children:(0,i.jsx)("b",{children:"You have exceeded your message limit."})}),(0,i.jsx)("h4",{className:"mb-4 font-normal",children:"In order to offer a high-quality experience, we limit the number of messages you can send in an hour."}),(0,i.jsx)("button",{className:"absolute top-0 right-2 rounded-md",onClick:a,type:"button",children:(0,i.jsx)(g.q5L,{className:"h-5 w-5 hover:bg-gray-50"})})]}),(0,i.jsx)("div",{className:"-mx-4 -mb-4 bg-green-700 px-4 pt-5 pb-4 dark:text-white sm:-m-6 sm:-mb-12 sm:mt-6 sm:px-6 sm:pb-8",children:(0,i.jsxs)("div",{className:"flex flex-row gap-2 sm:gap-4",children:[(0,i.jsx)("div",{className:"text-white",children:"You can increase your hourly limit by helping us review your previous messages."}),(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(w.z,{as:"button",color:"primary-invert",to:"/rate-limit-task",onClick:function(){t.push("/rate-limit"),n()},children:(0,i.jsx)("span",{className:"whitespace-nowrap",children:"Help review"})})})]})})]})}var N=b.Z.div(I()),C=n(49690),S=n(500),Z=n(31501),L=n(61079),M=n(89874),P=n(23221),E=n(80836),O=n(36613);n(24638);var R=function(){return{thread:E.Cv.createTree(),currentLeafId:"root",threadId:null,title:"New chat"}};function T(){return(T=(0,r.Z)(function(e,t,n){var r,i,s;return(0,a.__generator)(this,function(a){switch(a.label){case 0:r=null,a.label=1;case 1:if(a.trys.push([1,4,,5]),!e)return[3,3];return[4,P.ZP.getConversation(e,n,t)];case 2:var o,c,u,l,d;return u=null===(c=Object.values((o=r=a.sent()).mapping).find(function(e){return null===e.parent}))||void 0===c?void 0:c.id,l=new Set,d=new Set,[2,{thread:((o.moderation_results||[]).forEach(function(e){e.blocked?d.add(e.message_id):e.flagged&&l.add(e.message_id)}),i={rootId:u,mapping:Object.keys(o.mapping).reduce(function(e,t){var n,r=o.mapping[t],a=r.parent,i=r.children,s=(0,M.Z)(r,["parent","children"]),c=o.mapping[t].message||E.Cv.createRootMessage();return d.has(c.id)?n=O.sK:l.has(c.id)&&(n=O.Mf),e[t]=(0,Z.Z)((0,L.Z)((0,Z.Z)({},s),{message:c,children:i||[],parentId:a||"",type:E.uV[c.role]}),n&&{metadata:n}),e},{}),currentLeafId:o.current_node}).mapping||E.Cv.createTree(),currentLeafId:i.currentLeafId||i.rootId||"root",threadId:e,title:r.title||null}];case 3:return[3,5];case 4:return s=a.sent(),console.error(s),[3,5];case 5:return[2,R()]}})})).apply(this,arguments)}function D(){return(D=(0,r.Z)(function(e){return(0,a.__generator)(this,function(t){switch(t.label){case 0:return[4,function(e,t,n){return T.apply(this,arguments)}(e,!1)];case 1:return[2,t.sent()]}})})).apply(this,arguments)}var V=!0;function q(e){var t=e.user,n=e.accessToken,r=e.features,a=e.pages,s=e.initialData,d=(0,u.useState)(!1),h=d[0],f=d[1],x=(0,u.useMemo)(function(){return S.TJ},[]),g=(0,c.useRouter)(),b=g.query.force_crosswalk,w=(0,u.useState)(s),I=w[0],N=w[1],Z=(0,_.t)(function(e){return e.isRateLimitFeatureActive}),L=(0,_.t)(function(e){return e.isRateLimitFailing}),M=(0,_.t)(function(e){return e.setIsRateLimitFailing}),P=(0,_.t)(function(e){return e.setIsUiRateLimitModalVisible});(0,u.useEffect)(function(){Z&&b&&(M(!0),P(!0))},[P,M,Z,b,]);var E=(0,v.PV)(x.id).getHasSeenOnboardingDate,O=(0,u.useMemo)(function(){return{app:j.VY,origin:"chat"}},[]);(0,C.Z)("ChatGPT",t,n,O),(0,u.useEffect)(function(){f(!E())},[E]),(0,u.useEffect)(function(){var e,t=null===(e=g.query.chatId)||void 0===e?void 0:e[0];t!==I.threadId&&(t?(function(e){return D.apply(this,arguments)})(t).then(function(e){return e&&N(e)}):N(R()))},[n,s.threadId,g.query.chatId,null==I?void 0:I.threadId,]);var T=(0,_.t)(function(e){return e.isUiRateLimitModalVisible});return(0,i.jsx)(S.yP.Provider,{value:x,children:(0,i.jsxs)(y.Af.Provider,{value:O,children:[Z&&L&&(0,i.jsx)(l.Z,{size:"medium",isOpen:T,onModalClose:o(),type:"success",children:(0,i.jsx)(k,{})}),(0,i.jsx)(l.Z,{isOpen:h,onModalClose:o(),type:"success",title:"",primaryButton:void 0,children:(0,i.jsx)(v.ZP,{onClose:function(){return f(!1)}})}),(0,i.jsx)(m,{hasSeenOnboardingDate:E()}),(0,i.jsx)(p.Z,{contextName:"proxy",initialData:I,features:new Set(r),pages:a},I.threadId)]})})}}},function(e){e.O(0,[861,741,246,798,938,424,531,42,221,650,787,774,888,179],function(){return e(e.s=49529)}),_N_E=e.O()}]);