import { GetSchemaType, Schema } from "../utils/codec";

export const OverviewModel = Schema.object({
    name: Schema.string,
    description: Schema.string,
    image: Schema.string,
    bio: Schema.string,
    email: Schema.email,
    website: Schema.url,
    resumeUrl: Schema.optional(Schema.string),
    social: Schema.array(
        Schema.object({
            name: Schema.string,
            url: Schema.url,
            className: Schema.string,
        })
    ),
});

export const ExperienceModel = Schema.object({
    education: Schema.array(
        Schema.object({
            school: Schema.string,
            title: Schema.string,
            years: Schema.string,
            description: Schema.optionalSafe(Schema.string, ""),
        })
    ),
    work: Schema.array(
        Schema.object({
            company: Schema.string,
            title: Schema.string,
            years: Schema.string,
            description: Schema.optionalSafe(Schema.string, ""),
        })
    ),
    skills: Schema.array(
        Schema.object({
            name: Schema.string,
            level: Schema.number,
        })
    ),
});

export const PortfolioModel = Schema.object({
    projects: Schema.array(
        Schema.object({
            title: Schema.string,
            category: Schema.string,
            image: Schema.url,
            url: Schema.url,
        })
    ),
});

export const ResumeModel = Schema.object({
    overview: OverviewModel,
    experience: ExperienceModel,
    portfolio: PortfolioModel,
});

export type Resume = GetSchemaType<typeof ResumeModel>;
export type Overview = GetSchemaType<typeof OverviewModel>;
export type Experience = GetSchemaType<typeof ExperienceModel>;
export type Portfolio = GetSchemaType<typeof PortfolioModel>;
