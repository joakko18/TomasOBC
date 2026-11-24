import Link from "next/link";
const caps=[["On-Board Courier (OBC)","Personal escort of your shipment on the flight, from handover to delivery."],["Urgent shipments","Rapid-response movement of time-critical items when freight is too slow."],["Hand-carry","Door-to-door personal custody for sensitive or high-value items."]];
export default function Home(){return(<>
<section className="w sec"><p className="mut">On-Board Courier · Time-Critical Logistics · Barcelona el Prat Airport</p>
<h1>Your urgent shipment, personally accompanied from origin to destination.</h1>
<p className="mut" style={{fontSize:18,maxWidth:640}}>
  Supporting OBC brokers, logistics partners and direct customers worldwide with reliable, personally managed time-critical courier services. Combining international experience, travel flexibility and a responsible approach to every assignment, I focus on clear communication, careful shipment handling and dependable delivery.
</p>
<p><Link className="btn" href="/contact">Request assistance</Link>{" "}<Link className="btn o" href="/services">View services</Link></p></section>
<section className="w"><div className="grid">{caps.map(([t,d])=><div className="card" key={t}><h3>{t}</h3><p className="mut">{d}</p></div>)}</div></section>
<section className="w sec"><h2 style={{marginTop:0}}>Global coverage</h2><p className="mut">Departures and destinations are assessed per assignment. <Link href="/coverage">See operational capabilities</Link>.</p>
<div className="card urgent"><h3>Need to move something today?</h3><p>Send the essentials and receive a response as quickly as possible.</p><Link className="btn" href="/contact#urgent">Urgent inquiry</Link></div></section></>)}
