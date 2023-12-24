const CardSection = ({ children, title }) => {
  return (
    <article className="w-full px-24">
      <br />
      <h1 className="bg-slate-400 font-rubik-doodle text-3xl p-3 text-center">{title}</h1>
      <section className="flex flex-wrap justify-center align-middle gap-4 my-8">{children}</section>
    </article>
  );
};

export default CardSection;
