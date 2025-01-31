export class CurrentStreamingEntity {
    declare page: number;

    declare results: CurrentStreamingEntityData[]

}

export class CurrentStreamingEntityData {
    declare backdrop_path: string;

    declare id: number;

    declare title: string;

    declare original_title: string;

    declare name: string;

    declare original_name: string;

    declare overview: string;

    declare poster_path: string;

    declare media_type: string;

    declare adult: boolean;

    declare original_language: string;

    declare genre_ids: number[];

    declare popularity: number;

    declare release_date: string;

    declare first_air_date: string;

    declare video: boolean;

    declare vote_average: number;

    declare vote_count: number;
}