_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"5l8Q":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var c=n("nKUr"),l=n("q1tI"),a=n("m/eG"),s=n("wHSu"),r=n("IP2g"),d=n("9bat"),i=n("upOX"),o=function(e){var t=e.probeId,n=e.alert,s=e.defaultChecked,r=e.disabled,i=Object(l.useContext)(d.a).handleUpdateProbeResponseTimeAlert,o=Object(l.useState)(0),u=o[0],b=o[1],j=Object(l.useState)(!0),x=j[0],h=j[1];Object(l.useEffect)((function(){if(n){var e=function(e){var t=e.match(/(\d+)-(m?s)$/);if(!t)throw new Error("alert string does not contain valid time number");var n=Number(t[1]);return"s"===t[2]?1e3*n:n}(n);b(e)}}),[n]);var f=function(e,t,n){b(t),h(n),i(e,t,n)};return Object(c.jsx)(a.b,{name:"probe_".concat(t,"_response_time"),value:"response-time",help:"Response time is longer than xxx milliseconds",defaultChecked:s,checked:!0,disabled:r,onChange:function(e){return f(t,u,e.target.checked)},children:Object(c.jsxs)("div",{className:"flex flex-row align-middle items-center space-x-4",children:[Object(c.jsx)("span",{children:"Response time is longer than"}),Object(c.jsx)(a.l,{id:"probe_".concat(t,"_response_time_value"),type:"number",placeholder:"2000",className:"w-full md:w-64",value:u,disabled:!x,onChange:function(e){return f(t,e.target.valueAsNumber,x)}}),Object(c.jsx)("span",{children:"milliseconds"})]})})},u=function(e){var t=e.probeId,n=Object(l.useContext)(d.a).handleUpdateProbeData,s=Object(l.useState)(5),r=s[0],i=s[1];return Object(c.jsx)(a.l,{id:"probe_".concat(t,"_threshold"),type:"number",placeholder:"5",value:r,className:"w-full md:w-64",onChange:function(e){return c=e.target.value,i(parseInt(c,10)),n({id:t,field:"incidentThreshold",value:c}),void n({id:t,field:"recoveryThreshold",value:c});var c}})},b=function(e){var t=e.probeId,n=e.request,i=e.requestIndex,o=e.requestArray,u=Object(l.useContext)(d.a),b=u.handleAddProbeRequestHeader,j=u.handleUpdateProbeRequestPosition,x=u.handleUpdateProbeRequestData,h=u.handleUpdateProbeRequestBody,f=u.handleUpdateProbeRequestEnableBody,m=u.handleUpdateProbeRequestHeaderKey,p=u.handleUpdateProbeRequestHeaderValue,v=u.handleRemoveProbeRequestHeader,O=u.handleRemoveProbeRequest,N=function(e){try{return!!JSON.parse(e)}catch(t){return!1}};return Object(c.jsxs)("div",{className:"w-full p-8 rounded-md bg-gray-100 border border-solid border-gray-300 space-y-8",children:[Object(c.jsxs)("div",{className:"flex flex-row align-middle justify-between",children:[Object(c.jsxs)("div",{className:"flex align-middle",children:["#",i+1]}),Object(c.jsxs)("div",{className:"flex align-middle space-x-4",children:[0!==i&&Object(c.jsx)("button",{type:"button",onClick:function(){return j(t,i,i-1)},children:Object(c.jsx)(r.a,{icon:s.b})}),i!==o.length-1&&Object(c.jsx)("button",{type:"button",onClick:function(){return j(t,i,i+1)},children:Object(c.jsx)(r.a,{icon:s.a})}),o.length>1&&Object(c.jsx)("button",{type:"button",onClick:function(){return O(t,i)},children:Object(c.jsx)(r.a,{icon:s.f})})]})]}),Object(c.jsxs)("div",{className:"flex flex-row space-x-8",children:[Object(c.jsx)("div",{className:"w-8/12",children:Object(c.jsx)(a.l,{id:"probe_".concat(t,"_request_").concat(i,"_url"),placeholder:"https://github.com",value:n.url,onChange:function(e){return x({id:t,index:i,field:"url",value:e.target.value})}})}),Object(c.jsx)("div",{className:"w-4/12",children:Object(c.jsxs)(a.i,{id:"probe_".concat(t,"_method"),value:n.method,onChange:function(e){return x({id:t,index:i,field:"method",value:e.target.value})},children:[Object(c.jsx)(a.j,{value:"GET",children:"GET"}),Object(c.jsx)(a.j,{value:"POST",children:"POST"}),Object(c.jsx)(a.j,{value:"PUT",children:"PUT"}),Object(c.jsx)(a.j,{value:"PATCH",children:"PATCH"}),Object(c.jsx)(a.j,{value:"DELETE",children:"DELETE"}),Object(c.jsx)(a.j,{value:"OPTIONS",children:"OPTIONS"}),Object(c.jsx)(a.j,{value:"HEAD",children:"HEAD"})]})})]}),Object(c.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(c.jsx)("p",{children:"Headers"}),n.headers&&Object.keys(n.headers).map((function(e,l){return Object(c.jsxs)("div",{className:"flex flex-row space-x-8",children:[Object(c.jsx)(a.l,{id:"probe_".concat(t,"_request_").concat(i,"_headers_").concat(l),value:e,onChange:function(e){return m(t,i,l,e.target.value)}}),Object(c.jsx)(a.l,{id:"probe_".concat(t,"_request_").concat(i,"_headers_").concat(l,"_value"),value:n.headers[e],onChange:function(e){return p(t,i,l,e.target.value)}}),Object(c.jsx)("button",{type:"button",onClick:function(){return v(t,l)},children:Object(c.jsx)(r.a,{icon:s.f})})]},l)})),Object(c.jsx)("button",{type:"button",onClick:function(){return b(t,i)},className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add header"})})]}),Object(c.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(c.jsxs)("div",{className:"flex items-center space-x-8 flex-row",children:[Object(c.jsx)("p",{children:"Body"}),Object(c.jsx)("div",{className:"w-full sm:w-3/12",children:Object(c.jsxs)(a.i,{id:"probe_".concat(t,"_content_type"),onChange:function(e){return f(t,i,e.target.value)},defaultValue:N(JSON.stringify(null===n||void 0===n?void 0:n.body))?"JSON":"No Body",children:[Object(c.jsx)(a.j,{value:"No Body",children:"No Body"}),Object(c.jsx)(a.j,{value:"JSON",children:"JSON"})]})})]}),N(JSON.stringify(null===n||void 0===n?void 0:n.body))&&Object(c.jsx)(a.m,{placeholder:"{ }",id:"probe_".concat(t,"_body"),onBlur:function(e){return function(e){try{JSON.parse(e)}catch(t){alert(t)}}(e.target.value)},value:JSON.stringify(n.body,null,2),onChange:function(e){return h({id:t,index:i,field:"body",value:e.target.value})},rows:5}),Object(c.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-8",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Timeout"}),Object(c.jsx)(a.l,{id:"probe_".concat(t,"_timeout"),type:"number",placeholder:"10",min:1,value:n.timeout,className:"w-full md:w-64",onChange:function(e){x({id:t,index:i,field:"timeout",value:e.target.value})}}),Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"milliseconds"})]})]})]})},j=function(e){var t,n,j,x,h,f=e.probe,m=e.id,p=Object(l.useContext)(d.a),v=p.probeData,O=p.handleAddProbeRequest,N=p.handleUpdateProbeData,g=p.handleUpdateProbeAlert,y=p.handleRemoveProbe,w=function(e){return f.alerts.filter((function(t){return t.includes(e)})).length>0};return Object(c.jsxs)("div",{className:"border border-solid rounded-md mb-8",children:[Object(c.jsxs)("div",{className:"flex flex-row items-center justify-between p-4 bg-gray-50 border-b",children:[Object(c.jsxs)("p",{children:["Probe ID : ",null===m||void 0===m?void 0:m.split("-")[0]]}),v.length>1&&Object(c.jsx)("button",{onClick:function(){return y(m)},children:Object(c.jsx)(r.a,{icon:s.f})})]}),Object(c.jsx)("div",{className:"p-4 ",children:Object(c.jsx)("form",{children:Object(c.jsx)("fieldset",{children:Object(c.jsxs)("div",{className:"space-y-8 flex flex-col",children:[Object(c.jsx)(a.l,{label:"Name",id:"probe_".concat(m,"_name"),placeholder:"Home Page Probe",className:"w-full md:w-6/12",onChange:function(e){N({id:m,field:"name",value:e.target.value})},value:f.name}),Object(c.jsx)(a.l,{label:"Description",id:"probe_".concat(m,"_description"),placeholder:"Probe for Checking Home Page Downtime",className:"w-full md:w-6/12",onChange:function(e){N({id:m,field:"description",value:e.target.value})},value:f.description}),Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Requests"}),f.requests.map((function(e,t,n){return Object(c.jsx)(b,{probeId:m,request:e,requestIndex:t,requestArray:n},t)})),Object(c.jsx)("button",{type:"button",onClick:function(){return O(m)},className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add another request"})}),Object(c.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(c.jsx)("p",{className:"font-bold text-sm sm:text-lg",children:"Advanced"}),Object(c.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-8",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Interval"}),Object(c.jsx)(a.l,{id:"probe_".concat(m,"_interval"),type:"number",placeholder:"10",value:f.interval,className:"w-full md:w-64",onChange:function(e){N({id:m,field:"interval",value:e.target.value})}}),Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"seconds"})]}),Object(c.jsxs)("div",{className:"flex flex-col space-y-4 space-x-4",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Notify on (min. 1):"}),Object(c.jsx)(i.a,{name:"probe_".concat(m,"_status_not_2xx"),value:"status-not-2xx",disabled:(null===(t=f.alerts)||void 0===t?void 0:t.length)<2&&w("status-not-2xx"),help:"Checks if status code is not 2xx (200-204)",defaultChecked:!(null===f||void 0===f||null===(n=f.alerts)||void 0===n||!n.find((function(e){return"status-not-2xx"===e}))),onChange:function(e){return g(m,"status-not-2xx",e.target.checked)},children:"Status Code not 2XX (Not Success)"}),Object(c.jsx)(o,{probeId:m,alert:null===f||void 0===f||null===(j=f.alerts)||void 0===j?void 0:j.find((function(e){return e.includes("response-time-greater-than-")})),disabled:(null===(x=f.alerts)||void 0===x?void 0:x.length)<2&&w("response-time-greater-than"),defaultChecked:!(null===f||void 0===f||null===(h=f.alerts)||void 0===h||!h.find((function(e){return e.includes("response-time-greater-than-")})))})]}),Object(c.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-8",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Threshold"}),Object(c.jsx)(u,{probeId:m})]})]})]},m)})})})]})},x=n("ukxq"),h=n("qIcA"),f=function(e){var t,n,d=e.id,i=e.type,o=Object(l.useContext)(x.a),u=o.notificationData,b=o.handleUpdateNotificationType,j=o.handleUpdateNotificationData,f=o.handleRemoveNotification;return Object(c.jsxs)("div",{className:"border border-solid rounded-md mb-8",children:[Object(c.jsxs)("div",{className:"flex flex-row items-center justify-between p-4 bg-gray-50 border-b",children:[Object(c.jsxs)("p",{children:["Notification ID : ",d.split("-")[0]]}),u.length>1&&Object(c.jsx)("button",{onClick:function(){return f(d)},children:Object(c.jsx)(r.a,{icon:s.f})})]}),Object(c.jsxs)("div",{className:"p-4 md:w-8/12 lg:w-6/12",children:[Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsx)(a.i,{label:"Type",value:null===(t=u.find((function(e){return e.id===d})))||void 0===t?void 0:t.type,onChange:function(e){b({id:d,type:e.target.value})},children:h.a.map((function(e){return Object(c.jsx)(a.j,{value:e.name,children:e.label},e.name)}))})}),Object(c.jsx)("form",{children:Object(c.jsx)("fieldset",{children:null===h.a||void 0===h.a||null===(n=h.a.find((function(e){return e.name===i})))||void 0===n?void 0:n.fields.map((function(e){var t,n=null===(t=u.find((function(e){return e.id===d})))||void 0===t?void 0:t.data;return Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsx)(a.l,{id:e.name,label:e.label,defaultValue:n[e.name],onChange:function(t){j({id:d,field:e.name,value:t.target.value})}})},e.name)}))})})]})]})};function m(){var e=Object(l.useContext)(x.a),t=e.notificationData,n=e.handleAddNotification,s=Object(l.useContext)(d.a),r=s.probeData,i=s.handleAddProbe,o=Object(l.useState)(!1),u=o[0],b=o[1],h=Object(l.useState)("Probe"),m=h[0],p=h[1];return Object(c.jsxs)(a.g,{children:[Object(c.jsxs)("div",{className:"mb-5 flex justify-end",children:[Object(c.jsx)(a.a,{onClick:function(){return b(!0)},children:"Generate Config File"}),Object(c.jsx)(a.e,{visible:u,onClose:function(){return b(!1)}})]}),Object(c.jsxs)("div",{className:"flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-8",children:[Object(c.jsx)("div",{className:"w-full md:w-3/12",children:Object(c.jsx)(a.k,{menu:["Probe","Notification"],activeMenu:m,onMenuChange:function(e,t){return function(e,t){e.preventDefault(),p(t)}(e,t)}})}),Object(c.jsx)("div",{className:"w-full md:w-9/12",children:"Notification"===m?Object(c.jsxs)("div",{children:[t.map((function(e){return Object(c.jsx)(f,{id:e.id,type:e.type},e.id)})),Object(c.jsx)("button",{onClick:n,className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add another notification"})})]}):"Probe"===m?Object(c.jsxs)("div",{children:[r.map((function(e){return Object(c.jsx)(j,{probe:e,id:e.id},e.id)})),Object(c.jsx)("button",{onClick:i,className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add another probe"})})]}):Object(c.jsx)(c.Fragment,{children:"Nothing to render"})})]})]})}},Lqna:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced",function(){return n("5l8Q")}])}},[["Lqna",0,2,6,5,1,3,4]]]);