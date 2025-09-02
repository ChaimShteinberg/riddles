function FormSection(props: { label: string; id: string; type: string }) {
  return (
    <section>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} required />
    </section>
  );
}

export default FormSection;
