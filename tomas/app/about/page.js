import {Page} from "../../components/Site";
export const metadata={title:"About | Tomas Avaro Acosta"};
export default function About(){return(<Page title="Professional profile" lead="[One-sentence summary of your career in logistics and courier work.]">
<h2>Background & experience</h2><p>[Years of experience, industries served, notable types of assignments. Add only what you can verify.]</p>
<h2>Approach to assignments</h2><p>[How you plan, communicate, handle documentation, and keep the client updated.]</p>
<h2>Why partners trust me</h2><div className="grid">{["Clear communication","Careful custody","Documented handovers"].map(t=><div className="card" key={t}><h3>{t}</h3><p className="mut">[Short proof point.]</p></div>)}</div></Page>)}
