"use client";
import {useState} from "react";
export default function ContactForm(){
const [st,setSt]=useState("idle");
async function submit(e){e.preventDefault();setSt("sending");
const d=Object.fromEntries(new FormData(e.target));
try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});
if(!r.ok)throw 0;setSt("ok");e.target.reset()}catch{setSt("err")}}
return(<form onSubmit={submit}>
<div><label>Name<input name="name" required/></label></div>
<div><label>Company<input name="company"/></label></div>
<div><label>Email<input type="email" name="email" required/></label></div>
<div><label>Inquiry type<select name="type"><option>OBC assignment</option><option>Urgent shipment</option><option>Hand-carry</option><option>Other</option></select></label></div>
<div><label>Origin → Destination<input name="route"/></label></div>
<div><label>Deadline<input name="deadline"/></label></div>
<div><label>Details<textarea name="message" rows="5" required/></label></div>
<input name="website" tabIndex="-1" autoComplete="off" style={{display:"none"}}/>
<button className="btn" disabled={st==="sending"}>{st==="sending"?"Sending…":"Send inquiry"}</button>
{st==="ok"&&<p>Thank you. Your inquiry was sent.</p>}{st==="err"&&<p>Something went wrong. Please email directly.</p>}
</form>)}
