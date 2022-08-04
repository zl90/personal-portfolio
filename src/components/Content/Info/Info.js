import Quote from "./Quote/Quote";
import Subtitle from "./Subtitle/Subtitle";
import Title from "./Title/Title";

function Info() {
  return (
    <section className="info-container">
      <Title />
      <Subtitle />
      <Quote />
    </section>
  );
}

export default Info;
