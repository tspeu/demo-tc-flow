import{Ba as c,Ka as s,Vc as v,aa as f,ea as i,i as y,na as u,xb as a}from"./chunk-KVLKPACU.js";function g(r){r||(c(g),r=u(s));let e=new y(t=>r.onDestroy(t.next.bind(t)));return t=>t.pipe(f(e))}function h(r,e){let t=!e?.manualCleanup;t&&!e?.injector&&c(h);let d=t?e?.injector?.get(s)??u(s):null,l=p(e?.equal),o;e?.requireSync?o=a({kind:0},{equal:l}):o=a({kind:1,value:e?.initialValue},{equal:l});let b=r.subscribe({next:n=>o.set({kind:1,value:n}),error:n=>{if(e?.rejectErrors)throw n;o.set({kind:2,error:n})}});if(e?.requireSync&&o().kind===0)throw new i(601,!1);return d?.onDestroy(b.unsubscribe.bind(b)),v(()=>{let n=o();switch(n.kind){case 1:return n.value;case 2:throw n.error;case 0:throw new i(601,!1)}},{equal:e?.equal})}function p(r=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&r(e.value,t.value)}export{g as a,h as b};
