import {Page} from "../../components/Site";

export const metadata = {
  title: "About | Tomas Avaro Acosta"
};

export default function About() {
  return (
    <Page
      title="Professional profile"
      lead="An internationally experienced On-Board Courier committed to delivering reliable, flexible and professional support for time-critical logistics operations worldwide."
    >
      <h2>Background & experience</h2>
      <p>
        With over four years of experience in the On-Board Courier industry,
        I bring international travel experience, adaptability and a strong
        sense of responsibility to time-critical logistics operations.
        Having travelled across all continents, I am familiar with the
        demands of international assignments and different travel
        environments. My dual citizenship, valid visas and ability to
        communicate in two languages provide additional flexibility when
        supporting international missions. I also maintain local connections
        and have my own van, enabling me to support first- and last-mile
        transportation requirements when needed.
      </p>

      <h2>Approach to assignments</h2>
      <p>
        Every assignment is approached with careful planning, professionalism
        and a strong commitment to reliability. I prioritise clear communication
        with brokers, follow operational instructions closely and provide
        timely updates throughout each mission. Particular attention is given
        to shipment custody, documentation and handover procedures, ensuring
        that every stage is handled responsibly. I understand the importance
        of deadlines in time-critical logistics and remain focused on delivering
        a dependable and efficient service.
      </p>

      <h2>Why partners trust me</h2>
      <div className="grid">
        {[
          {
            title: "Clear communication",
            proof:
              "Responsive coordination and timely updates, keeping brokers informed throughout every assignment."
          },
          {
            title: "Careful custody",
            proof:
              "A responsible approach to shipment handling, with close attention to instructions, security and delivery requirements."
          },
          {
            title: "Documented handovers",
            proof:
              "Attention to delivery documentation and handover procedures, supporting transparency and accountability at every stage."
          }
        ].map((t) => (
          <div className="card" key={t.title}>
            <h3>{t.title}</h3>
            <p className="mut">{t.proof}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}



