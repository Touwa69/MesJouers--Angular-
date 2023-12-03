import { Equipe } from "./equipe.model";

export class CategorieWrapper{
_embedded!: { equipes: Equipe[]};
}