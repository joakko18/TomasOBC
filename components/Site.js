import Link from "next/link";
export const CONTACT = { email: "contact@example.com", phone: "+00 000 000 000", whatsapp: "https://wa.me/0000000000" }; // TODO: replace
const links=[["/about","About"],["/services","Services"],["/coverage","Coverage"],["/insights","Insights"],["/contact","Contact"]];
export function Header(){return(<header><div className="w"><Link className="brand" href="/">Tomas Avaro Acosta OBC</Link><nav>{links.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</nav></div></header>)}
export function Footer(){return(<footer><div className="w">© {new Date().getFullYear()} Tomas Avaro Acosta OBC · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · {CONTACT.phone}</div></footer>)}
export function Page({title,lead,children}){return(<main className="w sec"><h1>{title}</h1>{lead&&<p className="mut" style={{fontSize:18,maxWidth:680}}>{lead}</p>}{children}</main>)}
