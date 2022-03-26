import clsx from "clsx";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

export type ImageDisplayProps = {
	author: string;
	title: string;
	imageData: ImageDataLike;
	index: number;
	length: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
	openModal: () => void;
};

export function ImageDisplay({
	author,
	title,
	imageData,
	index,
	length,
	setActiveIndex,
	openModal,
}: ImageDisplayProps) {
	const image = getImage(imageData);

	return (
		<figure
			key={title + author}
			className={clsx("relative flex flex-col", "p-3 2xl:p-8 md:p-4 xl:p-6")}
		>
			<button
				type="button"
				className="group rounded-lg shadow-darker"
				onClick={() => {
					setActiveIndex(index);
					openModal();
				}}
			>
				<div className="rounded-t-lg overflow-hidden">
					{image && (
						<GatsbyImage
							image={image}
							alt={title}
							className={clsx(
								"w-full",
								"transform-gpu group-hover:scale-105 transition duration-300 ease-in-out",
							)}
						/>
					)}
				</div>

				<figcaption className="p-4 bg-blueGray-900 rounded-b-lg shadow-darker">
					<h4 className="pb-3 text-white text-lg">{title}</h4>
					<h5 className="text-gray-400 text-sm">{author}</h5>
				</figcaption>
			</button>
		</figure>
	);
}
