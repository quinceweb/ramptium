export type Currency='USD'|'EUR'|'THB'|'SGD';
export type Holding={id:string;symbol:string;name:string;quantity:number;price:number;currency:Currency;assetClass:'Equity'|'Fixed income'|'Cash'};
export type RateTable=Record<Currency,number>;
// Explicitly synthetic fixture data. USD rates are illustrative, not market quotes.
export const sampleRates:RateTable={USD:1,EUR:1.1,THB:0.028,SGD:0.75};
export const sampleHoldings:Holding[]=[
{id:'h1',symbol:'DEMO-A',name:'Illustrative Global Equity',quantity:120,price:145,currency:'USD',assetClass:'Equity'},
{id:'h2',symbol:'DEMO-B',name:'Illustrative European Bond',quantity:90,price:105,currency:'EUR',assetClass:'Fixed income'},
{id:'h3',symbol:'DEMO-C',name:'Illustrative Thai Equity',quantity:1500,price:42,currency:'THB',assetClass:'Equity'},
{id:'h4',symbol:'DEMO-D',name:'Illustrative Cash Balance',quantity:8000,price:1,currency:'SGD',assetClass:'Cash'}
];
export function validateHolding(h:Holding):boolean{return Boolean(h.id&&h.symbol&&h.name)&&Number.isFinite(h.quantity)&&h.quantity>=0&&Number.isFinite(h.price)&&h.price>=0;}
export function valueUSD(h:Holding,rates:RateTable):number{if(!validateHolding(h)||!Number.isFinite(rates[h.currency])||rates[h.currency]<=0)throw new Error('Invalid holding or conversion rate');return h.quantity*h.price*rates[h.currency];}
export function summarize(holdings:Holding[],rates:RateTable){const totals:Record<Holding['assetClass'],number>={Equity:0,'Fixed income':0,Cash:0};let total=0;for(const h of holdings){const value=valueUSD(h,rates);totals[h.assetClass]+=value;total+=value;}return {total,totals,weights:Object.fromEntries(Object.entries(totals).map(([k,v])=>[k,total?100*v/total:0]))};}
