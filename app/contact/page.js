import {Page,CONTACT} from "../../components/Site";import ContactForm from "../../components/ContactForm";
export const metadata={title:"Contact | Tomas Avaro Acosta"};
export default function Contact(){return(<Page title="Request assistance" lead="Tell me about your shipment and timeline.">
<div className="card urgent" id="urgent"><h3>Urgent inquiry</h3><p>For same-day needs, message directly: <a href={CONTACT.whatsapp}>WhatsApp</a> or call {CONTACT.phone}.</p></div>
<h2>Business inquiry</h2><ContactForm/>
<h2>Direct contact</h2><p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br/>{CONTACT.phone}</p></Page>)}
