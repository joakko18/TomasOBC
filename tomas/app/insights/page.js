import {Page} from "../../components/Site";
export const metadata={title:"Insights | Tomas Avaro Acosta"};
const posts=[["What is an OBC shipment, and when does it make sense?","A plain-language explanation of on-board courier service versus standard air freight."],["Customs and documentation for hand-carried goods","Common pitfalls and how to prepare paperwork in advance."],["Planning for time-critical logistics","How to brief a courier so nothing is lost on a tight deadline."]];
export default function Insights(){return(<Page title="Insights" lead="Practical notes on time-critical logistics."><div className="grid">{posts.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p className="mut">{d}</p><span className="mut">Coming soon</span></article>)}</div></Page>)}
