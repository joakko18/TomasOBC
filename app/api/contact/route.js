import {NextResponse} from "next/server";
export async function POST(req){
const d=await req.json().catch(()=>null);
if(!d||d.website||!d.name||!d.email||!d.message||!/^\S+@\S+\.\S+$/.test(d.email))return NextResponse.json({ok:false},{status:400});
const text=Object.entries(d).map(([k,v])=>`${k}: ${v}`).join("\n");
const key=process.env.RESEND_API_KEY;
if(key){const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
body:JSON.stringify({from:process.env.MAIL_FROM,to:process.env.MAIL_TO,subject:`New inquiry: ${d.type||"General"}`,text,reply_to:d.email})});
if(!r.ok)return NextResponse.json({ok:false},{status:502})}else console.log("Inquiry (no email provider set):\n"+text);
return NextResponse.json({ok:true})}
