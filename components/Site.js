import Link from "next/link";
export const CONTACT = { email: "Tomas1995aa@gmail.com", phone: "+34 663 378373 ", whatsapp: "https://wa.me/306940702320" }; // TODO: replace
const links=[["/about","About"],["/services","Services"],["/coverage","Coverage"],["/insights","Insights"],["/contact","Contact"]];
export function Header(){return(<header><div className="w"><Link className="brand" href="/">Tomas Avaro Acosta OBC</Link><nav>{links.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</nav></div></header>)}
export function Footer(){return(<footer><div className="w">© {new Date().getFullYear()} Tomas Avaro Acosta OBC · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a> · <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></div></footer>)}
export function Page({title,lead,children}){return(<main className="w sec"><h1>{title}</h1>{lead&&<p className="mut" style={{fontSize:18,maxWidth:680}}>{lead}</p>}{children}</main>)}
