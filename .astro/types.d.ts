declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"perfiles": {
"diana-fabre-y-tia-cayita.mdx": {
  id: "diana-fabre-y-tia-cayita.mdx",
  slug: "diana-fabre-y-tia-cayita",
  body: string,
  collection: "perfiles",
  data: InferEntrySchema<"perfiles">
} & { render(): Render[".mdx"] },
"mariana-rivera-militante-de-hilo-y-tela.mdx": {
  id: "mariana-rivera-militante-de-hilo-y-tela.mdx",
  slug: "mariana-rivera-militante-de-hilo-y-tela",
  body: string,
  collection: "perfiles",
  data: InferEntrySchema<"perfiles">
} & { render(): Render[".mdx"] },
"martha-clippinger.mdx": {
  id: "martha-clippinger.mdx",
  slug: "martha-clippinger",
  body: string,
  collection: "perfiles",
  data: InferEntrySchema<"perfiles">
} & { render(): Render[".mdx"] },
},
"tramas": {
"del-campo-a-la-ciudad.mdx": {
  id: "del-campo-a-la-ciudad.mdx",
  slug: "del-campo-a-la-ciudad",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"el-huipil.mdx": {
  id: "el-huipil.mdx",
  slug: "el-huipil",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"el-legado-de-dona-santa.mdx": {
  id: "el-legado-de-dona-santa.mdx",
  slug: "el-legado-de-dona-santa",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"flor-de-naupan.mdx": {
  id: "flor-de-naupan.mdx",
  slug: "flor-de-naupan",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"grecas-de-olvido.mdx": {
  id: "grecas-de-olvido.mdx",
  slug: "grecas-de-olvido",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"mi-blusa-de-tlahui.mdx": {
  id: "mi-blusa-de-tlahui.mdx",
  slug: "mi-blusa-de-tlahui",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"neuquen-sentir-el-textil-mapuche.mdx": {
  id: "neuquen-sentir-el-textil-mapuche.mdx",
  slug: "neuquen-sentir-el-textil-mapuche",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"pedro-frida-y-su-jardin-de-flores.mdx": {
  id: "pedro-frida-y-su-jardin-de-flores.mdx",
  slug: "pedro-frida-y-su-jardin-de-flores",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"sabiduria-de-la-selva.mdx": {
  id: "sabiduria-de-la-selva.mdx",
  slug: "sabiduria-de-la-selva",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"tepenrihi-tstipekua.mdx": {
  id: "tepenrihi-tstipekua.mdx",
  slug: "tepenrihi-tstipekua",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"tradicion-telera.mdx": {
  id: "tradicion-telera.mdx",
  slug: "tradicion-telera",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
"volver-al-telar.mdx": {
  id: "volver-al-telar.mdx",
  slug: "volver-al-telar",
  body: string,
  collection: "tramas",
  data: InferEntrySchema<"tramas">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
