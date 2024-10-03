import{P as e,b as n,t,a as i,c as r,S as o,T as a,s,u}from"./solana.js";const c=new e("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");new e("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");const l=new e("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");new e("So11111111111111111111111111111111111111112"),new e("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");const f=(d=8,e=>{const o=n(d,e),{encode:a,decode:s}=(e=>({decode:e.decode.bind(e),encode:e.encode.bind(e)}))(o),u=o;return u.decode=(e,n)=>{const r=s(e,n);return t(i.Buffer.from(r))},u.encode=(e,n,t)=>{const i=r(e,d);return a(i,n,t)},u});var d,m,p;function h(e,n,t,r,s=c,u=l){return function(e,n,t,i,r,s=c,u=l){const f=[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:o.programId,isSigner:!1,isWritable:!1},{pubkey:s,isSigner:!1,isWritable:!1}];return new a({keys:f,programId:u,data:r})}(e,n,t,r,i.Buffer.alloc(0),s,u)}(p=m||(m={}))[p.InitializeMint=0]="InitializeMint",p[p.InitializeAccount=1]="InitializeAccount",p[p.InitializeMultisig=2]="InitializeMultisig",p[p.Transfer=3]="Transfer",p[p.Approve=4]="Approve",p[p.Revoke=5]="Revoke",p[p.SetAuthority=6]="SetAuthority",p[p.MintTo=7]="MintTo",p[p.Burn=8]="Burn",p[p.CloseAccount=9]="CloseAccount",p[p.FreezeAccount=10]="FreezeAccount",p[p.ThawAccount=11]="ThawAccount",p[p.TransferChecked=12]="TransferChecked",p[p.ApproveChecked=13]="ApproveChecked",p[p.MintToChecked=14]="MintToChecked",p[p.BurnChecked=15]="BurnChecked",p[p.InitializeAccount2=16]="InitializeAccount2",p[p.SyncNative=17]="SyncNative",p[p.InitializeAccount3=18]="InitializeAccount3",p[p.InitializeMultisig2=19]="InitializeMultisig2",p[p.InitializeMint2=20]="InitializeMint2",p[p.GetAccountDataSize=21]="GetAccountDataSize",p[p.InitializeImmutableOwner=22]="InitializeImmutableOwner",p[p.AmountToUiAmount=23]="AmountToUiAmount",p[p.UiAmountToAmount=24]="UiAmountToAmount",p[p.InitializeMintCloseAuthority=25]="InitializeMintCloseAuthority",p[p.TransferFeeExtension=26]="TransferFeeExtension",p[p.ConfidentialTransferExtension=27]="ConfidentialTransferExtension",p[p.DefaultAccountStateExtension=28]="DefaultAccountStateExtension",p[p.Reallocate=29]="Reallocate",p[p.MemoTransferExtension=30]="MemoTransferExtension",p[p.CreateNativeMint=31]="CreateNativeMint",p[p.InitializeNonTransferableMint=32]="InitializeNonTransferableMint",p[p.InterestBearingMintExtension=33]="InterestBearingMintExtension",p[p.CpiGuardExtension=34]="CpiGuardExtension",p[p.InitializePermanentDelegate=35]="InitializePermanentDelegate",p[p.TransferHookExtension=36]="TransferHookExtension",p[p.MetadataPointerExtension=39]="MetadataPointerExtension";const b=s([u("instruction"),f("amount")]);function T(n,t,r,o,s=[],u=c){const l=function(n,t,i){if(i.length){n.push({pubkey:t,isSigner:!1,isWritable:!1});for(const t of i)n.push({pubkey:t instanceof e?t:t.publicKey,isSigner:!0,isWritable:!1})}else n.push({pubkey:t,isSigner:!0,isWritable:!1});return n}([{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],r,s),f=i.Buffer.alloc(b.span);return b.encode({instruction:m.Transfer,amount:BigInt(o)},f),new a({keys:l,programId:u,data:f})}const g="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function w(){throw new Error("setTimeout has not been defined")}function A(){throw new Error("clearTimeout has not been defined")}var y=w,k=A;function v(e){if(y===setTimeout)return setTimeout(e,0);if((y===w||!y)&&setTimeout)return y=setTimeout,setTimeout(e,0);try{return y(e,0)}catch(n){try{return y.call(null,e,0)}catch(t){return y.call(this,e,0)}}}"function"==typeof g.setTimeout&&(y=setTimeout),"function"==typeof g.clearTimeout&&(k=clearTimeout);var I,z=[],M=!1,E=-1;function S(){M&&I&&(M=!1,I.length?z=I.concat(z):E=-1,z.length&&C())}function C(){if(!M){var e=v(S);M=!0;for(var n=z.length;n;){for(I=z,z=[];++E<n;)I&&I[E].run();E=-1,n=z.length}I=null,M=!1,function(e){if(k===clearTimeout)return clearTimeout(e);if((k===A||!k)&&clearTimeout)return k=clearTimeout,clearTimeout(e);try{return k(e)}catch(n){try{return k.call(null,e)}catch(t){return k.call(this,e)}}}(e)}}function x(e,n){this.fun=e,this.array=n}x.prototype.run=function(){this.fun.apply(null,this.array)};function N(){}var B=N,W=N,P=N,D=N,L=N,G=N,F=N;var H=g.performance||{},U=H.now||H.mozNow||H.msNow||H.oNow||H.webkitNow||function(){return(new Date).getTime()};var R=new Date;var V={nextTick:function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];z.push(new x(e,n)),1!==z.length||M||v(C)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:B,addListener:W,once:P,off:D,removeListener:L,removeAllListeners:G,emit:F,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var n=.001*U.call(H),t=Math.floor(n),i=Math.floor(n%1*1e9);return e&&(t-=e[0],(i-=e[1])<0&&(t--,i+=1e9)),[t,i]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-R)/1e3}};export{l as A,c as T,T as a,V as b,h as c,g};