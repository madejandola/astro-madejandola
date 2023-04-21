interface Post {
	codigo: number;
	descripcion: string;
	telefonos?: Telefonos[];
	titulares?: Titulares[];
	emails?: Emails[];
	lugares?: Lugares[];
}

interface Titulares {
	apellido: string;
	nombre: string;
}

interface Telefonos {
	numero?: number;
	prefijo?: number;
	descripcion?: string;
}

interface Emails {
	email?: string;
}

interface Lugares {
	descripcion?: number;
}

export type {
	Post,
	Titulares,
	Telefonos,
	Emails,
	Lugares
};
