import type { InferGetStaticPropsType } from "next";

import { Gallery } from "@/components/gallery/Gallery";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import { getWorks } from "@/utils/contentful";

export async function getStaticProps() {
	const works = await getWorks();
	return { props: { works: works.items } };
}

type WorksProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Works({ works }: WorksProps) {
	return (
		<Layout>
			<Seo title="Munkáink" />
			<Separator>Munkáink</Separator>
			<Gallery works={works} />
		</Layout>
	);
}
