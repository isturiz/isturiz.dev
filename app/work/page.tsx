export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Work experience</p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Damex.io</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Developer
        </p>
        <ul>
          <li>
            Improving project structure and implementing best practices in the
            company.
          </li>
          <li>Code refactoring to enable application scalability.</li>
        </ul>
      </div>
    </section>
  );
}
