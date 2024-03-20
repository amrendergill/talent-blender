import Head from "next/head";

export default function Seo({ title, name, description }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name={name}
          content={description}
        />

      </Head>
    </>
  );
}
