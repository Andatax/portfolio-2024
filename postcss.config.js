import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssPurgecss from "@fullhuman/postcss-purgecss";

export default {
	plugins: [
		tailwindcss(),
		autoprefixer(),
		cssnano({
			preset: "default",
		}),
		postcssPurgecss({
			content: ["./src/**/*.jsx", "./*.html"],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
		}),
	],
};
